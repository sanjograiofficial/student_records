import { Router } from "express";
import { enrollStudentInCourse } from "../handlers/enrollmentHandler.js";

const router = Router();

router.post("/", enrollStudentInCourse);

export default router;
