import express from "express";
import { checkAdmin, createComplaint } from "../ctrl/ctrl.js";

const router = express.Router();

router.post("/login", checkAdmin)
router.post("/sudmit", createComplaint);

export default router;
