import { useCallback, useEffect, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { DisplayFilter, TodoOptions, TodoType } from '@/types';

export const useTodos = () => {
	const [todos, setTodos] = useState<TodoType[]>(() => {
		const saved = localStorage.getItem('todos');

		return saved ? JSON.parse(saved) : [];
	});

	const [deletedTodos, setDeletedTodos] = useState<TodoType[]>(() => {
		const saved = localStorage.getItem('deleted-todos');

		return saved ? JSON.parse(saved) : [];
	});

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	useEffect(() => {
		localStorage.setItem('deleted-todos', JSON.stringify(deletedTodos));
	}, [deletedTodos]);

	const [filter, setFilter] = useState<DisplayFilter>('all');

	const changeFilter = useCallback((_new: DisplayFilter) => {
		setFilter(_new);
	}, []);

	const addTodo = useCallback((text: string, options: TodoOptions) => {
		setTodos(prevTodos => [
			...prevTodos,
			{ id: uuidv4(), text, completed: false, removed: false, options },
		]);
	}, []);

	const deleteTodo = useCallback((id: string) => {
		setTodos(prevTodos => {
			const target = prevTodos.find(t => t.id === id);
			if (target) {
				setDeletedTodos(prevDeleted => {
					if (prevDeleted.some(t => t.id === id)) return prevDeleted;
					return [{ ...target, removed: true }, ...prevDeleted];
				});
			}

			return prevTodos.filter(t => t.id !== id);
		});
	}, []);

	const toggleTodo = useCallback((id: string) => {
		setTodos(prevTodos =>
			prevTodos.map(todo =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo,
			),
		);
	}, []);

	const restoreTodo = useCallback((id: string) => {
		setDeletedTodos(prevDeleted => {
			const target = prevDeleted.find(t => t.id === id);
			if (target) {
				setTodos(prevTodos => {
					if (prevTodos.some(t => t.id === id)) return prevTodos;
					return [...prevTodos, { ...target, removed: false }];
				});
			}

			return prevDeleted.filter(t => t.id !== id);
		});
	}, []);

	const actions = useMemo(
		() => ({
			addTodo,
			deleteTodo,
			toggleTodo,
			restoreTodo,
			changeFilter,
		}),
		[addTodo, deleteTodo, toggleTodo, restoreTodo, changeFilter],
	);

	return {
		todos,
		deletedTodos,
		filter,
		actions,
	};
};
