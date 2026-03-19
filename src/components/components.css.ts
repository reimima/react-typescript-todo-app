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
		width: '100%',
		display: 'flex',
		gap: '4px',
	}),
	incompleted_span: style({
		width: '100%',
		overflowWrap: 'anywhere',
		wordBreak: 'break-all',
		whiteSpace: 'pre-wrap',
	}),
	completed_span: style({
		width: '100%',
		textDecoration: 'line-through',
		overflowWrap: 'anywhere',
		wordBreak: 'break-all',
		whiteSpace: 'pre-wrap',
	}),
};

export const formCss = style({
	display: 'flex',
	gap: '4px',
});
