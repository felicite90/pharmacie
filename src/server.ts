import mongoose from 'mongoose';

const app=require('./app');

const url = 'mongodb://localhost:27017';
const PORT = 5000;

mongoose.connect(`${url}/ecomerceDB`).then(() => {
    console.log('Vous etes connecté à la base de données! ');
    app.listen(PORT, () => {
        console.log('le serveur est lancé sur le port '+ PORT)
    })
}).catch(error => {
    console.log(error);
    throw new Error("Erreur de connexion à la base de donnée!");
    
})




