import {Observable, of} from 'rxjs';

export type CacheMemory<ID extends string | number | symbol, T> = {
  [id in ID]?: T;
};

export class Cache<ID extends string | number | symbol, T> {
  memory: CacheMemory<ID, Observable<T>> = {};

  getById(id: ID) {
    return this.memory[id];
  }

  addToCache(id: ID, obj: Observable<T>) {
    this.memory[id] = obj;
  }

  removeFromCache(id: ID) {
    this.memory[id] = undefined;
  }

  getCache() {
    return this.memory;
  }

  setCache(cache: CacheMemory<ID, Observable<T>>) {
    this.memory = cache;
  }
}

