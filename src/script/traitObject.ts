import fs from 'fs';
import path from 'path';
import { LanguageType } from '../types/config';
import { writeFile } from './utils';
import { S3 } from '../environments/urls';
import { Season } from '../types/seasonType';
import { SEASON_SET_DATA_IDX_MAP } from './shared';

const jsonDir = path.join(__dirname, '../json');
const outDir = path.join(__dirname, '../_generated');

export interface TraitData {
  apiName: string;
  name: string;
  url: string;
}

class Trait implements TraitData {
  constructor(public apiName: string, public name: string, public url: string) {}
}

/**
 *
 * @example
 * TFT9_targon => targon
 */
function handleApiName(_apiName: string) {
  return _apiName.split('_')[1];
}

export async function createTraits(lang: LanguageType, season: Season) {
  const rawContent = fs.readFileSync(`${jsonDir}/${season}/tft_data_${lang}.json`, 'utf8');
  const jsObject = JSON.parse(rawContent);
  const traits = jsObject['setData'][SEASON_SET_DATA_IDX_MAP[season]]['traits'] as TraitData[];

  const traitsObject: { [key: string]: Trait } = {};
  const traitNamesForType = new Set();

  for (let i = 0; i < traits.length; i++) {
    const { name: _name, apiName: _apiName } = traits[i];
    const name = _name.replace('<br>', '');
    traitNamesForType.add(name);
    const apiName = handleApiName(_apiName);
    const url = `${S3}/${season}/traits/${apiName}.png`;
    const trait = new Trait(apiName, name, url);

    traitsObject[apiName] = trait;
  }
  const ret = `export const trait_${season} = ${JSON.stringify(traitsObject, null, 4)};
export type Trait_${season}_${lang} = ${Array.from(traitNamesForType)
    .map((trait) => `"${trait}"`)
    .join(' | ')}
`;

  await writeFile(`${outDir}/${season}/trait_${lang}.ts`, ret);
}
