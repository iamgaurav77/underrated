import {
  type Instance,
  type SnapshotIn,
  type SnapshotOut,
  applySnapshot,
  types,
} from 'mobx-state-tree';
import { useMemo } from 'react';

/**
 * State Management
 *
 * This is the MobX root store for the application.
 *
 * @link https://mobx.js.org/defining-data-stores.html
 * @link https://medium.com/@borisdedejski/next-js-mobx-and-typescript-boilerplate-for-beginners-9e28ac190f7d
 */

let store: IStore | undefined;

const Store = types.model({
  // Add your store properties here
});

export type IStore = Instance<typeof Store>;
export type IStoreSnapshotIn = SnapshotIn<typeof Store>;
export type IStoreSnapshotOut = SnapshotOut<typeof Store>;

export const DEFAULT_STORE_VALUE = {};

export function initializeStore(snapshot: any = null): IStore {
  const _store = store ?? Store.create(DEFAULT_STORE_VALUE);

  // If your page has Next.js data fetching methods that use a Mobx store, it will
  // get hydrated here, check `pages/ssg.tsx` and `pages/ssr.tsx` for more details
  if (snapshot) {
    applySnapshot(_store, snapshot);
  }
  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return store;
}

export function useStore(initialState: any): IStore {
  return useMemo(() => initializeStore(initialState), [initialState]);
}
