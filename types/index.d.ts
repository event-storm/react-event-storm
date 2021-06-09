import { IModel, IStore } from 'event-storm';

export function useModels(...models: IModel<any>[]): any[];

export function useStore(store: IStore): object;

export function usePublish(store: IStore): IStore['publish'];
