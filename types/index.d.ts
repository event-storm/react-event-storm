import { IModel, IStorm, IStormState, IVirtualModelConfiguration, IModelConfiguration } from 'event-storm';

export interface ISubscriptionOptions {
  active?: boolean;
}

export function useModels<T extends IModelConfiguration>(models: IModel<any, T>[], options?: ISubscriptionOptions): any[];

export function useStorm<T>(
  store: IStorm<T>,
  selectToFragment?: <K>(
    state: IStormState<T>,
    subscribe: (fragment: K) => K,
  ) => IModel<any, IVirtualModelConfiguration>,
  options?: ISubscriptionOptions,
): IStormState<T>;

export function usePublish<T>(segment: IStorm<T>): IStorm<T>['publish'];
