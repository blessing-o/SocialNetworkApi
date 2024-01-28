const {user} = require('../models');
/**
 * This controller has the following methods: 
 * Getting all users
 * Getting a single user
 * Creating a new user
 * Updating a user
 * Deleting a user
 * Adding a friend
 * Deleting a friend
 */

module.exports = {
    async getUsers(req,res){
      try {
        const allUsers = await user.find();
        res.json(allUsers);
        
      } catch (error) {
        res.status(500).json(error);
      }

    },


    async createUser(req,res){
        try {
            const dbUserData = await user.create(req.body);
            res.json(dbUserData);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

