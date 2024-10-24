import { createSlice, nanoid } from "@reduxjs/toolkit";

// Define the initial state of the todos
const initialState = {
    todos: [
        {
            id: "abc",
            task: "Demo Task",
            isDone: false,
        },
    ],
};

// Create a slice of the Redux store using createSlice
export const todoSlice = createSlice({
    name: "todo", // Name of the slice
    initialState, // Initial state of the slice
    reducers: {
        // Define the reducers (actions) for the slice

        // 1st reducer: addTodo
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(), // Generate a unique ID for the new todo
                task: action.payload, // Get the task from the action payload
                isDone: false, // Set isDone to false by default
            };
            state.todos.push(newTodo); // Add the new todo to the todos array
        },

        // 2nd reducer: deleteTodo
        deleteTodo: (state, action) => {
            // Filter out the todo with the specified ID
            state.todos = state.todos.filter((todo) => todo.id != action.payload);
        },

        // 3rd reducer: markAsDone
        markAsDone: (state, action) => {
            // Find the todo with the specified ID and mark it as done
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    todo.isDone = true;
                }
            });
        },
    },
});

// Export the actions
export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions;

export default todoSlice.reducer; // Export the reducer
