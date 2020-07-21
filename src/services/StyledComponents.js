import styled from 'styled-components';

export const background = `linear-gradient(145deg, #59ffc3, #4bdba4)`;
export const insetShadow = `inset 13px 13px 35px #43c593, inset -13px -13px 35px #63ffd9;`;
export const outsetShadow = `13px 13px 35px #43c593, -13px -13px 35px #63ffd9`;
export const bulgeShadow = `13px 13px 35px #43c593, -13px -13px 35px #63ffd9`;

export const ScrollDiv = styled('div')`
	width: 100%;
	height: 100%;

	border-radius: 0px;
	background: ${background};
	box-shadow: ${props => (props.outset ? outsetShadow : insetShadow)};

	overflow-y: ${props => (props.noScroll ? 'visible' : 'scroll')};
	padding: ${props => (props.padding ? props.padding * 100 : 4)}%;
`;

export const StickyDiv = styled('div')`
	position: sticky;
	z-index: 1;
	padding: 4%;
	top: 0;

	border-radius: 0px;
	background: ${background};
`;
