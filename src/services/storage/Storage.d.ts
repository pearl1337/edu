export type StorageData = string | number | object | null;
export type StorageKey = string;

export interface IStorage {
  write(key: StorageKey, payload: StorageData): void;
  read(key: StorageKey): StorageData;
  remove(key: StorageKey): void;
  clear(): void;
}
