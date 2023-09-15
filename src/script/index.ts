import { execute as createJson } from '../script/createJsonFromDragon';
import { execute as createTraitObject } from '../script/traitObject';
import { execute as createChampionObject } from '../script/championObject';

const execute = async () => {
  try {
    await createJson();
    await createTraitObject();
    await createChampionObject();
  } catch (err) {
    console.error(err);
  }
};

void execute();
