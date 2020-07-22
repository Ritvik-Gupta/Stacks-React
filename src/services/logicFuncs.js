export const validTypes = ['number', 'string', 'boolean'];

export const isValidType = type => {
	if (validTypes.includes(type.toLowerCase())) return true;
	return false;
};

export const isValidPush = (val, type) => {
	const NumberRegExp = /^(\d)+(.(\d)+)?$/i;

	if (type === 'number')
		return NumberRegExp.test(val)
			? []
			: [
					{
						head: 'Invalid Input of Type Number',
						body: 'Element to push should be a Number',
						error: true,
					},
			  ];
	if (type === 'boolean')
		return val === 'true' || val === 'false'
			? []
			: [
					{
						head: 'Invalid Input of Type Boolean',
						body: 'Element to push should be a Boolean',
						error: true,
					},
			  ];
	if (type === 'string')
		return typeof val === 'string'
			? []
			: [
					{
						head: 'Invalid Input of Type String',
						body: 'Element to push should be a String',
						error: true,
					},
			  ];
};

export const isValidStackConfig = (name, type, size) => {
	const errors = [];
	if (name.length <= 0 || name.length >= 20 || name.toLowerCase() === 'default') {
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
	if (size <= 0 || size >= 20) {
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
