import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

export const background = `#c1b8c1`;
export const backgroundHover = `#c6bec7`;

export const outsetShadow = `13px 13px 35px #9c959c, -13px -13px 35px #e6dbe6`;
export const insetShadow = `inset 13px 13px 35px #9c959c, inset -13px -13px 35px #e6dbe6`;

export const outsetShadowIntense = `5px 5px 21px #615c61, -5px -5px 21px #ffffff`;
export const insetShadowIntense = `inset 5px 5px 21px #615c61, inset -5px -5px 21px #ffffff`;

export const ScrollDiv = styled('div')`
	width: 100%;
	height: 100%;

	background: ${background};
	box-shadow: ${props => (props.outset ? outsetShadow : insetShadow)};

	overflow-y: ${props => (props.noScroll ? 'visible' : 'scroll')};
	padding: ${props => (props.padding ? props.padding * 100 : 3)}%;
`;

export const StyledButton = styled(Button)`
	color: black !important;
	background: ${background} !important;
	box-shadow: ${outsetShadowIntense} !important;

	&:hover {
		background: ${backgroundHover} !important;
	}

	&:active {
		box-shadow: ${insetShadowIntense} !important;
	}
`;
