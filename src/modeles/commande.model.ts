import mongoose from 'mongoose';

const commandeSchema=new mongoose.Schema({
    nom:{
        type:String,
        require:true,
    },
quantite:{
    type:Number,
    default:1,
},
client: {
    type: mongoose.Types.ObjectId,
    ref: 'Client',
    require: true
},
createdAt:{
    type:Date,
    default:Date.now,
    

},
updatedAt:{
    type:Date,
    default:Date.now,
},


})

const Commande =mongoose.model('Commande',commandeSchema);

  export default Commande;