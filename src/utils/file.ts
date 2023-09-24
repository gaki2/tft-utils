import fs from 'fs';

export const writeFile = async (path: string, content: string) => {
  const directory = path.split('/').slice(0, -1).join('/');
  if (!fs.existsSync(path)) {
    await fs.promises.mkdir(directory, { recursive: true });
  }
  await fs.promises.writeFile(path, content);
};
