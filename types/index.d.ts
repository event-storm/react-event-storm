import { IModel, IStorm, IStormState, IModelConfiguration } from 'event-storm';

export interface ISubscriptionOptions {
  active?: boolean;
}

export function useModels<T extends IModelConfiguration>(models: IModel<any, T>[], options?: ISubscriptionOptions): any[];

export type FragmentSubscribe = <Fragment>(fragment: Fragment) => Fragment;
export type SelectFragment<T, K> = (
  state: IStormState<T>,
  subscribe: FragmentSubscribe,
) => K;

export function useStorm<T, K = IStormState<T>>(
  storm: IStorm<T>,
  selectToFragment?: SelectFragment<T, K>,
  options?: ISubscriptionOptions,
): K;

export function useDispatch<T>(segment: IStorm<T>): IStorm<T>['dispatch'];
