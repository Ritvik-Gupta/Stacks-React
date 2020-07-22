import React, { useState } from 'react';
import { Message } from 'semantic-ui-react';

import MessagesStackPresentation from './MessagesStack.presentation';

const MessageStack = ({
	collectedMessages,
	archivedMessages,
	handleMessageArchive,
}) => {
	const [messageOpen, setMessageOpen] = useState(false);
	const [archiveOpen, setArchiveOpen] = useState(false);

	const handleEvents = {
		onClose: () => {
			setMessageOpen(false);
			setArchiveOpen(false);
		},

		onMessageOpen: () => {
			setMessageOpen(true);
			setArchiveOpen(false);
		},

		onArchiveOpen: () => {
			setMessageOpen(false);
			setArchiveOpen(true);
		},

		onMessageArchive: () => {
			handleMessageArchive();
		},
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
			handleEvents={handleEvents}
		/>
	);
};

export default MessageStack;
