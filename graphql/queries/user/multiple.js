import {
    GraphQLList
} from 'graphql';

import { userType } from '../../types/user';
import UserModel from '../../../models/user';

export default {
    types: new GraphQLList(userType),
    resolve(){
        const users = UserModel.find().exec();
        if(!users){
            throw new Error('Error while fetching users..');
        }
        return users;
    }
}