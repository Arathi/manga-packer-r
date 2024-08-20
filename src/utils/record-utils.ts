export type SNId = string | number;
export interface SNIdObject {
  id: SNId;
}

export function arrayToRecord<T extends SNIdObject>(
  array: Array<T>
): Record<SNId, T> {
  const record: Record<SNId, T> = {};
  for (const element of array) {
    record[element.id] = element;
  }
  return record;
}

export function recordToArray<T extends SNIdObject>(
  record: Record<SNId, T>
): Array<T> {
  const array: Array<T> = [];
  for (const id in record) {
    const element = record[id];
    array.push(element);
  }
  return array;
}
