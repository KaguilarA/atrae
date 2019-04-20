const contractSchema = require(`./contract.model`);

module.exports.registerContract = (req, res, next) => {
  var newContract = Object.assign(new contractSchema(), req.body);
  newContract.save((err) => {
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

module.exports.listAllContracts = (req, res) => {
  contractSchema.find().populate('_managerId').populate('_studentId').then((contractsList) => {
    res.send(contractsList);
  });
};