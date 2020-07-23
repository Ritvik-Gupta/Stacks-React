import React, { useState } from 'react';

import { getIcon, getColor, validTypes } from '../../services/logicFuncs';

import StackCreatePresentation from './StackCreate.present';

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

	const onModalToggle = () => {
		setModalOpen(!modalOpen);
	};

	const onNameChange = (_, { value }) => {
		setInputName(value);
	};

	const onTypeChange = (_, { value }) => {
		setInputType(value);
	};

	const onSizeChange = (_, { value }) => {
		setInputSize(Number(value));
	};

	const onStackSubmit = () => {
		handleStackCreate(inputName, validTypes[inputType], inputSize);
		setModalOpen(false);
		setInputName('');
		setInputType(0);
		setInputSize(5);
	};

	return (
		<StackCreatePresentation
			icon={icon}
			color={color}
			options={options}
			modalOpen={modalOpen}
			inputName={inputName}
			inputType={inputType}
			inputSize={inputSize}
			onModalToggle={onModalToggle}
			onNameChange={onNameChange}
			onTypeChange={onTypeChange}
			onSizeChange={onSizeChange}
			onStackSubmit={onStackSubmit}
		/>
	);
};

export default StackCreate;
