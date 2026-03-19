import { style } from '@vanilla-extract/css';

export const headerCss = {
	parent: style({
		padding: '16px',
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	}),
	left: style({
		flex: 1,
		textAlign: 'left',
	}),
	center: style({
		flex: 1,
	}),
	right: style({
		flex: 1,
		textAlign: 'right',
	}),
};

export const containerCss = style({
	maxWidth: '600px',
	width: '100%',
	margin: '0 auto',
	flexDirection: 'column',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
});
