import { General } from '../general';
import path from 'path';

const jsonDir = path.join(__dirname, '../../json');

export class GeneralParser extends General {
  /**
   * cdragon 에서 받아온 json 파일이 UTF-8 로 인코딩 되어 있는 경우가 있어서, (한국어파일에서)
   * 그 경우에 해당 json 파일을 디코딩하여 temp 폴더에 temp.json 으로 저장한다.
   */
  static UTF8ToKoJson = (jsonString: string) => {
    General.writeFile(`${jsonDir}/temp/temp.json`, JSON.stringify(JSON.parse(jsonString), null, 2));
  };
}
