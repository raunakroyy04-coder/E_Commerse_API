import express from 'express';
import { addToCart, clearCart, decreaseProductQty, removeProductFromCart, userCart } from '../controllers/cart.js';
import { isAuth } from '../Middlewares/Auth.js';

const router=express.Router();


//add to cart
router.post('/add',isAuth,addToCart)

//get user cart
router.get('/user',isAuth,userCart)

//remove product from cart
router.delete('/remove:productId',isAuth,removeProductFromCart)

//clear cart
router.delete('/clear',isAuth,clearCart)

//decrease from cart
router.post('/--qty',isAuth,decreaseProductQty)

export default router;