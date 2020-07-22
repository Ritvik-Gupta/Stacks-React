import React, { useState } from 'react';
import { Form, Icon, Header } from 'semantic-ui-react';

import { StyledButton, ScrollDiv } from '../services/StyledComponents';

const StackOptions = ({ currentStack, handleStackPush, handleStackPop }) => {
	const [pushInput, setPushInput] = useState('');

	const onInputChange = (_, { value }) => {
		setPushInput(value);
	};

	const onStackPush = () => {
		handleStackPush(pushInput);
		setPushInput('');
	};

	const onStackPop = () => {
		handleStackPop();
		setPushInput('');
	};

	let inputDesign;
	if (currentStack.type === 'boolean')
		inputDesign = (
			<Form.Select
				fluid
				value={pushInput}
				placeholder='Choosea Boolean Value'
				options={[
					{ key: 0, text: 'TRUE', value: 'true' },
					{ key: 1, text: 'FALSE', value: 'false' },
				]}
				onChange={onInputChange}
			/>
		);
	else {
		inputDesign = (
			<Form.Input
				fluid
				value={pushInput}
				type='text'
				placeholder='Enter an element ...'
				onChange={onInputChange}
			/>
		);
	}

	return (
		<ScrollDiv noScroll outset>
			<Header size='small'>
				<Icon name='cog' loading />
				<Header.Content>
					Stack Operations
					<Header.Subheader>
						Apply Push or Pop Operations on the Current Stack
					</Header.Subheader>
				</Header.Content>
			</Header>
			<Form>
				<Form.Group widths='equal'>{inputDesign}</Form.Group>
				<Form.Group widths='equal'>
					<StyledButton
						fluid
						icon
						labelPosition='right'
						type='button'
						onClick={onStackPop}
					>
						<Icon name='angle double down' />
						Pop
					</StyledButton>
					<StyledButton
						fluid
						icon
						labelPosition='right'
						type='button'
						onClick={onStackPush}
					>
						<Icon name='angle double up' />
						Push
					</StyledButton>
				</Form.Group>
			</Form>
		</ScrollDiv>
	);
};

export default StackOptions;
