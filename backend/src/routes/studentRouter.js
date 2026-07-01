import {
  createStudent,
  createStudentWithDepartment,
  deleteStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
} from "../handlers/studentHandler.js";
import { Router } from "express";
import {
  getAllStudentsWithSelectService,
  sortStudentsService,
} from "../services/students.service.js";
import { authMiddleWare } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/", authMiddleWare, getAllStudents);
router.get("/select", getAllStudentsWithSelectService);
router.get("/sort", sortStudentsService);
router.get("/:id", getStudentById);
router.post("/", createStudent);
router.post("/with-depart", createStudentWithDepartment);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

export default router;
