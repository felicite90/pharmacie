import mongoose from'mongoose';

const medicamentSchema=new mongoose.Schema({
    titre:{
        type:String,
        require:true,
    },
    id:{
        type:Number,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    prix:{
        type:Number,
        default:1
    },
    dosage:{
        type:Number,
        default:0.5,
    },
fourniseur:{
    type:mongoose.Types.ObjectId,
    ref:'Fournisseur',
    require:true

},
createdAt:{
    type:Date,
    require:true,
    default:Date.now,
},
updatedAt:{
    type:Date,
    reauire:true,
    default:Date.now,
}
    

})
const Medicament=mongoose.model('Medicament',medicamentSchema);
export default Medicament