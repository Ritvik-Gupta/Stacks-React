import React from 'react';
import { Header, Modal, Button, Icon } from 'semantic-ui-react';

import { StyledButton, ScrollDiv } from '../../services/StyledComponents';

const MessagesStackPresentation = ({
	messageStack,
	archiveStack,
	emptyStack,
	messageOpen,
	archiveOpen,
	onClose,
	onMessageOpen,
	onArchiveOpen,
	onMessageArchive,
}) => (
	<React.Fragment>
		<ScrollDiv noScroll outset>
			<Header size='small'>
				<Icon name='settings' />
				<Header.Content>
					Messages
					<Header.Subheader>Checkout Messages collected</Header.Subheader>
				</Header.Content>
			</Header>
			<StyledButton
				floated='left'
				icon='fork'
				content='Current Messages'
				label={{
					basic: false,
					color: 'grey',
					pointing: 'left',
					content: messageStack.length,
				}}
				onClick={onMessageOpen}
			/>
			<StyledButton
				floated='right'
				icon='inbox'
				content='Messages Archived'
				label={{
					basic: false,
					color: 'grey',
					pointing: 'left',
					content: archiveStack.length,
				}}
				onClick={onArchiveOpen}
			/>
		</ScrollDiv>

		<Modal dimmer='blurring' open={messageOpen} centered={false}>
			<Modal.Header>Current Messages Collected</Modal.Header>
			<Modal.Content scrolling>
				<Modal.Description>
					<Header floated='right' size='small'>
						Check out all the Current Messages
					</Header>
					{messageStack.length > 0 ? messageStack : emptyStack}
				</Modal.Description>
			</Modal.Content>
			<Modal.Actions>
				<Button icon primary labelPosition='right' onClick={onMessageArchive}>
					<Icon name='chevron right' />
					Archive all the messages
				</Button>
				<Button negative onClick={onClose}>
					Close
				</Button>
			</Modal.Actions>
		</Modal>
		<Modal dimmer='blurring' open={archiveOpen} centered={false}>
			<Modal.Header>Current Messages Archived</Modal.Header>
			<Modal.Content scrolling>
				<Modal.Description>
					<Header floated='right' size='small'>
						Check out all the Archived Messages
					</Header>
					{archiveStack.length > 0 ? archiveStack : emptyStack}
				</Modal.Description>
			</Modal.Content>
			<Modal.Actions>
				<Button negative onClick={onClose}>
					Close
				</Button>
			</Modal.Actions>
		</Modal>
	</React.Fragment>
);

export default MessagesStackPresentation;
