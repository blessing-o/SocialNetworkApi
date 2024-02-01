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
    async getSingleUser(req, res) {
        try {
          const singleUser = await user.findOne({ _id: req.params.userId })
          if (!singleUser) {
            return res.status(404).json({ message: 'No user with that ID' });
          }
    
          res.json(singleUser);
        } catch (error) {
          console.log(err);
          res.status(500).json(error);
        }
      },


    async createUser(req,res){
        try {
            const newUser = await user.create(req.body);
            res.json(newUser);
        } catch (error) {
          console.log(error);
            res.status(500).json(error);
        }
    },

    // Update a user
  async updateUser(req, res) {
    try {
      const updatedUser = await user.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
      );

      if (!updatedUser) {
        return res.status(404).json({ message: 'No user with this id!' });
      }

      res.json(updatedUser);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  async deleteUser(req, res) {
    try {
      const userToDelete = await user.findOneAndDelete({ _id: req.params.userId });

      if (!userToDelete) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json({ message: 'User deleted!' });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
}
