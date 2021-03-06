import React from 'react';
import { Dropdown, Header, Icon } from 'semantic-ui-react';

import { getIcon } from '../services/stackServices';
import { ScrollDiv } from '../services/StyledComponents';

const StacksMenu = ({ stackCollection, handleStackChange, stackPos }) => {
	const dropdownOptions = stackCollection.map((stack, index) => {
		const icon = getIcon(stack.type);

		return {
			key: index,
			value: index,
			text: `${stack.name} < ${stack.type} >`,
			icon: icon,
		};
	});

	const onStackChange = (_, { value }) => {
		handleStackChange(value);
	};

	return (
		<ScrollDiv noScroll outset>
			<Header size='small'>
				<Icon name='outdent' />
				<Header.Content>
					Choose a Stack
					<Header.Subheader>Choose one out of the following Stacks</Header.Subheader>
				</Header.Content>
			</Header>
			<Dropdown
				value={stackPos}
				placeholder='Select a Stack'
				fluid
				selection
				options={dropdownOptions}
				onChange={onStackChange}
			/>
		</ScrollDiv>
	);
};

export default StacksMenu;
