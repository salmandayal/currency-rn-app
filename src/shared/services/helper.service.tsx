export const reverseString = (str: string) => {
  let newString = '';
  for (let i = str?.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
};

export const sumOfTwoNumbers = (a: number, b: number) => {
  return a + b;
};
