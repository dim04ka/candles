import { Action as ReduxAction } from 'redux';
export interface Action<T extends string, P = any, M = any> extends ReduxAction {
  type: T;
  payload: P;
  meta?: M;
}

export type ActionType<A> = A extends Action<infer T> ? T : never;
export type ActionPayload<A> = A extends Action<any, infer P> ? P : never;
export type ActionMeta<A> = A extends Action<any, any, infer M> ? M : never;



export const PAYLOAD = 'PAYLOAD';
export type Payload = Action<typeof PAYLOAD>;

export const INCREASE = 'INCREASE';
export type Increase = Action<typeof INCREASE>;