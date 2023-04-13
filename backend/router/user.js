import express from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  getUser,
  login,
  order,
} from "../controller/user.js";

const routerUser = express.Router();

routerUser.get("/", getAllUser).post("/", createUser).post("/Login", login);
routerUser.route("/:id").delete(deleteUser).get(getUser).put(order);


export default routerUser;