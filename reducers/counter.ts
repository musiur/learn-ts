
// actions
export enum COUNT_ACTIONS {
    INCREMENT = "increment",
    DECREMENT = "decrement"
}

// action type and payload
interface CountAction {
    type: COUNT_ACTIONS,
    payload: number
}

// state config
interface CountState {
    count: number
}

// initial state
export const InitialCounterState : CountState = {
    count: 0
}

// counter reducer
const CounterReducer = (state: CountState, action: CountAction) => {
  const { type, payload } = action;

  // action type checking and executing
  switch (type) {
    case COUNT_ACTIONS.INCREMENT:
      return {
        ...state,
        count: state.count + payload,
      };
    case COUNT_ACTIONS.DECREMENT:
      return {
        ...state,
        count: state.count - payload,
      };
    default:
      return state;
  }
}

export default CounterReducer

