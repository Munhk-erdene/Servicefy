import express from "express";
import { createService, deleteService, getAllService, getService, uptadeService } from "../controller/service.js";
import { checkTokenMiddleWare } from "../middleware/middleware.js";
import { checkRole } from "../middleware/role.js";
const router = express.Router();

router
  .route("/")
  .get(getAllService)
  .post(checkTokenMiddleWare,checkRole, createService)
  .delete(checkRole, deleteService);
router.route("/:id").put(checkTokenMiddleWare, uptadeService).get(getService);
export default router;