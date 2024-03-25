import express from "express";
import *as ClientCtlr from "../controllers/client.controller";



 const clientRouter=express.Router();


 

 clientRouter.post('/ajouterclient',ClientCtlr.createClient);
 clientRouter.get('/', ClientCtlr.getClient);
 clientRouter.get('/:email', ClientCtlr.getClientEmail);
 clientRouter.put('/UpdateClient', ClientCtlr.UpdateClient);



 module.exports=clientRouter;
