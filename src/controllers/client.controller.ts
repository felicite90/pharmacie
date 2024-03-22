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
