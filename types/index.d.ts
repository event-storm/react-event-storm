import { IModel, IStore, IStoreState } from 'event-storm';

export function useModels(...models: IModel<any>[]): any[];

export function useStore<T>(store: IStore<T>): IStoreState<T>;

export function usePublish<T>(segment: IStore<Partial<T>>): IStore['publish'];
