import express from "express";
import *as ClientCtlr from "../controllers/client.controller";

 const clientRouter=express.Router();

 clientRouter.post('/ajouterclient',ClientCtlr.createClient);

 module.exports=clientRouter;
