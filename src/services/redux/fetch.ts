export interface RequestState<T> {
  pending: boolean;
  received?: T;
  error?: unknown;
}

export const reduceRequestUpdate = (
  sliceState: { request: RequestState<any> },
  payload: { received?: any; error?: unknown }
) => {
  if (payload.received) {
    sliceState.request.received = payload.received;
    sliceState.request.pending = false;
    return;
  }
  if (payload.error) {
    sliceState.request.error = payload.error;
    sliceState.request.pending = false;
    return;
  }
  sliceState.request.pending = true;
};
