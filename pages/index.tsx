
import CounterReducer, { COUNT_ACTIONS, InitialCounterState } from "@/reducers/counter";
import TodoReducer, { InitialTodoState } from "@/reducers/todo";
import { FunctionComponent, useReducer } from "react";


const Home: FunctionComponent = () => {
  const [counter, dispatch] = useReducer(CounterReducer, InitialCounterState)
  const incrementCount = () => {
    dispatch({type: COUNT_ACTIONS.INCREMENT, payload: 5})
  }
  const decrementCount = () => {
    dispatch({type: COUNT_ACTIONS.DECREMENT, payload: 5})
  }
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
