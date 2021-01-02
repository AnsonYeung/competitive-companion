import { Sendable } from '../../models/Sendable';
import { TaskBuilder } from '../../models/TaskBuilder';
import { htmlToElement } from '../../utils/dom';
import { Parser } from '../Parser';
export class HKOJProblemParser extends Parser {
  public getMatchPatterns(): string[] {
    return ['https://judge.hkoi.org/task/*'];
  }
  public async parse(url: string, html: string): Promise<Sendable> {
    const elem = htmlToElement(html);
    const task = new TaskBuilder('HKOJ').setUrl(url);
    task.setName(elem.querySelector('.print-nolink').textContent);

    const limitsStr = elem.querySelector('.task-info').textContent;
    const limits = /: ([0-9.]*).*\n.*: ([0-9.]*)/.exec(limitsStr);

    task.setTimeLimit(parseFloat(limits[1]));
    task.setMemoryLimit(parseFloat(limits[2]));

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

    return task.build();
  }
}
