import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const app = express();


const fournisseurRouter = require('./routes/fournisseur.route');
const commandeRouter = require('./routes/commande.route');
const clientRouter = require('./routes/client.route');
const medicamentRouter=require('./routes/medicament.route');



app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.use('/appi/fournisseur', fournisseurRouter);
app.use('/appi/commande', commandeRouter);
app.use('/appi/client', clientRouter);
app.use('/appi/medicament', medicamentRouter)

module.exports=app;