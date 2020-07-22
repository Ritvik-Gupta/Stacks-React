import styled from 'styled-components';

export const Grid = styled('div')`
	width: 100%;
	height: 100%;
	padding: 0.2%;
	display: grid;
	grid-template-rows: repeat(10, 1fr);
	grid-template-columns: repeat(10, 1fr);
	grid-gap: 1.5%;
	grid-template-areas:
		'a a a a a a c c c c'
		'a a a a a a c c c c'
		'x x x x x x c c c c'
		'b b b b b b c c c c'
		'b b b b b b c c c c'
		'b b b b b b c c c c'
		'y y y y y y c c c c'
		'e e e e e e c c c c'
		'e e e e e e d d d d'
		'z z z z z z d d d d';
`;
export const GridItem = styled('div')`
	grid-area: ${({ area }) => area};
`;
