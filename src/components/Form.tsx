import { useState } from 'react';
import { useTodoDispatch, useTodoState } from '@/providers';
import type { DisplayFilter, TodoOptions } from '@/types';
import { formCss } from './components.css';
import { DetailModal } from './DetailModal';

export const Form = () => {
	const { filter } = useTodoState();
	const { addTodo, changeFilter } = useTodoDispatch();

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [options, setOptions] = useState<TodoOptions>({
		description: '',
		deadline: '',
		priority: 'low',
	});

	const handleAction = (formData: FormData) => {
		const text = formData.get('text');

		if (typeof text !== 'string' || !text.trim()) return;

		addTodo(String(text), options);
		setOptions({ description: '', deadline: '', priority: 'low' });
	};

	return (
		<div className={formCss}>
			<form className={formCss} action={handleAction}>
				<input type='text' name='text' title='Task Content' placeholder='New Task...' />
				<button type='submit' title='Add Task'>
					➕
				</button>
			</form>
			<button type='button' title='Open Options' onClick={() => setIsModalOpen(true)}>
				⚙️
			</button>

			{isModalOpen && (
				<DetailModal
					defaultValue={options}
					onClose={() => setIsModalOpen(false)}
					setOptions={setOptions}
				/>
			)}

			<select
				value={filter}
				title='Set Filter'
				onChange={event => changeFilter(event.target.value as DisplayFilter)}
			>
				<option value='all'>All</option>
				<option value='incompleted'>Incompleted</option>
				<option value='completed'>Completed</option>
				<option value='deleted'>History</option>
			</select>
		</div>
	);
};
