const mongoose = require(`mongoose`),
  states = [0, 1, 2];

var contractSchema = new mongoose.Schema({
  _state: {type: Number, em: states, required: true},
  _managerId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  _studentId: [{type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}],
  _address: {type: String, required: true},
  _year:  {type: Number, required: true},
  _payment: {type: String, required: true},
  _contractId: {type: Number, required: true}
});

module.exports = mongoose.model('Contract', contractSchema);