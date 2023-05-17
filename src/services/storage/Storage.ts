import { IStorage, StorageKey, StorageData } from "./Storage.d";
export type { IStorage, StorageKey, StorageData } from "./Storage.d";

export class LocalStorage implements IStorage {
  write(key: StorageKey, payload: StorageData): void {
    localStorage.write(key, JSON.stringify(payload));
  }
  read(key: StorageKey): StorageData {
    return localStorage.getItem(key);
  }
  remove(key: StorageKey): void {
    localStorage.removeItem(key);
  }
  clear(): void {
    localStorage.clear();
  }
}
