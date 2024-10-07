export const parsedNumber = (value, defaultValue) => {
  if (typeof value !== 'string') {
    return defaultValue;
  }
  const parsedValue = parseInt(value);

  if (Number.isNaN(parsedValue)) {
    return defaultValue;
  }
  console.log(Number.isInteger(value));
  if (!Number.isInteger(value)) {
    return Math.ceil(value);
  }

  return Number(value);
};

const isInteger = (v) => {
  if (!Number.isInteger(v)) {
    return Math.ceil(v);
  }
  return v;
};

const isNaN = (v) => {
  if (Number.isNaN(v)) {
  }
};
