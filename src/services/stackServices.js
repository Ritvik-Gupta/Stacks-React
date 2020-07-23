import Stack from './Stack';

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

const validityChecks = new Map([
	['number', val => /^(\d)+(.(\d)+)?$/i.test(val)],
	['boolean', val => val === 'true' || val === 'false'],
	['string', val => typeof val === 'string' && val !== ''],
]);

export const validTypes = [...validityChecks.keys()];
const invalidStackNames = ['default'];

export const getType = val => {
	for (let [type, check] of validityChecks) {
		if (check(val) === true) return type;
	}
	return null;
};

export const isValidPush = (val, type) => {
	return type === getType(val)
		? []
		: [
				{
					head: `Invalid Input of Type < ${type} >`,
					body: `Element to push should be a < ${type} >`,
					error: true,
				},
		  ];
};

export const isValidStackConfig = (name, type, size) => {
	const errors = [];
	if (name.length <= 0 || name.length > 20) {
		errors.push({
			head: 'Invalid Size for a Name',
			body: 'Enter a Valid Name that has a length <= 20',
			error: true,
		});
	}
	if (invalidStackNames.includes(name.toLowerCase())) {
		errors.push({
			head: 'Invalid Name for a Stack',
			body: `Entered Name "${name}" is Invalid`,
			error: true,
		});
	}
	if (getType(name) !== 'string') {
		errors.push({
			head: `Invalid Name entered as a < ${getType(name)} >`,
			body: 'Enter a Valid Name of Type < string >',
			error: true,
		});
	}
	if (!validTypes.includes(type)) {
		errors.push({
			head: 'Invlid Type for a Stack',
			body: `A Stack can only have a Types [${validTypes.toString()}]`,
			error: true,
		});
	}
	if (size <= 0 || size > 100) {
		errors.push({
			head: 'Invlid Size for a Stack',
			body: 'Enter a Valid Size that has a length <= 100',
			error: true,
		});
	}
	if (Math.floor(size) !== Math.ceil(size)) {
		errors.push({
			head: 'Invalid Size of a Floating Number',
			body: 'Enter a Valid Size which is of Type < integer >',
			error: true,
		});
	}

	return errors;
};

export const getIcon = type => {
	switch (type) {
		case 'number':
			return 'sort numeric up';
		case 'string':
			return 'sort alphabet up';
		case 'boolean':
			return 'sort';
		default:
			return 'delete';
	}
};

export const getColor = type => {
	switch (type) {
		case 'number':
			return 'orange';
		case 'string':
			return 'green';
		case 'boolean':
			return 'blue';
		default:
			return 'red';
	}
};
