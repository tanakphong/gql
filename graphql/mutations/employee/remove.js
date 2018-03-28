import {
	GraphQLNonNull,
	GraphQLID
} from 'graphql'

import { employeeType } from '../../types/employee'
import EmployeeModel from '../../../models/employee'

export default {
	type: employeeType,
	args: {
		id: {
			name: 'id',
			type: new GraphQLNonNull(GraphQLID)
		}
	},
	resolve(root, params) {
		const removedemployee = EmployeeModel.findByIdAndRemove(params.id).exec();
		if (!removedemployee) {
			throw new Error('Error removing employee')
		}
		return removedemployee;
	}
}
