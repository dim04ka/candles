import {
  Action,
  ActionMeta,
  ActionPayload,
  ActionType,
} from './types';
import * as Actions from './types';

export function createAction<A extends Action<string>>(
  type: ActionType<A>,
  payload?: ActionPayload<A>,
  meta?: ActionMeta<A>
): A {
  return { type, payload, meta } as any;
}



export const increase = (): Actions.Increase => createAction(Actions.INCREASE);