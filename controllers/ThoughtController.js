const {thought} = require('../models');
/**
 * This controller has the following methods: 
 * Getting all thoughts
 * Getting a single thought
 * Creating a new thought
 * Updating a thought
 * Deleting a thought
 * Adding a reaction
 * Deleting a reaction
 */

module.exports = {
    async getThought(req,res){
      try {
        const allThought = await thought.find();
        if (!allThought) {
            return res.status(404).json({ message: 'No thoughts found' });
          }
        res.json(allThought);
        
      } catch (error) {
        res.status(500).json(error);
      }

    },
    async getSingleThought(req, res) {
        try {
          const singleThought = await thought.findOne({ _id: req.params.thoughtId })
          if (!singleThought) {
            return res.status(404).json({ message: 'No thought with that ID' });
          }
    
          res.json(singleThought);
        } catch (error) {
          console.log(err);
          res.status(500).json(error);
        }
      },


    async createThought(req,res){
        try {
            const newThought = await thought.create(req.body);
            res.json(newThought);
        } catch (error) {
          console.log(error);
            res.status(500).json(error);
        }
    },

    
  async updateThought(req, res) {
    try {
      const updatedThought = await thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
      );

      if (!updatedThought) {
        return res.status(404).json({ message: 'No thought with this id!' });
      }

      res.json(updatedThought);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  async deleteThought(req, res) {
    try {
      const thoughtToDelete = await thought.findOneAndDelete({ _id: req.params.thoughtId });

      if (!thoughtToDelete) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json({ message: 'Thought deleted!' });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
}