import TodoReducer, { InitialTodoState, TODO_ACTIONS } from "@/reducers/todo";
import { useReducer, useState } from "react";

const Works = () => {
  // todo state handler
  const [todoState, dispatch] = useReducer(TodoReducer, InitialTodoState);
  const [text, setText] = useState("");
  const [update, setUpdate] = useState(0);

  // adding new todo item
  const AddTodo = () => {
    dispatch({ type: TODO_ACTIONS.ADD, payload: { id: 0, text } });
    setText("");
  };

  // updating todo item with id
  const UpdateTodo = (id: number) => {
    dispatch({ type: TODO_ACTIONS.UPDATE, payload: { id, text } });
    setText("");
    setUpdate(0)
  };

  // updating todo item with id
  const DeleteTodo = (id: number) => {
    dispatch({ type: TODO_ACTIONS.DELETE, payload: { id, text } });
    setText("");
  };

  return (
    <section className="container">
      <div className="max-w-[400px] mx-auto">
        <h1 className="text-3xl font-bold mb-5">Todos</h1>
        {/* adding new todo item */}
        <div className="border rounded-md flex items-center justify-between">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full p-1 rounded-md focus:outline-0"
          />
          <button
            onClick={() => (update ? UpdateTodo(update) : AddTodo())}
            className="px-3 py-1 rounded-md bg-blue-600 text-white"
          >
            {update ? "Update" : "Add"}
          </button>
        </div>
        {/* all the todo items */}
        <div className="grid grid-cols-1 gap-2 py-5 relative">
          {update ? (
            <div className="absolute top-0 left-0 w-full h-full rounded-md bg-[#ffffff50]"></div>
          ) : null}
          {todoState.todos.length
            ? todoState.todos.map((todo) => {
                return (
                  // individual todo
                  <div
                    key={todo.id}
                    className="border rounded-md flex items-center justify-between gap-1"
                  >
                    <input
                      value={todo.text}
                      onChange={(e) => setText(e.target.value)}
                      className="w-full p-1 rounded-md focus:outline-0"
                    />
                    <button
                      onClick={() => setUpdate(todo.id)}
                      className="px-3 py-1 rounded-md bg-blue-600 text-white"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => DeleteTodo(todo.id)}
                      className="px-3 py-1 rounded-md bg-red-600 text-white"
                    >
                      Delete
                    </button>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </section>
  );
};

export default Works;
