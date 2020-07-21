import React, { useState } from 'react';
import { Icon, Button, Form } from 'semantic-ui-react';

import { ScrollDiv } from '../services/StyledComponents';
import { getIcon, getColor, validTypes } from '../services/logicFuncs';

const StackCreate = ({ handleStackCreate }) => {
	const [inputName, setInputName] = useState('');
	const [inputType, setInputType] = useState(0);
	const [inputSize, setInputSize] = useState(5);

	const icon = getIcon(validTypes[inputType]);
	const color = getColor(validTypes[inputType]);
	const options = validTypes.map((type, index) => ({
		key: index,
		value: index,
		text: type.toUpperCase(),
	}));

	const onNameChange = (_, { value }) => {
		setInputName(value);
	};

	const onTypeChange = (_, { value }) => {
		setInputType(value);
	};

	const onSizeChange = (_, { value }) => {
		setInputSize(Number(value));
	};

	const onStackSubmit = () => {
		handleStackCreate(inputName, validTypes[inputType], inputSize);
		setInputName('');
		setInputType(0);
		setInputSize(5);
	};

	return (
		<ScrollDiv noScroll outset>
			<Form onSubmit={onStackSubmit}>
				<Form.Group widths='equal'>
					<Form.Input
						type='text'
						value={inputName}
						fluid
						label='Stack Name'
						placeholder='Enter a Stack Name ...'
						icon={<Icon name={icon} color={color} inverted circular link />}
						onChange={onNameChange}
					/>
					<Form.Input
						type='number'
						value={inputSize}
						fluid
						label='Stack Size'
						placeholder='Enter the Size of Stack ...'
						onChange={onSizeChange}
					/>
				</Form.Group>
				<Form.Group widths='equal'>
					<Form.Select value={inputType} options={options} onChange={onTypeChange} />
					<Button type='submit' positive icon labelPosition='right'>
						Create
						<Icon name='right arrow' />
					</Button>
				</Form.Group>
			</Form>
		</ScrollDiv>
	);
};

export default StackCreate;
