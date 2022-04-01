import { IModel, IStorm, IStormState, IModelConfiguration } from 'event-storm';

export interface ISubscriptionOptions {
  active?: boolean;
}

export function useModels<T extends IModelConfiguration>(models: IModel<any, T>[], options?: ISubscriptionOptions): any[];

export type TFragmentSubscribe<K> = (fragment: IStormState<K>) => K;
export type TSelectFragment<T> = (
  state: IStormState<T>,
  subscribe: TFragmentSubscribe<T>,
) => any;

export function useStorm<T>(
  store: IStorm<T>,
  selectToFragment?: TSelectFragment<T>,
  options?: ISubscriptionOptions,
): IStormState<T>;

export function usePublish<T>(segment: IStorm<T>): IStorm<T>['publish'];
