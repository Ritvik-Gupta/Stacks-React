import styled from 'styled-components';

export const insetShadow = `inset 13px 13px 35px #43c593, inset -13px -13px 35px #63ffd9;`;
export const outsetShadow = `13px 13px 35px #43c593, -13px -13px 35px #63ffd9`;

export const ScrollDiv = styled('div')`
	width: 100%;
	height: 100%;
	padding: ${props => (props.padding ? props.padding * 100 : 4)}%;
	overflow-y: ${props => (props.noScroll ? 'visible' : 'scroll')};
	border-radius: 0px;
	background: linear-gradient(145deg, #59ffc3, #4bdba4);
	box-shadow: ${props => (props.outset ? outsetShadow : insetShadow)};
`;

export const StickyDiv = styled('div')`
	position: sticky;
	z-index: 1;
	top: 0;
`;
