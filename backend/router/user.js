import express from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  getUser,
  login,
  order,
  removeSags,
  removeWishlist,
  sags,
  wishlist,
} from "../controller/user.js";

const routerUser = express.Router();

routerUser.get("/", getAllUser).post("/", createUser).post("/login", login);
routerUser.route("/:id").delete(deleteUser).get(getUser).put(order);
routerUser.route("/sags/:id").put(sags);
routerUser.route("/wishlist/:id").put(wishlist);
routerUser.route("/removeSags/:id").put(removeSags);
routerUser.route("/removeWishlist/:id").put(removeWishlist);
export default routerUser;