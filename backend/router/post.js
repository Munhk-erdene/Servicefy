import express from "express";
import { comment, deletePost, getAllPost, getPost, uptadePost } from "../controller/post.js";
import { createPost } from "../controller/post.js";
import { checkTokenMiddleWare } from "../middleware/middleware.js";
const router = express.Router();

router
  .route("/")
  .get(getAllPost)
  .post( createPost)
  .delete( deletePost);
  
router.route("/:id").put(checkTokenMiddleWare, uptadePost).get(getPost);
router.route("/Comment/:id").put(comment);
export default router;