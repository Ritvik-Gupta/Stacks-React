import React from 'react';
import { Icon, Button, Form, Modal, Header } from 'semantic-ui-react';

import { StyledButton, ScrollDiv } from '../../services/StyledComponents';

const StackCreatePresentation = ({
	modalOpen,
	inputName,
	inputType,
	inputSize,
	icon,
	color,
	options,
	onModalToggle,
	onNameChange,
	onTypeChange,
	onSizeChange,
	onStackSubmit,
}) => (
	<React.Fragment>
		<ScrollDiv noScroll>
			<Header size='small'>
				<Icon name='paper plane' />
				<Header.Content>
					Create a New Stack
					<Header.Subheader>Initialise an Empty Stack with a Name</Header.Subheader>
				</Header.Content>
			</Header>
			<StyledButton icon fluid labelPosition='right' onClick={onModalToggle}>
				<Icon name='upload' />
				Create an Empty Stack
			</StyledButton>
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
					<Form.Select value={inputType} options={options} onChange={onTypeChange} />
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

export default StackCreatePresentation;
