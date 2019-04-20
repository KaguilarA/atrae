const userSchema = require('./user.model'),
  bcrypt = require('bcrypt');

module.exports.logIn = (req, res, next) => {
  let email = req.body.email,
    password = req.body.password;
  userSchema.findOne({
    _email: email
  }, (err, user) => {
    if (err) {
      throw err
    };
    if (user) {
      user.comparePassword(password, (err, isMatch) => {
        if (err) {
          console.log(err)
        };
        if (!isMatch) {
          console.log('Attempt failed to login with: ' + user._email);
          res.json({
            "error": "Contraseña no coincide, intente nuevamente",
            "condition": 0
          });
        } else {
          console.log('Password ' + password + ': ', isMatch);
          res.json({
            "id": user._id,
            "condition": 1
          });
        };
      });
    } else {
      res.json({
        "error": "Usuario no encontrado, intente de nuevo"
      });
    };
  })
}

module.exports.registerUser = (req, res, next) => {
  var newUser = new userSchema(req.body);
  newUser.save((err) => {
    if (err) {
      res.json({
        success: false,
        message: 'Ha ocurrido un error',
        error: err
      });
    } else {
      res.json({
        success: true,
        message: '¡Registrado correctamente!'
      });
    }
  });
};

module.exports.listUser = (req, res) => {
  userSchema.find().then((userList) => {
    userList.forEach(user => {
      user._password = ``;
    });
    res.send(userList);
  });
};

module.exports.getUserById = (req, res) => {
  let id = req.body.id;
  userSchema.findById(id, (err, user) => {
    if (user !== undefined) {
      user._password = ``;
      res.send(user);
    } else {
      res.json({
        "error": "404",
        "message": "User not found"
      })
    }
  })
};

module.exports.updateUser = (req, res) => {
  userSchema.findByIdAndUpdate(req.body._id, {
    $set: req.body
  }, (err, user) => {
    if (err) {
      res.json({
        success: false,
        msj: 'No se ha actualizado.' + handleError(err)
      });

    } else {
      res.json({
        success: true,
        msj: 'Se ha actualizado correctamente.' + res
      });
    }
  });
};
