const { Schema, model } = require("mongoose");
const reactionSchema = require('./Reaction')

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,

    },

    createdAt: {
      type: Date,
      //Do the other ones
      default: Date.now,
    },

    username:
      {
        type: String,
        required: true,
      },

    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },

    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reaction.length;
});

const thought = model('thought',thoughtSchema);

module.exports = thought;
