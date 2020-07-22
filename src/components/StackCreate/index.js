import React, { useState } from 'react';

import { getIcon, getColor, validTypes } from '../../services/logicFuncs';

import StackCreatePresentation from './StackCreate.presentation';

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

	const handleEvents = {
		onModalToggle: () => {
			setModalOpen(!modalOpen);
		},

		onNameChange: (_, { value }) => {
			setInputName(value);
		},

		onTypeChange: (_, { value }) => {
			setInputType(value);
		},

		onSizeChange: (_, { value }) => {
			setInputSize(Number(value));
		},

		onStackSubmit: () => {
			handleStackCreate(inputName, validTypes[inputType], inputSize);
			setModalOpen(false);
			setInputName('');
			setInputType(0);
			setInputSize(5);
		},
	};

	return (
		<StackCreatePresentation
			modalOpen={modalOpen}
			inputName={inputName}
			inputType={inputType}
			inputSize={inputSize}
			icon={icon}
			color={color}
			options={options}
			{...handleEvents}
		/>
	);
};

export default StackCreate;
