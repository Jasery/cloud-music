export const getCount = count => {
  if (typeof count !== "number" || count < 10000) {
    return count;
  }
  if (count / 10000 < 10000) {
    return Math.floor(count / 10000) + "万";
  }
  return Math.floor(count / 100000000) + "亿";
}
