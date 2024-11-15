import mongoose from "mongoose";

const BookModel=new mongoose.Schema({
    Name:{
        type:String
    },
    Author:{
        type:String
    },
    Picture:{
        type:String
    },
    Description:{
        type:String
    }
})

const Book=mongoose.model('book',BookModel)

export default Book