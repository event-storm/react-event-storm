import { IModel } from 'event-storm';

export function useModels(...models: IModel<any>[]): any[];

interface IStore {
  [key: string]: IModel<any> | IStore;
}

export function useStore(store: IStore) => ([key: string]: any);
