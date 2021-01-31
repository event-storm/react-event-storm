import { IModel } from 'event-storm';

export function useModels<T extends IModel<any>[]>(...models: T): any[];
