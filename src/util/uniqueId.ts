const idCounts: Record<string, number> = {};

export function getUniqueId(idPrefix: string, startingCount = 0) {
  if (idCounts[idPrefix] === undefined || idCounts[idPrefix] > Number.MAX_SAFE_INTEGER) {
    idCounts[idPrefix] = startingCount;
  }
  return `${idPrefix}${idCounts[idPrefix]++}`;
}
