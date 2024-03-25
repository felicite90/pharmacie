import { Request,Response } from "express";
import Client from "../modeles/client.model";



export const createClient = async (req: Request, res: Response) => {
    const data = req.body;

    try {
        const client = await Client.findOne({email: data.email});

        if (client) {
            res.status(303).json({
                message: 'Le compte existe déjà!'
            })
        } else {
            const newClient = new Client(data);
            await newClient.save();
            res.status(202).json({
                message: 'Votre client a été crée avec succés!',
                newClient
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error: '+ error
        })
    }
}

export async function getClient(req: Request, res: Response) {
    const data = req.body;
    try {
        const client = await Client.find();
        res.status(201).json({
            message: 'La liste des clients !',
            client
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error: ' + error
        });
    }
}

export async function getClientEmail(req:Request, res: Response) {
    const email = req.params.email;
    try {
        const Unclient = await Client.findOne({email:email});
        res.status(201).json({
            message: 'Voici le client !',
            Unclient
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error: ' + error
        });
    }
}


export async function UpdateClient(req: Request, res:Response) {
    const data = req.body;
    const email= req.params.email;
    try {
        const client = await Client.findOneAndUpdate({email:data.email, data})
       
        res.status(201).json({
            message: 'Modification effectuée avec succès !',
            client
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error: ' + error
        });
    }
}