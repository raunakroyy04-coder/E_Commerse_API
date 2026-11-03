import express from 'express';
import { addProduct, deleteById, getall, getById, updateById } from '../controllers/product.js';


const router=express.Router();

//add product
//@aapi
router.post('/add',addProduct)

//get all products
//@api
router.get('/all',getall);

//get by id
router.get('/:id',getById)

//update by id
router.put('/:id',updateById)

//delete by id
router.delete('/:id',deleteById)




export default router;