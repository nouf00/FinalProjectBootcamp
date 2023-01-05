import { FoodItem } from "@prisma/client";
import { Request, Response } from 'express';
import { prisma } from "../Config/db"
import { DelettItemType, UpdatePostItemType } from "../Zod/postZod";
import { IUser } from "../middleware/auth"

export const additemHandler = async (req: Request, res: Response) => {
    const { title , discrbtion, prise ,image ,type } = req.body as FoodItem
    const user = res.locals.user as IUser;

 
    await prisma.foodItem.create({
      data: {
      
        title ,
        discrbtion,
        prise,
        type,
       image,
       chef_id: user.id,
      },
    });
  
    return res.status(201).json({
      message: 'new post: ' 
    })
  }

  export const getAllitemHandler = async (req: Request, res: Response) => {
    const user = res.locals.user as IUser;

    const todoList = await prisma.foodItem.findMany({
      where: {  chef_id: user.id }
  
    });
  
    return res.status(200).json(todoList);
  };
  



  
export const updateitemHandler = async (req: Request, res: Response) => {
  try {
  
    const updateditem = req.body as FoodItem;
    const { itemid } = req.params as UpdatePostItemType;
    const user = res.locals.user as IUser;


    const isUpdated = await prisma.foodItem.updateMany({
      where: {
        itemid: itemid,
        chef_id: user.id 
      
      },
      data: updateditem,
    });

    if (isUpdated.count == 0) {
      return res.status(400).json({
        message: 'Invalid item id',
      });
    }

    return res.status(200).json({
      message: 'Item is updated !',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Server error !',
    });
  }
};


export const deleteitem = async (req: Request, res: Response) => {
 
  const { itemid } = req.params as DelettItemType;
  const user = res.locals.user as IUser;

  const deleteCount = await prisma.foodItem.deleteMany({
    where: {
      itemid:itemid,
      chef_id: user.id 

    },
  });

  if (deleteCount.count == 0) {
    return res.status(400).json({
      message: 'Invalid item id',
    });
  }

  return res.status(200).json({
    message: 'item deleted !',
  });
};