import styled from 'styled-components';

export const Grid = styled('div')`
	width: 100%;
	height: 100%;
	padding: 0.2%;
	display: grid;
	grid-template-rows: repeat(9, 1fr) 0.5fr;
	grid-template-columns: repeat(10, 1fr);
	grid-template-areas:
		'a a a a a a c c c c'
		'd d d d d d c c c c'
		'd d d d d d c c c c'
		'd d d d d d c c c c'
		'e e e e e e c c c c'
		'e e e e e e c c c c'
		'e e e e e e c c c c'
		'e e e e e e b b b b'
		'e e e e e e b b b b'
		'e e e e e e b b b b';
`;
export const GridItem = styled('div')`
	grid-area: ${({ area }) => area};
`;
