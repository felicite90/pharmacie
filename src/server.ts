const mongoose=require('mongoose');
const express=require('express');


const app=express();


const PORT = 7000;
const URL_MONGO="mongodb://localhost:27017";


mongoose.connect(`${URL_MONGO}/pharmacieDB`).then(()=>{
console.log('connecter-vous a la base se donnee ' +PORT)
app.listen(PORT,()=>{
    console.log('le server est lance sur le port'+PORT)
    })
}).catch(error => {
    console.log(error);
    throw new Error("Erreur de connexion à la base de donnée!");
    
})




