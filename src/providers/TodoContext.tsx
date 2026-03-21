import { createContext, useContext } from 'react';
import type { DisplayFilter, TodoOptions, TodoType } from '@/types';

export const TodoStateContext = createContext<{
	todos: TodoType[];
	deletedTodos: TodoType[];
	filter: DisplayFilter;
} | null>(null);

export const TodoDispatchContext = createContext<{
	addTodo: (text: string, options: TodoOptions) => void;
	deleteTodo: (id: string) => void;
	toggleTodo: (id: string) => void;
	restoreTodo: (id: string) => void;
	changeFilter: (filter: DisplayFilter) => void;
} | null>(null);

export const useTodoState = () => {
	const context = useContext(TodoStateContext);
	if (!context) throw new Error('useTodoState must be used within TodoProvider');

	return context;
};

export const useTodoDispatch = () => {
	const context = useContext(TodoDispatchContext);
	if (!context) throw new Error('useTodoDispatch must be used within TodoProvider');

	return context;
};
