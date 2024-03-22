const mongoose =require('mongoose');

const app=require('./app');
const PORT = 7000;

mongoose.connect('mongodb://localhost:27017/pharmacieDB').then(()=>{
     console.log('connecter-vous sur le server' + PORT)
     app.listen(PORT, () => {
     console.log('le server est lance sur le port' + PORT)
     });
     }).catch((error:any) => {
        console.log(error);
        throw new Error("erreur de connection sur le server") ;
        })



