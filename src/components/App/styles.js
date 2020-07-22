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
		'a a a a a d d d d d'
		'a a a a a d d d d d'
		'1 1 1 1 1 1 c c c c'
		'b b b b b b c c c c'
		'b b b b b b c c c c'
		'b b b b b b c c c c'
		'2 2 2 2 2 2 c c c c'
		'e e e e e e c c c c'
		'e e e e e e c c c c'
		'3 3 3 3 3 3 3 3 3 3';

	@media (max-width: 800px) {
		height: 250%;
		background-size: 100% 250%;
		padding: 0%;
		grid-template-rows: repeat(14, 1fr);
		grid-template-columns: repeat(1, 1fr);
		grid-gap: 0%;
		grid-template-areas:
			'a'
			'1'
			'c'
			'c'
			'c'
			'c'
			'2'
			'd'
			'3'
			'b'
			'b'
			'4'
			'e'
			'5';
	}
`;
export const GridItem = styled('div')`
	grid-area: ${({ area }) => area};
`;
