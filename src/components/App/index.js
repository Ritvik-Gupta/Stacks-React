import React, { useState, useEffect } from 'react';

import Stack from '../../services/Stack';
import { isValidStackConfig, isValidPush } from '../../services/logicFuncs';

import { Grid, GridItem } from './styles';
import StackList from '../StacksMenu';
import VisualStack from '../VisualStack';
import StackCreate from '../StackCreate';
import StackOptions from '../StackOptions';
import MessageStack from '../MessageStack';

const App = () => {
	const [collectedMessages, setCollectedMessages] = useState([]);
	const [stackPos, setStackPos] = useState(0);
	const [stackCollection, setStackCollection] = useState([
		{
			name: 'Default',
			type: 'number',
			stack: new Stack(),
		},
		{
			name: 'Default',
			type: 'string',
			stack: new Stack(),
		},
		{
			name: 'Default',
			type: 'boolean',
			stack: new Stack(),
		},
	]);

	useEffect(() => {
		console.groupCollapsed('Current Stack Config ...');
		console.log('Current Position :\t', stackPos);
		console.log(stackCollection[stackPos]);
		console.groupEnd();
	}, [stackCollection, stackPos]);

	const handleStackChange = index => {
		setStackPos(index);
	};

	const handleStackCreate = (name, type, size) => {
		const messages = isValidStackConfig(name, type, size);
		if (messages.some(msg => msg.error === true)) {
			setCollectedMessages([...collectedMessages, ...messages]);
		} else {
			setStackCollection([
				...stackCollection,
				{
					name,
					type,
					stack: new Stack(new Array(size).fill(null)),
				},
			]);
		}
	};

	const handleStackPush = value => {
		const messages = isValidPush(value, stackCollection[stackPos].type);
		if (messages.some(msg => msg.error === true)) {
			setCollectedMessages([...collectedMessages, ...messages]);
		} else {
			const newStack = new Stack(
				stackCollection[stackPos].stack.copy,
				stackCollection[stackPos].stack.top
			);
			if (newStack.push(value) === false) {
				setCollectedMessages([...collectedMessages, 'Stack is Full']);
			} else {
				setStackCollection(
					stackCollection.map((el, index) => {
						if (index !== stackPos) return el;
						return { ...el, stack: newStack };
					})
				);
			}
		}
	};

	const handleStackPop = () => {
		const newStack = new Stack(
			stackCollection[stackPos].stack.copy,
			stackCollection[stackPos].stack.top
		);
		const popEl = newStack.pop();
		if (popEl === null) {
			setCollectedMessages([...collectedMessages, 'Stack is Empty']);
		} else {
			setStackCollection(
				stackCollection.map((el, index) => {
					if (index !== stackPos) return el;
					return { ...el, stack: newStack };
				})
			);
		}
	};

	return (
		<Grid>
			<GridItem area='a'>
				<StackList
					stackCollection={stackCollection}
					handleStackChange={handleStackChange}
				/>
			</GridItem>
			<GridItem area='b'>
				<StackOptions
					currentStack={stackCollection[stackPos]}
					handleStackPush={handleStackPush}
					handleStackPop={handleStackPop}
				/>
			</GridItem>
			<GridItem area='c'>
				<VisualStack currentStack={stackCollection[stackPos]} />
			</GridItem>
			<GridItem area='d'>
				<StackCreate handleStackCreate={handleStackCreate} />
			</GridItem>
			<GridItem area='e'>
				<MessageStack collectedMessages={collectedMessages} />
			</GridItem>
		</Grid>
	);
};

export default App;
