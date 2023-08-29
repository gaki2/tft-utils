import fs from 'fs';

export const writeFile = (path: string, content: string) =>
  new Promise((resolve, reject) => {
    const directory = path.split('/').slice(0, -1).join('/');

    try {
      if (!fs.existsSync(path)) {
        fs.promises.mkdir(directory, { recursive: true });
      }
      fs.promises.writeFile(path, content);
      resolve('');
    } catch (e) {
      reject('');
    }
  });
