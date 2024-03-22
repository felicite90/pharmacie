const mongoose =require('mongoose');

const app=require('./app');
const PORT = 7000;
const url = 'mongodb://localhost:27017';


mongoose.connect(`${url}/pharmacieDB`).then(()=>{
     console.log('connected to database');
     app.listen(PORT, () => {
     console.log('le server est lance sur le port' + PORT)
     });
     }).catch((error:any) => {
        console.log(error);
        throw new Error("erreur de connection sur le server") ;
        })



