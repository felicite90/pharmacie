const mongoose=require('mongoose');
const express=require('express');


const app=express();

const PORT = 5000;

const URL_MONGO='mongodb://localhost:27017'


mongoose.connect(`${URL_MONGO}/pharmacie/test1`).then(()=>{
console.log('connecter-vous a la base se donnee ' +PORT)
app.listen(PORT,()=>{
    console.log('le server est lance sur le port' +PORT)
    })
}).catch(error => {
    console.log(error);
    throw new Error("Erreur de connexion à la base de donnée!");
    
})




