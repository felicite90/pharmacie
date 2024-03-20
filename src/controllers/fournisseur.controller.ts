import { Request,Response } from "express";
import Fournisseur from "../modeles/fournisseur.model";
export const ajouterFournisseur= async(req:Request , res:Response)=>{

    const data=req.body;

    
    try {
        const fournisseur = await Fournisseur.findOne({ email: data.email });
        if (fournisseur) {
        res.status(500).json({
            message: 'Le fournisseur existe déjà'
          })
        }else {
          const newFournisseur = new Fournisseur(data);
          await newFournisseur.save();
          res.status(301).json({
              message: 'Le fournisseur a été ajouté avec succès'
          });
        }
      }catch (error) {
        res.status(201).json({
         message: 'Erreur : ' + error
        });
      }
    }