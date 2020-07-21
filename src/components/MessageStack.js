import React, { useState } from 'react';
import { Message, Header, Modal, Button, Icon } from 'semantic-ui-react';

import { ScrollDiv } from '../services/StyledComponents';

const MessageStack = ({
	collectedMessages,
	archivedMessages,
	handleMessageArchive,
}) => {
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

	const onMessageArchive = () => {
		handleMessageArchive();
		onClose();
	};

	const renderModal = (open, stack, header, content, button = null) => (
		<Modal open={open} centered={false}>
			<Modal.Header>{header}</Modal.Header>
			<Modal.Content scrolling>
				<Modal.Description>
					<Header floated='right' size='small'>
						{content}
					</Header>
					{stack.length > 0 ? stack : emptyStack}
				</Modal.Description>
			</Modal.Content>
			<Modal.Actions>
				{button}
				<Button onClick={onClose} negative>
					Close
				</Button>
			</Modal.Actions>
		</Modal>
	);

	const renderButton = (color, icon, content, len, callback) => (
		<Button
			color={color}
			content={content}
			icon={icon}
			label={{
				color,
				pointing: 'left',
				content: len,
			}}
			onClick={callback}
		/>
	);

	const renderMessages = stack =>
		stack.map((msg, index) => (
			<Message
				key={index}
				error={msg.error === true}
				success={msg.error !== true}
				size='small'
				icon={msg.error === true ? 'question' : 'star'}
				header={msg.head}
				content={msg.body}
			/>
		));

	const messageStack = renderMessages(collectedMessages);
	const archiveStack = renderMessages(archivedMessages);
	const emptyStack = (
		<Message
			warning
			icon='inbox'
			size='small'
			header='No Messages Found'
			content='No new Messages are found'
		/>
	);

	return (
		<React.Fragment>
			<ScrollDiv noScroll>
				<Header size='small'>
					<Icon name='settings' />
					<Header.Content>
						Messages
						<Header.Subheader>Checkout Messages collected</Header.Subheader>
					</Header.Content>
				</Header>
				<Button.Group widths='2'>
					{renderButton(
						'red',
						'fork',
						'Current Messages',
						messageStack.length,
						onMessageOpen
					)}
					{renderButton(
						'green',
						'inbox',
						'Messages Archived',
						archiveStack.length,
						onArchiveOpen
					)}
				</Button.Group>
			</ScrollDiv>

			{renderModal(
				messageOpen,
				messageStack,
				'Current Messages Collected',
				'Check out all the Current Messages',
				<Button icon primary labelPosition='right' onClick={onMessageArchive}>
					<Icon name='chevron right' />
					Archive all the messages
				</Button>
			)}
			{renderModal(
				archiveOpen,
				archiveStack,
				'All Messages Archived',
				'Check out all the Archived Messages'
			)}
		</React.Fragment>
	);
};

export default MessageStack;
