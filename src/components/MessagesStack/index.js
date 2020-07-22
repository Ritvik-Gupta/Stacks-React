import React, { useState } from 'react';
import { Message } from 'semantic-ui-react';

import MessagesStackPresentation from './MessagesStack.present';

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
	};

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
		<MessagesStackPresentation
			messageStack={messageStack}
			archiveStack={archiveStack}
			emptyStack={emptyStack}
			messageOpen={messageOpen}
			archiveOpen={archiveOpen}
			onClose={onClose}
			onMessageOpen={onMessageOpen}
			onArchiveOpen={onArchiveOpen}
			onMessageArchive={onMessageArchive}
		/>
	);
};

export default MessageStack;
