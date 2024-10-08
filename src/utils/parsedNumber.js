export const parsedNumber = (v, d) => {
  const checkChaining = {
    v,
    d,
    isString() {
      if (typeof this.v !== 'string') {
        this.v = this.d;
      }
      return this;
    },
    parseToInteger() {
      const parsedValue = parseInt(Math.ceil(this.v));
      this.v = Number.isNaN(parsedValue) ? this.d : parsedValue;
      return this;
    },
    getResult() {
      return this.v.toString();
    },
  };

  return checkChaining.isString().parseToInteger().getResult();
};
