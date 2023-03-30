import express from "express";
import { createService, deleteService, getAllService, getService, uptadeService } from "../controller/service.js";
import { checkTokenMiddleWare } from "../middleware/middleware.js";
const router = express.Router();

router
  .route("/")
  .get(getAllService)
  .post(checkTokenMiddleWare, createService)
  .delete( deleteService);
router.route("/:id").put(checkTokenMiddleWare, uptadeService).get(getService);
export default router;