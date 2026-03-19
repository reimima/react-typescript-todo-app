import { createContext, type ReactNode, useContext } from 'react';
import { useTodos } from '@/hooks';
import type { DisplayFilter, TodoType } from '@/types';

const TodoStateContext = createContext<{
	todos: TodoType[];
	deletedTodos: TodoType[];
	filter: DisplayFilter;
} | null>(null);

const TodoDispatchContext = createContext<{
	addTodo: (text: string) => void;
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

export const TodoProvider = ({ children }: { children: ReactNode }) => {
	const { todos, deletedTodos, filter, actions } = useTodos();

	// actionsはstateに依存しているため、stateはmemo化する意味がない
	const stateValue = { todos, deletedTodos, filter };

	return (
		<TodoStateContext value={stateValue}>
			<TodoDispatchContext value={actions}>{children}</TodoDispatchContext>
		</TodoStateContext>
	);
};
