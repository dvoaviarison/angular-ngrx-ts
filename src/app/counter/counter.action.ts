import { createAction } from '@ngrx/store';

export const increment = createAction('[Counter] Increment');
export const incrementByAmount = createAction('[Counter] IncrementByAmount', (amount: number) => ({ amount }));
export const decrement = createAction('[Counter] Decrement');
