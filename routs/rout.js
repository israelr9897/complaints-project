import express from "express";
import { createComplaint } from "../ctrl/ctrl.js";

const router = express.Router();

router.post("/sudmit", createComplaint);

export default router;
