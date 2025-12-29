import mongoose from 'mongoose';

const ArticleSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true,
    },
    sourceUrl:{
        type:String,
        required:true
    },
    //helps distingush original and AI-updated articles
    isUpdated:{
        type:Boolean,
        default:false
    },
    references:[
        {
            title:String,
            url:String
        }
    ],
   
},
 { timestamps:true }
);

export default mongoose.model('Article',ArticleSchema);