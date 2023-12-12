function romanToInteger(s) {
  const romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  let prevValue = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const numeral = s[i];
    const value = romans[numeral];

    if (value < prevValue) {
      result -= value;
    } else {
      result += value;
    }

    prevValue = value; // 5
  }

  return result;
}

console.log(romanToInteger("IIV"));
