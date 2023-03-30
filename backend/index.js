import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import router from "./router/service.js";
import routerUser from "./router/user.js";
dotenv.config();
const uri = process.env.MONGO_URI || "";
const port = process.env.PORT || 1234;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/Service", router);
app.use("/User", routerUser);

const connect = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(uri, {})

    .then(() => {
      console.log("connected to DB");
    })
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
};

app.listen(port, async () => {
  console.log(`app running ${port}`);
  connect();
});