import React, { useState } from 'react';
import { Message, Header, Modal, Button, Icon } from 'semantic-ui-react';

import { ScrollDiv } from '../services/StyledComponents';

const MessageStack = ({ collectedMessages }) => {
	const [messageOpen, setMessageOpen] = useState(false);
	const [archiveOpen, setArchiveOpen] = useState(false);

	const onClose = () => {
		setMessageOpen(false);
		setArchiveOpen(false);
	};

	const onMessageOpen = () => {
		setMessageOpen(true);
		setArchiveOpen(false);
	};

	const onArchiveOpen = () => {
		setMessageOpen(false);
		setArchiveOpen(true);
	};

	const messageStack = collectedMessages.map((msg, index) => {
		return (
			<Message
				key={index}
				floating
				error={msg.error === true}
				success={msg.error !== true}
				size='small'
				icon={msg.error === true ? 'question' : 'star'}
				header={msg.head}
				content={msg.body}
			/>
		);
	});

	const emptyStack = (
		<Message
			warning
			icon='inbox'
			header='No Messages Found'
			content='No new Messages are found'
		/>
	);

	const renderModal = (open, stack, header, content) => (
		<Modal open={open} centered={false}>
			<Modal.Header>{header}</Modal.Header>
			<Modal.Content scrolling>
				<Modal.Description>
					<Header floated='right' size='medium'>
						{content}
					</Header>
					{stack.length > 0 ? stack : emptyStack}
				</Modal.Description>
			</Modal.Content>
			<Modal.Actions>
				<Button labelPosition='right' icon primary>
					<Icon name='chevron right' />
					Go to the next Stack
				</Button>
				<Button onClick={onClose} negative>
					Close
				</Button>
			</Modal.Actions>
		</Modal>
	);

	return (
		<React.Fragment>
			<ScrollDiv noScroll>
				<Button onClick={onMessageOpen}>Success Messages</Button>
				<Button onClick={onArchiveOpen} floated='right'>
					Error Messages
				</Button>
			</ScrollDiv>

			{renderModal(
				messageOpen,
				messageStack,
				'Current Messages Collected',
				'Check out all the Current Messages'
			)}
			{renderModal(
				archiveOpen,
				messageStack,
				'All Messages Archived',
				'Check out all the Archived Messages'
			)}
		</React.Fragment>
	);
};

export default MessageStack;
