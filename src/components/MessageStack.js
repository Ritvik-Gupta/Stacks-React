import React from 'react';
import { Message, Header, Icon } from 'semantic-ui-react';

import { ScrollDiv, StickyDiv } from '../services/StyledComponents';

const MessageStack = ({ collectedMessages }) => {
	const mappedStack = collectedMessages.map((msg, index) => {
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
	return (
		<ScrollDiv>
			<StickyDiv>
				<Header as='h2' color='violet'>
					<Icon name='cog' loading />
					<Header.Content>
						Messages Collected
						<Header.Subheader>
							Check out al the Error and Success Messages
						</Header.Subheader>
					</Header.Content>
				</Header>
			</StickyDiv>
			{mappedStack}
		</ScrollDiv>
	);
};

export default MessageStack;
