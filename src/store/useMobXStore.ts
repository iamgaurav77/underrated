import { MobXProviderContext } from 'mobx-react';
import React from 'react';
import type { IStore } from './root';

export default function useMobXStore(): IStore {
  const { store } = React.useContext(MobXProviderContext);
  const mobxStore: IStore = store;
  return mobxStore;
}
