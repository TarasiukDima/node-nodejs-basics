import fsPromises from 'fs/promises';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { isExistFileOrFolder } from '../utils/helpers.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const read = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToRead.txt');
  const hasFile = await isExistFileOrFolder(filePath);
  const errorText = 'FS read operation failed';

  try {
    if (hasFile) {
      await fsPromises.readFile(filePath, { encoding: 'utf-8' })
        .then((data) => {
          console.log(data);
        })
        .catch((_) => {
          throw new Error(errorText);
        })
    } else {
      throw new Error(errorText);
    }
  } catch (error) {
    console.log(error.message);
  }
};

read();