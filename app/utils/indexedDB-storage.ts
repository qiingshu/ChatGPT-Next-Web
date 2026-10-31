import { StateStorage } from "zustand/middleware";
import { get, set, del, clear } from "idb-keyval";
import { safeLocalStorage } from "@/app/utils";

const localStorage = safeLocalStorage();

class IndexedDBStorage implements StateStorage {
  private pendingWrites = new Set<Promise<void>>();

  public async flush(): Promise<void> {
    while (this.pendingWrites.size) await Promise.all([...this.pendingWrites]);
  }
  public async getItem(name: string): Promise<string | null> {
    try {
      const value = (await get(name)) || localStorage.getItem(name);
      return value;
    } catch (error) {
      return localStorage.getItem(name);
    }
  }

  public setItem(name: string, value: string): Promise<void> {
    const write = this.writeItem(name, value);
    this.pendingWrites.add(write);
    write.then(
      () => this.pendingWrites.delete(write),
      () => this.pendingWrites.delete(write),
    );
    return write;
  }

  private async writeItem(name: string, value: string): Promise<void> {
    try {
      const _value = JSON.parse(value);
      if (!_value?.state?._hasHydrated) {
        console.warn("skip setItem", name);
        return;
      }
      await set(name, value);
    } catch (error) {
      localStorage.setItem(name, value);
    }
  }

  public async removeItem(name: string): Promise<void> {
    try {
      await del(name);
      localStorage.removeItem(name);
    } catch (error) {
      localStorage.removeItem(name);
    }
  }

  public async clear(): Promise<void> {
    try {
      await clear();
      localStorage.clear();
    } catch (error) {
      localStorage.clear();
    }
  }
}

export const indexedDBStorage = new IndexedDBStorage();
