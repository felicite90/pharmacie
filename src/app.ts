import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const app = express();

const fournisseurRouter = require('./routes/fournisseur.route');
const commandeRouter = require('./routes/commande.route');
const clientRouter = require('./routes/client.route');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/appi/fournisseur', fournisseurRouter);
app.use('/appi/commande', commandeRouter);
app.use('/appi/client', clientRouter);

module.exports=app;