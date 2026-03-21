import { memo } from 'react';
import { useTodoDispatch } from '@/providers';
import type { TodoType } from '@/types';
import { todoCss } from './components.css';

const formatDeadline = (deadline: string): string => {
	const arr = deadline.split('-');

	return `${arr[1]}/${arr[2]}`;
};

export const TodoItem = memo(({ todo }: { todo: TodoType }) => {
	const { toggleTodo, deleteTodo, restoreTodo } = useTodoDispatch();

	return (
		<li className={todoCss.item}>
			{/** biome-ignore lint/a11y/noLabelWithoutControl: biomeがlabel内のinputを認識しないため */}
			<label className={todoCss.label}>
				{!todo.removed && (
					<input
						type='checkbox'
						checked={todo.completed}
						title='Toggle Todo'
						onChange={() => toggleTodo(todo.id)}
					/>
				)}
				<span
					className={todo.completed ? todoCss.completed_span : todoCss.incompleted_span}
				>
					{todo.text}
				</span>
			</label>

			<div className={todoCss.options}>
				{todo.options.deadline && (
					<span title='Todo Deadline'>{formatDeadline(todo.options.deadline)}</span>
				)}

				{todo.options.description && <span title={todo.options.description}>📝</span>}

				{todo.removed ? (
					<button type='button' title='Restore Todo' onClick={() => restoreTodo(todo.id)}>
						⏫
					</button>
				) : (
					<button type='button' title='Delete Todo' onClick={() => deleteTodo(todo.id)}>
						🗑️
					</button>
				)}
			</div>
		</li>
	);
});
