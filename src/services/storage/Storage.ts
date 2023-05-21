import { IStorage, StorageKey, StorageData } from "./Storage.d";
export type { IStorage, StorageKey, StorageData } from "./Storage.d";

export class LocalStorage implements IStorage {
  public write(key: StorageKey, payload: StorageData): void {
    localStorage.setItem(key, JSON.stringify(payload));
  }
  public read(key: StorageKey): StorageData {
    return localStorage.getItem(key);
  }
  public remove(key: StorageKey): void {
    localStorage.removeItem(key);
  }
  public clear(): void {
    localStorage.clear();
  }
}
