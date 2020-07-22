import styled from 'styled-components';

import { background } from '../../services/StyledComponents';

export const Grid = styled('div')`
	width: 100%;
	height: 100%;
	background: ${background};
	padding: 1%;
	display: grid;
	grid-template-rows: repeat(10, 1fr);
	grid-template-columns: repeat(10, 1fr);
	grid-gap: 1.5%;
	grid-template-areas:
		'a a a a a a d d d d'
		'a a a a a a d d d d'
		'x x x x x x c c c c'
		'b b b b b b c c c c'
		'b b b b b b c c c c'
		'b b b b b b c c c c'
		'y y y y y y c c c c'
		'e e e e e e c c c c'
		'e e e e e e c c c c'
		'z z z z z z z z z z';

	@media (max-width: 800px) {
		height: 200%;
		background-size: 100% 250%;
		padding: 1%;
		display: grid;
		grid-template-rows: repeat(16, 1fr);
		grid-template-columns: repeat(1, 1fr);
		grid-gap: 1%;
		grid-template-areas:
			'a'
			'a'
			'c'
			'c'
			'c'
			'c'
			'x'
			'd'
			'd'
			'b'
			'b'
			'b'
			'y'
			'e'
			'e'
			'z';
	}
`;
export const GridItem = styled('div')`
	grid-area: ${({ area }) => area};
`;
