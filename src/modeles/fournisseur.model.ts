const mongoose =require('mongoose');

const fournisseurSchema = new mongoose.Schema({
    nom:{
        type:String,
        require:true
    },
    prenom:{
        type:String,
        require:true,

    },
    tel:{
        type:Number,
        require:false
    },
    adress:{
        type:String,
        require:false,
    },
     email:{
        type:String,
        require:false
     },
     password:{
        type:Number,
        require:false,
     }

});
const Fournisseur = mongoose.model('Fournisseur', fournisseurSchema);

export default Fournisseur;