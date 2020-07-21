import styled from 'styled-components';

export const background = `#c1b8c1`;
export const backgroundGradient = `linear-gradient(145deg, #cfc5cf, #aea6ae)`;

export const outsetShadow = `13px 13px 35px #9c959c, -13px -13px 35px #e6dbe6`;
export const outsetBulgeShadow = `13px 13px 35px #9c959c, -13px -13px 35px #e6dbe6`;
export const insetShadow = `inset 13px 13px 35px #9c959c, inset -13px -13px 35px #e6dbe6`;

export const ScrollDiv = styled('div')`
	width: 100%;
	height: 100%;

	border-radius: 10px;
	background: ${background};
	box-shadow: ${props => (props.outset ? outsetShadow : insetShadow)};

	overflow-y: ${props => (props.noScroll ? 'visible' : 'scroll')};
	padding: ${props => (props.padding ? props.padding * 100 : 3)}%;
`;
