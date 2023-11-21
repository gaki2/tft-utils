import fs from 'fs';

// parser 안에서만 사용할것
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
}
