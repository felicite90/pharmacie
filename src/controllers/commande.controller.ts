import { Request, Response} from "express";
import Commande from "../modeles/commande.model";


export const createCommande = async(req:Request, res:Response)=>{
    const data =req.body;
    const userData = (req as any).userData;
    try{
        // data.client=userData.userId; 
        const newCommande = new Commande(data);
        await newCommande.save();
        res.status(201).json({
            message:'votre commande a ete enregistrer avec succee!'
        });
    }catch(error){
        res.status(500).json({
            message: 'error:'+error
        })
    }
    
}
