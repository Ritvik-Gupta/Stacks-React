import Stack from '../Stack';

export const initialStateStacks = [
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
];

export const validityChecks = new Map([
	['number', val => /^(\d)+(.(\d)+)?$/i.test(val)],
	['boolean', val => val === 'true' || val === 'false'],
	['string', val => typeof val === 'string' && val !== ''],
]);

export const validTypes = [...validityChecks.keys()];
export const invalidStackNames = ['default'];
