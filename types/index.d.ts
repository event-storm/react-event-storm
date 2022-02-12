import { IModel, IStore, IStoreState, IVirtualModelConfiguration, IModelConfiguration } from 'event-storm';

export interface ISubscriptionOptions {
  active?: boolean;
}

export function useModels<T extends IModelConfiguration>(models: IModel<any, T>[], options?: ISubscriptionOptions): any[];

export function useStore<T>(
  store: IStore<T>,
  selectToFragment?: <K>(
    state: IStoreState<T>,
    subscribe: (fragment: K) => K,
  ) => IModel<any, IVirtualModelConfiguration>,
  options?: ISubscriptionOptions,
): IStoreState<T>;

export function usePublish<T>(segment: IStore<T>): IStore['publish'];
