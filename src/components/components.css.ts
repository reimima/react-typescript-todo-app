import { style } from '@vanilla-extract/css';

export const todoCss = {
	list: style({
		width: '100%',
		listStyle: 'none',
	}),
	item: style({
		display: 'flex',
		width: '100%',
		gap: '4px',
		margin: '4px 0',
	}),
	label: style({
		flex: '1',
		display: 'flex',
		gap: '4px',
	}),
	incompleted_span: style({
		overflowWrap: 'anywhere',
		wordBreak: 'break-all',
		whiteSpace: 'pre-wrap',
	}),
	completed_span: style({
		textDecoration: 'line-through',
		overflowWrap: 'anywhere',
		wordBreak: 'break-all',
		whiteSpace: 'pre-wrap',
	}),
	options: style({
		display: 'flex',
		gap: '4px',
		alignItems: 'center',
		justifyContent: 'flex-end',
		minWidth: '100px',
	}),
};

export const modalCss = {
	overlay: style({
		position: 'fixed',
		inset: 0,
		backgroundColor: 'rgba(0, 0, 0, 0.6)',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		zIndex: 1000,
		padding: '20px',
		border: 'none',
		width: '100vw',
		height: '100vh',
		cursor: 'pointer',
		appearance: 'none',
		textAlign: 'left',
	}),
	modalCard: style({
		backgroundColor: '#fff',
		borderRadius: '12px',
		width: '100%',
		maxWidth: '450px',
		padding: '24px',
		boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
		cursor: 'default',
	}),
	formStack: style({
		display: 'flex',
		flexDirection: 'column',
		gap: '20px',
	}),
	labelContainer: style({
		display: 'flex',
		flexDirection: 'column',
		gap: '6px',
	}),
	labelTitle: style({
		fontSize: '0.875rem',
		fontWeight: 600,
		color: '#444',
		margin: 0,
	}),
	inputField: style({
		width: '100%',
		padding: '10px 12px',
		borderRadius: '6px',
		border: '1px solid #ddd',
		fontSize: '1rem',
		outline: 'none',
		':focus': {
			borderColor: '#007bff',
			boxShadow: '0 0 0 2px rgba(0, 123, 255, 0.25)',
		},
	}),
	actionRow: style({
		display: 'flex',
		justifyContent: 'flex-end',
		gap: '12px',
		marginTop: '8px',
	}),
	buttonBase: style({
		padding: '10px 20px',
		borderRadius: '6px',
		fontSize: '0.875rem',
		fontWeight: 500,
		cursor: 'pointer',
		border: 'none',
		transition: 'background-color 0.2s',
	}),
};

export const modalButtonCss = {
	saveButton: style([
		modalCss.buttonBase,
		{
			backgroundColor: '#007bff',
			color: '#fff',
			':hover': { backgroundColor: '#0056b3' },
		},
	]),
	cancelButton: style([
		modalCss.buttonBase,
		{
			backgroundColor: '#f8f9fa',
			color: '#333',
			border: '1px solid #ddd',
			':hover': { backgroundColor: '#e2e6ea' },
		},
	]),
};

export const formCss = style({
	display: 'flex',
	gap: '4px',
});
