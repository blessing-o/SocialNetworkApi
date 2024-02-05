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


  async updateUser(req, res) {
    try {
      const updatedUser = await user.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
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

  async addFriend(req,res){
    try {
      const friend = await user.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { ...req.body } },
        { runValidators: true, new: true }
      );

      if (!friend){
        return res.status(404).json({message:'No friend with this id!'});
      }
      res.json(friend);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  async removeFriend(req, res) {
    try {
      const friend = await user.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId}},
        { runValidators: true, new: true }
      );

      if (!friend) {
        return res.status(404).json({ message: 'No application with this id!' });
      }

      res.json(friend);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

//figure the friend thing out
/**
 * { $pull: { friends: { ...req.body }} },
 */

