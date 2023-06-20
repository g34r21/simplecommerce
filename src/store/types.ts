import type { Effect } from 'redux-saga/effects';

export type SagaReturn<R = void, Y = unknown> = Generator<Effect, R, Y>;
