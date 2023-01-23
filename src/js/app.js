export default function orderByProps(obj, arr = []) {
  const result = [];
  const keys = [];

  arr.forEach((el) => {
    for (const key in obj) {
      if (key === el) {
        result.push({
          key: `${key}`,
          value: `${obj[key]}`,
        });
      }
    }
  });

  for (const key in obj) {
    if (!arr.includes(key)) {
      keys.push(key);
    }
  }

  keys.sort();

  keys.forEach((el) => {
    result.push({
      key: `${el}`,
      value: `${obj[el]}`,
    });
  });

  return result;
}
