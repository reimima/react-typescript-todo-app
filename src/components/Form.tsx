import { useTodoDispatch, useTodoState } from '@/providers';
import type { DisplayFilter } from '@/types';
import { formCss } from './components.css';

export const Form = () => {
	const { filter } = useTodoState();
	const { addTodo, changeFilter } = useTodoDispatch();

	const handleAction = (formData: FormData) => {
		const text = formData.get('text');

		if (typeof text !== 'string' || !text.trim()) return;

		addTodo(String(text));
	};

	return (
		<div className={formCss}>
			<form className={formCss} action={handleAction}>
				<input type='text' name='text' />
				<button type='submit'>Add</button>
			</form>
			<select
				value={filter}
				onChange={event => changeFilter(event.target.value as DisplayFilter)}
			>
				<option value='all'>すべて</option>
				<option value='incompleted'>未完了</option>
				<option value='completed'>完了</option>
				<option value='deleted'>履歴</option>
			</select>
		</div>
	);
};
