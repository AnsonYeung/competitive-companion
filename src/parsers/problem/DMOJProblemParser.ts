import { Sendable } from '../../models/Sendable';
import { TaskBuilder } from '../../models/TaskBuilder';
import { htmlToElement } from '../../utils/dom';
import { Parser } from '../Parser';

export class DMOJProblemParser extends Parser {
  public getMatchPatterns(): string[] {
    return ['https://dmoj.ca/problem/*'];
  }

  public async parse(url: string, html: string): Promise<Sendable> {
    const elem = htmlToElement(html);
    const task = new TaskBuilder('DMOJ').setUrl(url);

    task.setName(elem.querySelector('.problem-title h2').textContent);

    const inputs = [...elem.querySelectorAll('h4')].filter(el => {
      const text = el.textContent.toLowerCase();

      if (text.includes('output') || text.includes('explanation')) {
        return false;
      }

      return text.includes('sample input');
    });

    const outputs = [...elem.querySelectorAll('h4')].filter(el => {
      const text = el.textContent.toLowerCase();

      if (text.includes('explanation')) {
        return false;
      }

      return text.includes('sample output') || text.includes('output for sample input');
    });

    for (let i = 0; i < inputs.length && i < outputs.length; i++) {
      let inputElem: Element = inputs[i];
      while (inputElem.tagName !== 'PRE') {
        inputElem = inputElem.nextElementSibling;
      }

      let outputElem: Element = outputs[i];
      while (outputElem.tagName !== 'PRE') {
        outputElem = outputElem.nextElementSibling;
      }

      task.addTest(inputElem.textContent, outputElem.textContent);
    }

    const timeLimitStr = [...elem.querySelectorAll('.problem-info-entry')]
      .find(el => el.querySelector('.fa-clock-o') !== null)
      .textContent.split('\n')[2]
      .slice(0, -1);
    task.setTimeLimit(parseFloat(timeLimitStr) * 1000);

    const memoryLimitStr = [...elem.querySelectorAll('.problem-info-entry')]
      .find(el => el.querySelector('.fa-server') !== null)
      .textContent.split('\n')[2]
      .slice(0, -1);
    task.setMemoryLimit(parseInt(memoryLimitStr, 10));

    return task.build();
  }
}
