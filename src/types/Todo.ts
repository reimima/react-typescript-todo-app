export type TodoType = {
	readonly id: string;
	text: string;
	completed: boolean;
	removed: boolean;
	options: TodoOptions;
};

export type TodoOptions = {
	description: string;
	deadline: string;
	priority: 'low' | 'medium' | 'high';
};
