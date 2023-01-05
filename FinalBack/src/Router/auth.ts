import express from "express";
import validate from "../middleware/Valdation"
import {
  chefRegisterSchema,
  foodyRegisterSchema,
  loginSchema,
} from "../Zod/authZod"
import {
  chefLoginHandler,
  chefRegisterHandler,
  foodyLoginHandler,
  foodyRegisterHandler,
  getallchef
} from "../controller/auth.controller";

const router = express();

router.post("/cheflogin", validate(loginSchema), chefLoginHandler);
router.post("/foodylogin", validate(loginSchema), foodyLoginHandler);
router.post("/chefregister", validate(chefRegisterSchema), chefRegisterHandler);
// router.get("/chefregister" , getallchef)
router.post(
  "/foodyregister",
  validate(foodyRegisterSchema),
  foodyRegisterHandler
);

export default router;