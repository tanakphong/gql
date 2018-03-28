import {
	GraphQLObjectType,
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLID
} from 'graphql';

export const employeeType = new GraphQLObjectType({
	name: 'Employee',
	fields: () => ({
		_id: {
			type: new GraphQLNonNull(GraphQLID)
		},
		email: {
			type: GraphQLString
		},
        fname: {
            type: GraphQLString
        },
        lname: {
            type: GraphQLString
        }
	})
})


export const employeeInputType = new GraphQLInputObjectType({
	name: 'EmployeeInput',
	fields: () => ({
		email: {
			type: GraphQLString
		},
		fname: {
			type: GraphQLString
		},
		lname: {
			type: GraphQLString
		}
	})
})
