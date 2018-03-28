import {
    GraphQLID,
    GraphQLNonNull
  } from 'graphql';
  import { employeeType } from '../../types/employee';
  import EmployeeModel from '../../../models/employee';
  
  export default {
      type: employeeType,
      args: {
          id: {
              name: 'ID',
              type: new GraphQLNonNull(GraphQLID)
          }
      },
      resolve(root, params) {
          return EmployeeModel.findById(params.id).exec();
      }
  }
  