import { useMemo } from 'react';
import { useTodoState } from '@/providers';
import { todoCss } from './components.css';
import { DeletedTodo } from './DeletedTodo';
import { Todo } from './Todo';

export const TodoList = () => {
	const { todos, deletedTodos, filter } = useTodoState();

	const displayTodos = useMemo(() => {
		switch (filter) {
			case 'deleted':
				return deletedTodos;

			case 'incompleted':
				return todos.filter(t => !t.completed);

			case 'completed':
				return todos.filter(t => t.completed);

			default:
				return todos;
		}
	}, [todos, deletedTodos, filter]);

	return (
		<ul className={todoCss.list}>
			{filter === 'deleted'
				? displayTodos.map(todo => <DeletedTodo key={todo.id} todo={todo} />)
				: displayTodos.map(todo => <Todo key={todo.id} todo={todo} />)}
		</ul>
	);
};
