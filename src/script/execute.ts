import { execute as createJson } from './fetchCdragonJson';
import { execute as createTraitObject } from '../script/traitObject';
import { execute as createChampionObject } from '../script/championObject';

const execute = async () => {
  try {
    await createJson();
    await createChampionObject();
    await createTraitObject();
  } catch (err) {
    console.error(err);
  }
};

void execute();
