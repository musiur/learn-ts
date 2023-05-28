import { FunctionComponent, useReducer } from "react";

// An enum with all the types of actions to use in our reducer
enum ACTIONS {
  INCREMENT = "increment",
  DECREMENT = "decrement",
}

// An interface for our actions
interface CountAction {
  type: ACTIONS;
  payload: number;
}

// An interface for our state
interface CountState {
  count: number;
}

// Our reducer function that uses a switch statement to handle our actions
const counterReducer = (state: CountState, action: CountAction) => {
  // destructuring action type and payload
  const { type, payload } = action;

  switch (type) {
    // incrementing
    case ACTIONS.INCREMENT:
      return {
        ...state,
        count: state.count + payload,
      };
    // decrementing
    case ACTIONS.DECREMENT:
      return {
        ...state,
        count: state.count - payload,
      };
    default:
      console.log("Unknown action type in counterReducer");
      return state
  }
};

const Home: FunctionComponent = () => {
  // our counter state with reducer
  const [counter, dispatch] = useReducer(counterReducer, { count: 0 });

  // incrementer
  const incrementCount = () => {
    dispatch({ type: ACTIONS.INCREMENT, payload: 5 })
  };

  // decrementer
  const decrementCount = () => {
    dispatch({ type: ACTIONS.DECREMENT, payload: 5 })
  };

  return (
    <section className="container">
      <h1 className="text-3xl font-bold my-5">Count</h1>
      <p className="text-6xl font-bold p-5">{counter.count}</p>
      <div className="flex items-center justify-start gap-3">
        <button
          onClick={incrementCount}
          className="px-3 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700"
        >
          Increment
        </button>
        <button
          onClick={decrementCount}
          className="px-3 py-2 rounded-xl bg-red-600 text-white hover:bg-red-700"
        >
          Decrement
        </button>
      </div>
    </section>
  );
};

export default Home;
