export const parseArgs = () => {
  const args = process.argv.slice(2);
  const showArray = [];
  args.forEach((arg) => {
    if (arg.startsWith('--')) {
      showArray.push(arg.slice(2));
    } else {
      showArray[showArray.length - 1] = `${showArray[showArray.length - 1]} is ${arg}`;
    }
  })
  console.log(showArray.join(', '));
};

parseArgs();