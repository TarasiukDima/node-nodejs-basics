import { Worker } from 'worker_threads';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import os from "os";

const __dirname = dirname(fileURLToPath(import.meta.url));

const runWorker = async (path, workerData, res, rej) => {
  const worker = new Worker(path, {
    workerData,
  });

  worker.on('message', (message) => {
    res({ status: 'resolved', data: message });
  })

  worker.on('error', () => {
    rej({ status: 'rejected', data: null });
  })
}


export const performCalculations = async () => {
  const workerPath = path.join(__dirname, 'worker.js');
  const CPUCores = os.cpus().length;
  const errorText = 'Worker operation failed';
  const promisesArray = [];
  let fibNumber = 10;
  let step = 0;

  try {
    while (step < CPUCores) {
      promisesArray.push(
        new Promise((res, rej) => {
          runWorker(workerPath, fibNumber, res, rej)
        }).catch((error) => error)
      );
      fibNumber++;
      step++;
    }

    const answers = await Promise.all(promisesArray);
    console.log(answers);
  } catch (error) {
    console.log(errorText);
  }
};

performCalculations();