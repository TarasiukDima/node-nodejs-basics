import cp from 'child_process';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const argsArray = process.argv.slice(2);

export const spawnChildProcess = async (args) => {
  const scriptPath = path.join(__dirname, 'files', 'script.js');
  const processChild = cp.spawn(
    'node',
    [scriptPath, ...args],
    { stdio: ['pipe', 'pipe', 'pipe', 'ipc'] }
  );

  process.stdin.pipe(processChild.stdin);

  processChild.stdout.pipe(process.stdout);

  processChild.stdout.on('data', (data) => {
    process.stdout.write(`Data from child process: ${data.toString()}\n`);
  });

  processChild.stderr.on('data', () => {
    console.error('Failed stderr in child process.')
  })

  processChild.on('error', (_) => {
    process.stderr.write('Failed to start child process.');
  });
};

spawnChildProcess(argsArray);
