export const initCharacter = () => {};

export const calcFhNums = (dn: number): number[] => {
  let newFhNums = [];
  for (let i = 2; i <= dn; i++) {
    if (i !== dn) {
      newFhNums.push(i);
    }
  }
  newFhNums.push(dn + 1);

  return newFhNums;
};
