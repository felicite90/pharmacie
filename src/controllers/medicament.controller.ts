import { Request,Response} from "express";
 import Medicament from "../modeles/medicament.model";

 export const ajouterMedicament = async(req:Request, res:Response)=>{
    const data=req.body;
    const userData=(req as any).userData;
    const isDescription=req.query.isDescription
    try{
        userData.founisseur=userData.userId;
        const newMedicament = new Medicament(data);
        await newMedicament.save();
        res.status(200).json({
            message:'les medicament on ete enregistre!',
            userData,
            newMedicament
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error: '+error
        })
    }
}