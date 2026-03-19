import { useCallback, useEffect, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { DisplayFilter, TodoType } from '@/types';

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

	const addTodo = useCallback((text: string) => {
		setTodos(prevTodos => [
			...prevTodos,
			{ id: uuidv4(), text, completed: false, removed: false },
		]);
	}, []);

	const deleteTodo = useCallback((id: string) => {
		setTodos(prevTodos => {
			const target = prevTodos.find(todo => todo.id === id);
			if (!target) return prevTodos;

			setDeletedTodos(prevDeletedTodos => [
				{ ...target, removed: true },
				...prevDeletedTodos,
			]);
			return prevTodos.filter(todo => todo.id !== id);
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
		setDeletedTodos(prevDeletedTodos => {
			const target = prevDeletedTodos.find(todo => todo.id === id);
			if (!target) return prevDeletedTodos;

			setTodos(prevTodos => [...prevTodos, { ...target, removed: false }]);
			return prevDeletedTodos.filter(todo => todo.id !== id);
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
