import mongoose from'mongoose';

const medicamentSchema=new mongoose.Schema({
    nom:{
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
        default:1
    },
    

})
const medicament=mongoose.model('Medicament',medicamentSchema);
export default medicament