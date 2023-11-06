import fs from 'fs';

export class General {
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
}
