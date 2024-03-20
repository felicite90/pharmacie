import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const app = express();

const fournisseurRouter=require('./routes/fournisseur.route');
const commandeRouter=require('./route/commande.route');
const clientRouter= require('./route/client.route');


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use('/appi/fourniseur.route',fournisseurRouter);
app.use('/appi/commande.route',commandeRouter);
app.use('appi/client.route',clientRouter);

module.exports= app;
