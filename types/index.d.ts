import { IModel, IStorm, IStormState, IModelConfiguration } from 'event-storm';

export interface ISubscriptionOptions {
  active?: boolean;
}

export function useModels<T extends IModelConfiguration>(models: IModel<any, T>[], options?: ISubscriptionOptions): any[];

export type TFragmentSubscribe<K> = (fragment: K) => K;
export type TSelectFragment<T, K = any> = (
  state: IStormState<T>,
  subscribe: TFragmentSubscribe<T>,
) => K;

export function useStorm<T, K = any>(
  storm: IStorm<T>,
  selectToFragment?: TSelectFragment<T, K>,
  options?: ISubscriptionOptions,
): K;

export function useDispatch<T>(segment: IStorm<T>): IStorm<T>['dispatch'];
