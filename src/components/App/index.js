import React from 'react';
import immer from 'immer';

import Stack from '../../services/Stack';
import {
	isValidStackConfig,
	isValidPush,
	initialStateStacks,
} from '../../services/stackServices';

import { Grid, GridItem } from './styles';
import StackMenu from '../StacksMenu';
import VisualStack from '../VisualStack';
import StackCreate from '../StackCreate';
import StackOptions from '../StackOptions';
import MessageStack from '../MessagesStack';

let renderCount = 0;
class App extends React.Component {
	state = {
		stackPos: 0,
		priorityMessage: [],
		collectedMessages: [],
		archivedMessages: [],
		stackCollection: initialStateStacks,
	};

	componentDidUpdate() {
		console.clear();
		console.group('Render Number :\t', ++renderCount);

		console.groupCollapsed('Current Stack Config ...');
		console.log('Current Position :');
		console.log(this.state.stackPos);
		console.log('Current Stack :');
		console.log(this.state.stackCollection[this.state.stackPos]);
		console.groupEnd();

		console.groupCollapsed('Current Messages ...');
		console.log('Collected Messages :');
		console.log(this.state.collectedMessages);
		console.log('Archived Messages :');
		console.log(this.state.archivedMessages);
		console.log('Priority Message :');
		console.log(this.state.priorityMessage);
		console.groupEnd();

		console.groupEnd();
	}

	handleStackChange = index => {
		this.setState(
			immer(draft => {
				draft.stackPos = index;
			})
		);
	};

	handleStackCreate = (name, type, size) => {
		const messages = isValidStackConfig(name, type, size);
		if (messages.length > 0) {
			this.setState(
				immer(draft => {
					draft.collectedMessages.push(...messages);
				})
			);
		} else {
			this.setState(
				immer(draft => {
					draft.stackCollection.push({
						name,
						type,
						stack: new Stack(size),
					});
					draft.collectedMessages.push({
						head: 'Stack Created Successfully',
						body: `Created Stack ${name.toUpperCase()} of Type < ${type} >`,
						error: false,
					});
				})
			);
		}
	};

	handleStackPush = value => {
		const messages = isValidPush(
			value,
			this.state.stackCollection[this.state.stackPos].type
		);
		if (messages.some(msg => msg.error === true)) {
			this.setState(
				immer(draft => {
					draft.collectedMessages.push(...messages);
				})
			);
		} else {
			const newStack = Stack.create(
				this.state.stackCollection[this.state.stackPos].stack
			);
			if (newStack.push(value) === false) {
				this.setState(
					immer(draft => {
						draft.collectedMessages.push({
							head: 'Stack is Full',
							body: 'Cannot Push any more elements.',
							error: true,
						});
					})
				);
			} else {
				this.setState(
					immer(draft => {
						draft.stackCollection[draft.stackPos].stack = newStack;
						draft.collectedMessages.push({
							head: 'Element Pushed Successfully',
							body: `Pushed element : ${value}`,
							error: false,
						});
					})
				);
			}
		}
	};

	handleStackPop = () => {
		const newStack = Stack.create(
			this.state.stackCollection[this.state.stackPos].stack
		);
		const value = newStack.pop();
		if (value === null) {
			this.setState(
				immer(draft => {
					draft.collectedMessages.push({
						head: 'Stack is Empty',
						body: 'Cannot Pop any more elements.',
						error: true,
					});
				})
			);
		} else {
			this.setState(
				immer(draft => {
					draft.stackCollection[draft.stackPos].stack = newStack;
					draft.collectedMessages.push({
						head: 'Element Popped Successfully',
						body: `Popped element : ${value}`,
						error: false,
					});
				})
			);
		}
	};

	handleMessageArchive = () => {
		this.setState(
			immer(draft => {
				draft.archivedMessages.push(...draft.collectedMessages);
				draft.collectedMessages = [];
			})
		);
	};

	render() {
		return (
			<Grid>
				<GridItem area='a'>
					<StackMenu
						stackPos={this.state.stackPos}
						stackCollection={this.state.stackCollection}
						handleStackChange={this.handleStackChange}
					/>
				</GridItem>
				<GridItem area='b'>
					<StackOptions
						currentStack={this.state.stackCollection[this.state.stackPos]}
						handleStackPush={this.handleStackPush}
						handleStackPop={this.handleStackPop}
					/>
				</GridItem>
				<GridItem area='c'>
					<VisualStack
						currentStack={this.state.stackCollection[this.state.stackPos]}
					/>
				</GridItem>
				<GridItem area='d'>
					<StackCreate handleStackCreate={this.handleStackCreate} />
				</GridItem>
				<GridItem area='e'>
					<MessageStack
						collectedMessages={this.state.collectedMessages}
						archivedMessages={this.state.archivedMessages}
						handleMessageArchive={this.handleMessageArchive}
					/>
				</GridItem>
			</Grid>
		);
	}
}

export default App;
