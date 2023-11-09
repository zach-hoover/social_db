const { Schema, model } = require('mongoose');
const  Reaction  = require('./Reaction')

// Schema to create a course model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    reactions: [
      Reaction.schema
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.path('createdAt').get(function (timestamp) {
  return new Date(timestamp).toLocaleString(); 
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
