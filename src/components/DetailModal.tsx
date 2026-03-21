import type { TodoOptions, TodoType } from '@/types';
import { modalButtonCss, modalCss } from './components.css';

export const DetailModal = ({
	defaultValue,
	onClose,
	setOptions,
}: {
	defaultValue: TodoOptions;
	onClose: () => void;
	setOptions: (options: TodoOptions) => void;
}) => {
	const handleAction = (formData: FormData) => {
		const textarea = formData.get('textarea');
		const date = formData.get('date');
		const select = formData.get('select');

		setOptions({
			description: String(textarea),
			deadline: String(date),
			priority: select as TodoType['options']['priority'],
		});

		onClose();
	};

	const handleOverlayClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	return (
		<button
			type='button'
			className={modalCss.overlay}
			onClick={handleOverlayClick}
			aria-label='Close modal'
		>
			<div className={modalCss.modalCard}>
				<form action={handleAction} className={modalCss.formStack}>
					<div className={modalCss.labelContainer}>
						<label>
							<p className={modalCss.labelTitle}>Memo</p>
							<textarea
								className={modalCss.inputField}
								defaultValue={defaultValue.description}
								name='textarea'
								placeholder='Add Memo'
								rows={3}
							/>
						</label>
					</div>

					<div className={modalCss.labelContainer}>
						<label>
							<p className={modalCss.labelTitle}>Deadline</p>
							<input
								className={modalCss.inputField}
								defaultValue={defaultValue.deadline}
								type='date'
								name='date'
							/>
						</label>
					</div>

					<div className={modalCss.labelContainer}>
						<label>
							<p className={modalCss.labelTitle}>Priority</p>
							<select
								className={modalCss.inputField}
								defaultValue={defaultValue.priority}
								name='select'
							>
								<option value='low'>Low</option>
								<option value='medium'>Medium</option>
								<option value='high'>High</option>
							</select>
						</label>
					</div>

					<div className={modalCss.actionRow}>
						<button
							className={modalButtonCss.cancelButton}
							type='button'
							onClick={onClose}
						>
							Cancel
						</button>
						<button className={modalButtonCss.saveButton} type='submit'>
							Save
						</button>
					</div>
				</form>
			</div>
		</button>
	);
};
