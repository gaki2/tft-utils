import { execute as createJson } from '@src/script/createJsonFromDragon';
import { execute as createTraitObject } from '@src/script/traitObject';
import { execute as createChampionObject } from '@src/script/championObject';

const execute = async () => {
  try {
    await createJson();
    await createTraitObject();
    await createChampionObject();
  } catch (err) {
    console.error(err);
  }
};

execute();
