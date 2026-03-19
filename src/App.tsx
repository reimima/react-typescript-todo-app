import { containerCss, headerCss } from './App.css';
import { Form } from './components';
import { TodoList } from './components/TodoList';
import { TodoProvider } from './providers';

export const App = () => {
	return (
		<div>
			<header className={headerCss.parent}>
				<div className={headerCss.left}></div>

				<div className={headerCss.center}>
					<div className={containerCss}>
						<h1>Todo App</h1>
					</div>
				</div>

				<div className={headerCss.right}></div>
			</header>

			<main className={containerCss}>
				<TodoProvider>
					<Form />
					<TodoList />
				</TodoProvider>
			</main>
		</div>
	);
};
