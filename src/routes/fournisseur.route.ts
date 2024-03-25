import express from 'express';
import *as FournisseurCtlr from '../controllers/fournisseur.controller';


const fournisseurRouter=express.Router();

fournisseurRouter.post('/ajouterFournisseur', FournisseurCtlr.ajouterFournisseur);
fournisseurRouter.get('/', FournisseurCtlr.ajouterFournisseur);
fournisseurRouter.get('/afficherFournisseur',FournisseurCtlr.ajouterFournisseur);



module.exports=fournisseurRouter;




