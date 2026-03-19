import { memo } from 'react';
import { useTodoDispatch } from '@/providers';
import type { TodoType } from '@/types';
import { todoCss } from './components.css';

export const Todo = memo(({ todo }: { todo: TodoType }) => {
	const { toggleTodo, deleteTodo } = useTodoDispatch();

	return (
		<li className={todoCss.item}>
			<label className={todoCss.label}>
				<input
					type='checkbox'
					checked={todo.completed}
					onChange={() => toggleTodo(todo.id)}
				/>
				<span
					className={todo.completed ? todoCss.completed_span : todoCss.incompleted_span}
				>
					{todo.text}
				</span>
			</label>
			<button type='button' onClick={() => deleteTodo(todo.id)}>
				🗑️
			</button>
		</li>
	);
});
