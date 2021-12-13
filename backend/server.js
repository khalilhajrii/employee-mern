// importation des biblio
const express = require('express'),
path = require('path'),
bodyParser = require('body-parser'),
cors = require('cors'),
mongoose = require('mongoose');

// MongoDB url
var mongoDatabase = 'mongodb://localhost:27017/employeeDetails';

// Creation d'un serveur express
const app = express();
mongoose.Promise = global.Promise;

// Connection Mongodb 
mongoose.connect(mongoDatabase, { useNewUrlParser: true }).then(
() => { console.log('Connecté') },
err => { console.log('pas connecté ' + err) }
);

// Importation des routes
const employeeRoutes = require('../backend/Routes/EmployeeRoute');

// Convertion sous format JSON
app.use(bodyParser.json());

// Activation CORS pour comprendre les requettes
app.use(cors());

// Port number
const port = process.env.PORT || 4000;

// Configuration des routes
app.use('/employees', employeeRoutes);

// Lancement d'un serveur express
const server = app.listen(port, function () {
console.log('Server Lisening On Port : ' + port);
});