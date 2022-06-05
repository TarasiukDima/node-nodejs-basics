import readline from 'readline';
import process from 'process';
import { Transform } from 'stream';

export const transform = async () => {
  const startWriteText = 'Write something, please!\n';
  const endWriteText = 'The end!';

  const myTransform = new Transform({
    writableObjectMode: true,
    transform(chunk) {
      return chunk.split('').reverse().join('');
    },
  });

  myTransform.on('data', (chunk) => console.log(chunk));

  const lineRead = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: startWriteText,
  });

  lineRead.prompt();

  lineRead.on('line', (input) => {
    (input.trim() == 'exit')
      ? lineRead.close()
      : process.stdout.write(myTransform._transform(input) + '\n');
  });

  lineRead.on('SIGINT', () => lineRead.close());

  lineRead.on('close', () => {
    process.stdout.write(endWriteText);
  });
};

transform();