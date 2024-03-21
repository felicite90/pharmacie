const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    nom:{
        type:String,
        require:true,
    },
    prenom:{
        type:String,
        require:true,
    },
    tel:{
        type:Number,
        require:false,
    },
    adress:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:false,
    },
    password:{
        type:String,
        require:false,
    }


})
const Client = mongoose.model('Client', clientSchema);

export default Client;