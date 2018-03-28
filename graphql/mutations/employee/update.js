import {
	GraphQLNonNull,
	GraphQLID
} from 'graphql'

import { employeeType, employeeInputType } from '../../types/employee'
import EmployeeModel from '../../../models/employee'

export default {
	type: employeeType,
	args: {
		id: {
			name: 'ID',
			type: new GraphQLNonNull(GraphQLID)
		},
		data: {
			name: 'data',
			type: new GraphQLNonNull(employeeInputType)
		}
	},
	resolve(root, params) {
		return EmployeeModel.findByIdAndUpdate(
			params.id,
			{ $set: { ...params.data } },
			{ new: true }
		)
		.catch(err => new Error('Couldn\'t Update EmployeeModel data, ', err));
	}
}
