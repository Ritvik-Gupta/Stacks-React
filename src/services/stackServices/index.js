export * from './stackConsts';
export * from './stackValidation';

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
