
import express from 'express';
import {
  additemHandler,
  deleteitem,
  getAllitemHandler,
  updateitemHandler

} from "../controller/item.controller";
import validate from '../middleware/Valdation';
import { NewPostItem, UpdatePostItem } from '../Zod/postZod';
import { protect } from '../middleware/auth';



const router = express.Router();


router.post('/',protect, validate(NewPostItem),additemHandler);
router.get('/', getAllitemHandler)
router.put("/:id",protect, validate(UpdatePostItem),updateitemHandler)
router.delete("/:id" ,protect ,deleteitem)

export default router