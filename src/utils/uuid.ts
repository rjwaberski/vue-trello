export const uuid = (): string => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, char => {
    // tslint:disable-next-line:no-bitwise
    const random: number = (Math.random() * 16) | 0;
    const value: number = char === "x" ? random : (random % 4) + 8;
    return value.toString(16);
  });
};
