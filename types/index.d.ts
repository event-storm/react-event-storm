import { IModel, IStore, IStoreState } from 'event-storm';

export interface IStoreOptions {
  active: boolean;
}

export function useModels(...models: IModel<any>[]): any[];

export function useStore<T>(store: IStore<T>, options?: IStoreOptions): IStoreState<T>;

export function usePublish<T>(segment: IStore<T>): IStore['publish'];
