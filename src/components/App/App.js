import React, { useState, useEffect } from 'react';
import { useImmer } from 'use-immer';

import Stack from '../../services/Stack';
import { isValidStackConfig, isValidPush } from '../../services/logicFuncs';

import { Grid, GridItem } from './styles';
import StackMenu from '../StacksMenu';
import VisualStack from '../VisualStack';
import StackCreate from '../StackCreate';
import StackOptions from '../StackOptions';
import MessageStack from '../MessagesStack';

const App = () => {
	const [stackPos, setStackPos] = useState(0);

	const [collectedMessages, setCollectedMessages] = useImmer([]);
	const [archivedMessages, setArchivedMessages] = useImmer([]);
	const [stackCollection, setStackCollection] = useImmer([
		{
			name: 'Default',
			type: 'string',
			stack: new Stack(),
		},
		{
			name: 'Default',
			type: 'number',
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

	useEffect(() => {
		console.groupCollapsed('Current Messages ...');
		console.log(collectedMessages);
		console.log(archivedMessages);
		console.groupEnd();
	}, [collectedMessages, archivedMessages]);

	const handleStackChange = index => {
		setStackPos(index);
	};

	const handleStackCreate = (name, type, size) => {
		const messages = isValidStackConfig(name, type, size);
		if (messages.some(msg => msg.error === true)) {
			setCollectedMessages(draft => draft.concat(messages));
		} else {
			setStackCollection(draft => {
				draft.push({
					name,
					type,
					stack: new Stack(size),
				});
			});
			setCollectedMessages(draft => {
				draft.push({
					head: 'Stack Created Successfully',
					body: `Created Stack ${name.toUpperCase()} of Type < ${type} >`,
					error: false,
				});
			});
		}
	};

	const handleStackPush = value => {
		const messages = isValidPush(value, stackCollection[stackPos].type);
		if (messages.some(msg => msg.error === true)) {
			setCollectedMessages(draft => draft.concat(messages));
		} else {
			const newStack = Stack.create(stackCollection[stackPos].stack);
			if (newStack.push(value) === false) {
				setCollectedMessages(draft => {
					draft.push({
						head: 'Stack is Full',
						body: 'Cannot Push any more elements.',
						error: true,
					});
				});
			} else {
				setStackCollection(draft => {
					draft[stackPos].stack = newStack;
				});
				setCollectedMessages(draft => {
					draft.push({
						head: 'Element Pushed Successfully',
						body: `Pushed element : ${value}`,
						error: false,
					});
				});
			}
		}
	};

	const handleStackPop = () => {
		const newStack = Stack.create(stackCollection[stackPos].stack);
		const value = newStack.pop();
		if (value === null) {
			setCollectedMessages(draft => {
				draft.push({
					head: 'Stack is Empty',
					body: 'Cannot Pop any more elements.',
					error: true,
				});
			});
		} else {
			setStackCollection(draft => {
				draft[stackPos].stack = newStack;
			});
			setCollectedMessages(draft => {
				draft.push({
					head: 'Element Popped Successfully',
					body: `Popped element : ${value}`,
					error: false,
				});
			});
		}
	};

	const handleMessageArchive = () => {
		setArchivedMessages(draft => draft.concat(collectedMessages));
		setCollectedMessages(() => []);
	};

	return (
		<Grid>
			<GridItem area='a'>
				<StackMenu
					stackPos={stackPos}
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
				<MessageStack
					collectedMessages={collectedMessages}
					archivedMessages={archivedMessages}
					handleMessageArchive={handleMessageArchive}
				/>
			</GridItem>
		</Grid>
	);
};

export default App;
