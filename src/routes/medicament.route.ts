import express from "express";

import *as MedicamentCtrl from '../controllers/medicament.controller';

const medicamentRouter = express.Router();

medicamentRouter.post('/ajoutermedicament',MedicamentCtrl.ajouterMedicament);



module.exports = medicamentRouter;