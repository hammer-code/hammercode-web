/**
 * @param {Array<any>} array
 * @param {number} by
 * @returns
 */
export function rotateElements (array, by = 1) {
  const left = array.slice(0, by)
  const right = array.slice(by)
  return [...right, ...left];
}
