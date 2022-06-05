# Node.js basics

## Для проверки заданий:
  1. File system (src/fs):
    - "npm run fs1" - запускает файл create.js,
    - "npm run fs2" - запускает файл copy.js,
    - "npm run fs3" - запускает файл rename.js,
    - "npm run fs4" - запускает файл delete.js,
    - "npm run fs5" - запускает файл list.js,
    - "npm run fs6" - запускает файл read.js,

  2. Command line interface(src/cli):
    - clienv.js
      - **для powershell** "npm run cli1_powershell" - запускает файл clienv.js,
      - **для bash** скопируйте и вставьте в консоль - RSS_name1=value1 RSS_name2=value2 node ./src/cli/env.js
    - "npm run cli2" - запускает файл args.js c аргументами,

  3. Modules(src/modules):
    - "npm run module" - запускает файл cjsToEsm.mjs",
      > Для вывода в консоль UnknownObject(который импортируется в зависимости от рандома), можете добавить в файл "\src\modules\cjsToEsm.mjs" следующий код:
      ```javascript
      console.log('UnknownObject: ', unknownObject);
      ```
  4. Hash (src/hash):
    - "npm run hash" - запускает файл calcHash.js",

  5. Streams (src/streams):
    - "npm run streams1" - запускает файл read.js",
    - "npm run streams2" - запускает файл write.js",
    - "npm run streams3" - запускает файл transform.js",

  6. Zlib (src/zip):
    - "npm run zip1" - запускает файл compress.js",
    - "npm run zip2" - запускает файл decompress.js",

  7. Worker Threads (src/wt):
    - "npm run worker" - запускает файл main.js",
      > Для вывода в консоль ошибочных ответов, можете добавить в файл "\src\modules\main.js" , в 12 строку под созданием инстанса Worker следующий код, или переменную fibNumber заменить число на строку:
      ```javascript
        if (Math.random() > 0.5) rej({ status: 'rejected', data: null});
      ```

  8. Child Processes (src/cp):
    - "npm run cp" - запускает файл cp.js c аргументами arg1 arg2 something3",








