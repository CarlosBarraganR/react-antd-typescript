export class ReducerRegistry {
  emitChange: any;

  reducers: any;

  constructor() {
    this.emitChange = null;
    this.reducers = {};
  }

  getReducers() {
    return { ...this.reducers };
  }

  register(reducer: any) {
    this.reducers = { ...this.reducers, [reducer.sliceName]: reducer };
    if (this.emitChange) {
      this.emitChange(this.getReducers());
    }
  }

  setChangeListener(listener: any) {
    this.emitChange = listener;
  }
}

export const reducerRegistry = new ReducerRegistry();
