import Book from "./BookModel.js";

export const createBook=async(req,res)=>{
console.log(req.body,'hdiuahwiawsdioa');

    const{Name,Author,Picture,Description}=req.body
     
  const newBook=new Book({
          Name,
          Author,
          Picture,
          Description
})

newBook.save()

res.status(201).json({newBook})

}


export const getAllData=async(req,res)=>{
    const details=await Book.find()
    res.status(201).json({details})
}


export const removeDetails=async(req,res)=>{

    const id=req.params.id
    console.log(id);
    
    
   try {
     const removedData=await Book.deleteOne({_id:id})
     res.status(201).json({removedData})
   } catch (error) {
    console.log(error);
    
   }
}