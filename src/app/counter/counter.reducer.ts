import { createReducer, on } from '@ngrx/store';
import { increment, decrement, incrementByAmount } from './counter.action';

export const initialState: number = 0;

const _counterReducer = createReducer(
  initialState,
  on(increment, state =>  state + 1),
  on(decrement, state => state - 1),
  on(incrementByAmount, (state, action) => state + action.amount)
);

export function counterReducer(state: number | undefined, action: any) {
  return _counterReducer(state, action);
}
