import fs from 'fs';
import { convertKeysToUpperCase, isEmptyObject } from '../../utils/my_lodash';

export class GeneralParser {
  static readFileSync(path: string) {
    return fs.readFileSync(path, 'utf8');
  }

  static async writeFile(path: string, data: string) {
    const directory = path.split('/').slice(0, -1).join('/');
    if (!fs.existsSync(path)) {
      await fs.promises.mkdir(directory, { recursive: true });
    }
    await fs.promises.writeFile(path, data);
  }

  /**
   * JSON string 데이터를 구조화된 자바스크립트 value, object 로 변환
   */
  static parse(data: string) {
    return JSON.parse(data);
  }

  static applyRegex(target: string, ...args: ((text: string) => string)[]) {
    return args.reduce((acc, fn) => fn(acc), target);
  }

  static replaceVariables(text: string, variables: any) {
    if (isEmptyObject(text)) return text;
    convertKeysToUpperCase(text);
    // p2: @variable@ 에서 @Damage*2@ 와 같이 *2 라는 수식이 들어갔을때 *2 를 나타냄.
    return text.replace(/@(\w+)(\*[\d]+)?@/g, function (match, p1, p2) {
      const value = variables[p1.toUpperCase()];
      if (value !== undefined) {
        return p2 ? (value * parseFloat(p2.slice(1))).toFixed(0) : value;
      }
      return match;
    });
  }
}
