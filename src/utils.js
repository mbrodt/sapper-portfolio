export function map(n, start1, stop1, start2, stop2) {
  return ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
}
export function constrain(value, min, max) {
  return Math.min(max, Math.max(min, value));
}
export function mapConstrain(value, minX, maxX, minY, maxY) {
  return constrain(map(...arguments), minY, maxY);
}
