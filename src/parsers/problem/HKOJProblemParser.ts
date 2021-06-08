import { Sendable } from '../../models/Sendable';
import { TaskBuilder } from '../../models/TaskBuilder';
import { htmlToElement } from '../../utils/dom';
import { Parser } from '../Parser';
export class HKOJProblemParser extends Parser {
  public getMatchPatterns(): string[] {
    return ['https://judge.hkoi.org/task/*'];
  }
  public async parse(url: string, html: string): Promise<Sendable> {
    const task = new TaskBuilder('HKOJ').setUrl(url);
    const elem = htmlToElement(html);

    task.setName(elem.querySelector('.print-nolink').textContent);

    const panels = elem.querySelectorAll('.panel');

    let outputOnly = false;
    panels.forEach(panel => {
      if (panel.querySelector('.panel-heading')) {
        const filenames = panel.querySelectorAll('.texttt');
        switch (panel.querySelector('.panel-heading').textContent) {
          case 'Output-Only Task Information':
            task.setTimeLimit(0);
            task.setMemoryLimit(0);
            outputOnly = true;
            break;
          case 'Special Input / Output Instructions':
            task.setInput({
              fileName: filenames[0].textContent,
              type: 'file',
            });
            task.setOutput({
              fileName: filenames[1].textContent,
              type: 'file',
            });
            break;
        }
      }
    });

    if (outputOnly) {
      return task.build();
    }

    let testAvailable = false;
    const h1s = elem.querySelectorAll('h1');

    h1s.forEach(h1 => {
      if (h1.textContent === 'Sample Tests') {
        testAvailable = true;
      }
    });

    if (!testAvailable) {
      task.setInteractive(true);
    }

    const limitsStr = elem.querySelector('.task-info').textContent;
    const limits = /: ([0-9.]*).*\n.*: ([0-9.]*)/.exec(limitsStr);

    task.setTimeLimit(parseFloat(limits[1]) * 1000);
    task.setMemoryLimit(parseFloat(limits[2]));
    if (testAvailable) {
      elem.querySelectorAll('.sample').forEach(row => {
        if (row.querySelector('.io')) {
          const input = row.children[1].innerHTML;
          const output = row.children[2].innerHTML;

          task.addTest(
            input.replace(/<br>/g, '\n').replace(/&nbsp;/g, ' '),
            output.replace(/<br>/g, '\n').replace(/&nbsp;/g, ' '),
          );
        }
      });
    }

    return task.build();
  }
}
