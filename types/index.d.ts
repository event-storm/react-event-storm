import { IModel, IStore } from 'event-storm';

export function useModels(...models: IModel<any>[]): any[];

export function useStore<T>(store: IStore<T>): T;

export function usePublish<T>(store: IStore<Partial<T>>): IStore['publish'];
