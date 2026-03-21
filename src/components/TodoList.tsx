import { useTodoState } from '@/providers';
import { todoCss } from './components.css';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
	const { todos, deletedTodos, filter } = useTodoState();

	// stateが変わるときは必ず計算されるため、memo化する意味がない
	const displayTodos = (() => {
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
	})();

	return (
		<ul className={todoCss.list}>
			{displayTodos.map(todo => (
				<TodoItem key={todo.id} todo={todo} />
			))}
		</ul>
	);
};
