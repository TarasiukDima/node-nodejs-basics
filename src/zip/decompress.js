import fs from 'fs';
import zlib from 'zlib';
import { pipeline } from 'stream';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const decompress = async () => {
  const zipFilePath = path.join(__dirname, 'files', 'fileToCompress.txt.gz');
  const unzipFilePath = path.join(__dirname, 'files', 'fileToCompress.txt');
  const errorText = 'Unzip operation failed';
  const zipReadStream = fs.createReadStream(zipFilePath);
  const unzipWriteStream = fs.createWriteStream(unzipFilePath);
  const unzip = zlib.createGunzip();

  pipeline(zipReadStream, unzip, unzipWriteStream, (err) => {
    if (err) {
      console.log(errorText);
    }
  });
};

decompress();