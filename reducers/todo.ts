// actions
export enum TODO_ACTIONS {
  ADD = "add",
  UPDATE = "update",
  DELETE = "delete",
}

//action type and payload
interface TodoAction {
  type: TODO_ACTIONS;
  payload: {
    id: number;
    text: string;
  };
}

// single todo config
interface Todo {
  id: number;
  text: string;
}

// state config
interface TodoState {
  todos: Todo[];
}

// initial state
export const InitialTodoState: TodoState = {
  todos: [],
};

// todo reducer
const TodoReducer = (state: TodoState, action: TodoAction) => {
  const { type, payload } = action;

  // action type checking and executing
  switch (type) {
    // adding new todo
    case TODO_ACTIONS.ADD:
      // finding new id that will be unique
      let maxID = state.todos.length ? state.todos[0].id : 0;

      state.todos.forEach((todo) => {
        if (todo.id > maxID) {
          maxID = todo.id;
        }
      });
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: maxID + 1,
            text: payload.text,
          },
        ],
      };

    // updating todo
    case TODO_ACTIONS.UPDATE:
      const tempTodos = [...state.todos];
      const index = tempTodos.findIndex((todo) => todo.id == 1);
      tempTodos[index].text = payload.text;
      return {
        ...state,
        todos: [...tempTodos],
      };

    // deleting todo
    case TODO_ACTIONS.DELETE:
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== payload.id)],
      };
    default:
      // returning state having no action type
      return state;
  }
};

export default TodoReducer;
