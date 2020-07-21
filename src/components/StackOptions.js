import React, { useState } from 'react';
import { Form, Icon, Button } from 'semantic-ui-react';

import { ScrollDiv } from '../services/StyledComponents';

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

	const input =
		currentStack.type === 'boolean' ? (
			<Form.Select
				fluid
				value={pushInput}
				label='Push into Current Stack'
				placeholder='Choosea Boolean Value'
				options={[
					{ key: 0, text: 'TRUE', value: 'true' },
					{ key: 1, text: 'FALSE', value: 'false' },
				]}
				onChange={onInputChange}
			/>
		) : (
			<Form.Input
				fluid
				value={pushInput}
				type={currentStack.type === 'number' ? 'number' : 'text'}
				label='Push into Current Stack'
				placeholder='Enter an element ...'
				icon={<Icon name='inbox' color='violet' inverted circular link />}
				onChange={onInputChange}
			/>
		);

	return (
		<ScrollDiv noScroll outset>
			<Form onSubmit={onStackPush}>
				{input}
				<Button.Group fluid>
					<Button type='button' onClick={onStackPop}>
						Pop
					</Button>
					<Button.Or />
					<Button type='submit' positive>
						Push
					</Button>
				</Button.Group>
			</Form>
		</ScrollDiv>
	);
};

export default StackOptions;
