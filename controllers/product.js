import { Product } from "../models/Product.js";

export const addProduct=async (req,res)=>{
    try{
        let product =await Product.create(req.body)
        res.json({message:"Product added successfully",product,success:true});

    }
    catch (error){
        res.json(error.message)
    }
}

//get all product

export const getall=async (req,res)=>{
    try{
        let product=await Product.find();
        if(!product) return res.json({message:"No product Found",success:false});
        res.json({message:"fetches All product",product,success:true});

    }
    catch (error){
        res.json(error.message);
    }
}


//get product by id
export const getById=async (req,res)=>{
    const id=req.params.id;
    try{
        let product=await Product.findById(id);
        if(!product) return res.json({message:"Invalid Id",success:false});
        res.json({message:"fetches specific  product",product,success:true});

    }
    catch (error){
        res.json(error.message);
    }
}

//update product by id
export const updateById=async (req,res)=>{
    const id=req.params.id;
    try{
        let product=await Product.findByIdAndUpdate(id,req.body,{new:true});
        if(!product) return res.json({message:"Invalid Id",success:false});
        res.json({message:"product updated successfully",product,success:true});

    }
    catch (error){
        res.json(error.message);
    }
}

//delete by id
export const deleteById=async (req,res)=>{
    const id=req.params.id;
    try{
        let product=await Product.findByIdAndDelete(id);
        if(!product) return res.json({message:"Invalid Id",success:false});
        res.json({message:"product has been deletes successfully",success:true});

    }
    catch (error){
        res.json(error.message);
    }
}