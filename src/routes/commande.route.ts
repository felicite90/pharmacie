import express from "express";
import *as CommandeCtlr from '../controllers/commande.controller';

const commandeRouter=express.Router();

commandeRouter.post('/new-Commande',CommandeCtlr.createCommande);

module.exports = commandeRouter;

