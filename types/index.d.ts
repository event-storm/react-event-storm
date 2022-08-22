import { IModel, IStorm, IStormState, IModelConfiguration } from 'event-storm';

export interface ISubscriptionOptions {
  active?: boolean;
}

export function useModels<T extends IModelConfiguration>(models: IModel<any, T>[], options?: ISubscriptionOptions): any[];

export type FragmentSubscribe = (fragment: any) => any;
export type SelectFragment<T, K = any> = (
  state: IStormState<T>,
  subscribe: FragmentSubscribe,
) => K;

export function useStorm<T, K = any>(
  storm: IStorm<T>,
  selectToFragment?: SelectFragment<T, K>,
  options?: ISubscriptionOptions,
): K;

export function useDispatch<T>(segment: IStorm<T>): IStorm<T>['dispatch'];
