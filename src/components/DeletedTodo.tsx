import { memo } from 'react';
import { useTodoDispatch } from '@/providers';
import type { TodoType } from '@/types';
import { todoCss } from './components.css';

export const DeletedTodo = memo(({ todo }: { todo: TodoType }) => {
	const { restoreTodo } = useTodoDispatch();

	return (
		<li className={todoCss.item}>
			<span className={todo.completed ? todoCss.completed_span : todoCss.incompleted_span}>
				{todo.text}
			</span>
			<button type='button' onClick={() => restoreTodo(todo.id)}>
				⏫
			</button>
		</li>
	);
});
