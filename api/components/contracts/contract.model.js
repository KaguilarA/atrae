const mongoose = require(`mongoose`),
  bcrypt = require(`bcrypt`),
  states = [0, 1, 2],
  SALT_WORK_FACTOR = 10;

var contractSchema = new mongoose.Schema({
  _state: {type: Number, em: states, required: true},
  _managerId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  _studentId: [mongoose.Schema.Types.ObjectId],
});