const bodyParser = require('body-parser'),
  express = require('express'),
  morgan = require('morgan'),
  mongoose = require('mongoose'),
  app = express(),
  dotenv = require('dotenv').config(),
  port = Number(process.env.PORT),
  api = require('./api/api.route');

let db = mongoose.connection,
dburl = process.env.MONGODB_URI;

mongoose.set('useCreateIndex', true)
mongoose.connect(dburl, {
useNewUrlParser: true
});

db.on('error', console.error.bind(console, 'Error de conexión: '));

db.once('open', () => {
console.log('Base de datos conectada correctamente');
});

app.use(`/`, express.static(__dirname + '/public/dist/'));

app.use(`/data/`, express.static(__dirname + '/public/'));

app.use(morgan(`dev`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(morgan('dev'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(api);

app.listen(port, sayHelloToMyLittleFriend());

function sayHelloToMyLittleFriend() {
  console.log(`Servidor levantado en el puerto ${port}`);
  console.log(`El nombre de la app es ${app.get('appName')}`);
}