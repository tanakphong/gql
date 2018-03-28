import {
	GraphQLList
} from 'graphql'
import { employeeType } from '../../types/employee'
import EmployeeModel from '../../../models/employee'

export default {
	type: new GraphQLList(employeeType),
	resolve() {
		const employees = EmployeeModel.find().exec()
		if (!employees) {
			throw new Error('Error getting employee')
		}
		return employees
	}
}
