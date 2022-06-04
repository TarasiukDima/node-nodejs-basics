export const parseEnv = () => {
  const keys = Object.keys(process.env).filter((key) => key.startsWith("RSS_"));
  let needEntries = [];
  keys.forEach((key) => {
    needEntries.push(`${key}=${process.env[key]}`);
  })
  console.log(needEntries.join('; '));
};

parseEnv();