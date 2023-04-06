import express from "express";
import { comment, deletePost, getAllPost, getPost, uptadePost } from "../controller/post.js";
import { createPost } from "../controller/user.js";
import { checkTokenMiddleWare } from "../middleware/middleware.js";
import { checkRole } from "../middleware/role.js";
const router = express.Router();

router
  .route("/")
  .get(getAllPost)
  .post(checkTokenMiddleWare,checkRole, createPost)
  .delete(checkRole, deletePost);
  
router.route("/:id").put(checkTokenMiddleWare, uptadePost).get(getPost);
router.route("/Comment/:id").put(comment);
export default router;