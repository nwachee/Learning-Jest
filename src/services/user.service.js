import User from '../models/user.model.js';
import { HttpException } from '../exceptions/HttpException.js';
//Create a User
export const CreateUser = async (input) => {
        const { email } = input;
      
        const user = await User.findOne({ email });
      
        if (user) {
          throw new HttpException(400, `user with email ${email} already exists`);
        }
      
        return await User.create(input);
 };
     //Edit a user
     export const updateUser = async (id, userUpdate) => {
        return await User.findByIdAndUpdate(id, userUpdate, {new : true})
    }
    //Delete a user
    export const deleteUser = async(id) => {
        return await User.findByIdAndDelete(id)
    }
    //Get a single user
     export const fetchById = async(filter) => {
      return await User.findById(filter)
  }
    //Get All users
    export const fetchAll = async (filter) => {
        return await User.find(filter)
    }