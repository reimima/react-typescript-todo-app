import type { ReactNode } from 'react';
import { useTodos } from '@/hooks';
import { TodoDispatchContext, TodoStateContext } from './TodoContext';

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
