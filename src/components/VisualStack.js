import React from 'react';
import { Segment, Message, Header, Icon } from 'semantic-ui-react';

import { getIcon, getColor } from '../services/logicFuncs';
import { ScrollDiv } from '../services/StyledComponents';

const VisualStack = ({ currentStack }) => {
	const icon = getIcon(currentStack.type);
	const color = getColor(currentStack.type);

	const stack = currentStack.stack.copy.filter(el => el !== null).reverse();
	const mappedStack = stack.map((el, index) => {
		return (
			<Segment
				key={index}
				raised
				inverted
				secondary
				color={color}
				textAlign='center'
			>
				{el ? el : 'null'}
			</Segment>
		);
	});
	const emptyStack = (
		<Message
			floating
			error
			size='small'
			icon='crosshairs'
			header='Empty Stack'
			content={`${currentStack.name.toUpperCase()} Stack is empty .`}
		/>
	);

	return (
		<ScrollDiv>
			<Header as='h2' color={color}>
				<Icon name={icon} />
				<Header.Content>
					{currentStack.name.toUpperCase()} Stack
					<Header.Subheader>Type : {currentStack.type}</Header.Subheader>
				</Header.Content>
			</Header>
			{stack.length > 0 ? mappedStack : emptyStack}
		</ScrollDiv>
	);
};

export default VisualStack;
