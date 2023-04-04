import express from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  getUser,
  login,
  order,
  comment,
  post
} from "../controller/user.js";

const routerUser = express.Router();

routerUser.get("/", getAllUser).post("/", createUser).post("/login", login);
routerUser.route("/:id").delete(deleteUser).get(getUser).put(order);
routerUser.route("/Post/:id").put(post);
routerUser.route("/Comment/:id").put(comment);

export default routerUser;