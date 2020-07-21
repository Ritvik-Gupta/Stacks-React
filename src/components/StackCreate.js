import React, { useState } from 'react';
import { Icon, Button, Form, Modal } from 'semantic-ui-react';

import { ScrollDiv } from '../services/StyledComponents';
import { getIcon, getColor, validTypes } from '../services/logicFuncs';

const StackCreate = ({ handleStackCreate }) => {
	const [modalOpen, setModalOpen] = useState(false);
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

	const onModalToggle = () => {
		setModalOpen(!modalOpen);
	};

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
		setModalOpen(false);
		setInputName('');
		setInputType(0);
		setInputSize(5);
	};

	return (
		<React.Fragment>
			<ScrollDiv noScroll outset>
				<Button
					icon
					fluid
					labelPosition='right'
					onClick={onModalToggle}
					animated='fade'
				>
					<Icon name='upload' />
					<Button.Content visible>Create an Empty Stack</Button.Content>
					<Button.Content hidden>
						Click Here to Create a New Empty Stack
					</Button.Content>
				</Button>
			</ScrollDiv>
			<Modal dimmer='blurring' open={modalOpen} centered={false}>
				<Modal.Header>Stack Creation Form</Modal.Header>
				<Modal.Content>
					<Form onSubmit={onStackSubmit}>
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
						<Form.Select
							value={inputType}
							options={options}
							onChange={onTypeChange}
						/>
						<Button.Group fluid>
							<Button type='button' negative onClick={onModalToggle}>
								Close
							</Button>
							<Button.Or />
							<Button type='submit' positive>
								Create
							</Button>
						</Button.Group>
					</Form>
				</Modal.Content>
			</Modal>
		</React.Fragment>
	);
};

export default StackCreate;
