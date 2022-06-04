import fs from 'fs';
import zlib from 'zlib';
import { pipeline } from 'stream';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const compress = async () => {
  const fileForZipPath = path.join(__dirname, 'files', 'fileToCompress.txt');
  const fileZipPath = path.join(__dirname, 'files', 'fileToCompress.txt.gz');
  const errorText = 'Zip operation failed';
  const gzip = zlib.createGzip();
  const fileForZip = fs.createReadStream(fileForZipPath);
  const zipFile = fs.createWriteStream(fileZipPath);

  pipeline(fileForZip, gzip, zipFile, (err) => {
    if (err) {
      console.log(errorText);
    }
  });
};

compress();