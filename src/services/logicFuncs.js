export const validTypes = ['number', 'string', 'boolean'];

const validityChecks = {
	number: val => /^(\d)+(.(\d)+)?$/i.test(val),
	boolean: val => val === 'true' || val === 'false',
	string: val => typeof val === 'string' && val !== '',
};

export const getType = val => {
	return Object.entries(validityChecks).reduce((found, check) => {
		if (found === null && check[1](val) === true) return check[0];
		return found;
	}, null);
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
	if (name.length <= 0 || name.length > 20 || name.toLowerCase() === 'default') {
		errors.push({
			head: 'Invalid Name for a Stack',
			body: 'Enter a Valid Name that is not "Default" or ""',
			error: true,
		});
	}
	if (!validTypes.includes(type)) {
		errors.push({
			head: 'Invlid Type for a Stack',
			body: 'A Stack can only have a Type of Number, String or Boolean',
			error: true,
		});
	}
	if (size <= 0 || size > 20) {
		errors.push({
			head: 'Invlid Size for a Stack',
			body: 'Size of Stack cannot Exceed 20 and cannot be less than 0',
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