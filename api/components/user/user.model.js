const mongoose = require(`mongoose`),
  bcrypt = require(`bcrypt`),
  states = [0, 1, 2, 3],
  roles = [`Owner`, `Driver`, `Assistant`, `Manager`, `Student`],
  SALT_WORK_FACTOR = 10;


var userSchema = new mongoose.Schema({
  _role: {type: String, em: roles, required: true},
  _state: {type: Number, em: states, required: true},
  _name1: {type: String, required: true},
  _name2: {type: String, default: ''},
  _surname1: {type: String, required: true},
  _surname2: {type: String, default: ''},
  _email: {type: String, default: ''},
  _phone: {type: String, default: ''},
  _birthDate: {type: Date, required: true},
  // Owner Only
  _companyName: {type: String},
  _password: {type: String},
  // Manager Only
  _contractId: {type: String},
  _studentsOnCharge: {type: Array, required: false},
  // Student Only
  _grade: {type: String},
  _group: {type: String},
  _busId: {type:String},
  _managerId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false},
  _teacherInfo: {type: Array, required: false}
});

userSchema.pre('save', function (next) {
  if (!this.isModified('_password')) {
    return next();
  };
  this._password = bcrypt.hashSync(this._password, SALT_WORK_FACTOR);
  next();
});

userSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this._password, function (err, isMatch) {
    if (err) {
      return cb(err)
    };
    cb(null, isMatch);
  });
};

module.exports = mongoose.model('User', userSchema);
