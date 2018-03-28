import {
	GraphQLNonNull,
} from 'graphql';

import { employeeType, employeeInputType } from '../../types/employee';
import EmployeeModel from '../../../models/employee';

export default {
	type: employeeType,
	args: {
		data: {
			name: 'data',
			type: new GraphQLNonNull(employeeInputType)
		}
	},
	resolve(root, params) {
		const uModel = new EmployeeModel(params.data);
		const newEmployee = uModel.save();
		if (!newEmployee) {
			throw new Error('Error adding employee');
		}
		return newEmployee
	}
}
