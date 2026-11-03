import express from 'express';
import {login,register} from '../controllers/User.js';

const router=express.Router();

//register
//@aapi
router.post('/register',register)

//login
//@api
router.post('/login',login);

export default router;