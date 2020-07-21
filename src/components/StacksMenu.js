import React, { useState } from 'react';
import { Dropdown } from 'semantic-ui-react';

import { getIcon } from '../services/logicFuncs';
import { ScrollDiv } from '../services/StyledComponents';

const StacksMenu = ({ stackCollection, handleStackChange }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

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
		setCurrentIndex(value);
	};

	return (
		<ScrollDiv noScroll outset>
			<Dropdown
				value={currentIndex}
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
