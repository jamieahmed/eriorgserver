const { Schema }, mongoose = require('mongoose');

const userSchema = new Schema ({
  firstName: { type: String },
  lastName: { type: String },
  username: { type: String },
  passwordHash: { type: String },
  email: { type: String },
  admin: { type: Boolean, default: false }
})

const User = mongoose.model('User', userSchema);

module.exports = User;