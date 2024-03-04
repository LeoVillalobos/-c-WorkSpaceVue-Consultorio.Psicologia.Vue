export const folioPad = (value: number | undefined, prefix = "", size = 6) => {
  if (!value) {
    value = 0;
  }
  const s = "000000" + value;
  return "#" + prefix + s.substring(s.length - size);
};
