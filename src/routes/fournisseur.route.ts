import express from 'express';

import *as FournisseurCtlr from '../controllers/fournisseur.controller';


const fournisseurRouter=express.Router();

fournisseurRouter.post('/ajouterFournisseur', FournisseurCtlr.ajouterFournisseur);


export default fournisseurRouter;




