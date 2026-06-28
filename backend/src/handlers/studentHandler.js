import e from "express";
import prisma from "../db/db.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import {
  createStudentService,
  createStudentWithDepartmentService,
  deleteStudentService,
  getAllStudentsService,
  getAllStudentsWithSelectService,
  getStudentByIdService,
  updateStudentService,
} from "../services/students.service.js";
import {
  createStudentWithDepartmentValidationSchema,
  updateStudentValidationSchema,
} from "../validators/validator.js";

const getAllStudents = asyncHandler(async (req, res) => {
  let allStudents = await getAllStudentsService();
  if (allStudents.length == 0) throw new Error("No student found");
  res.json({
    message: "All students found",
    data: allStudents,
  });
});
const getAllStudentsWithSelect = async (req, res) => {
  const student = await getAllStudentsWithSelectService();
  res.status(200).json({
    message: "All Students fetched",
    data: student,
  });
};
const getStudentById = asyncHandler(async (req, res) => {
  idValidator.parse(Number(req.params.id));
  let { id } = req.params;
  let matchStudent = await getStudentByIdService(Number(id));
  res.status(200).json({
    message: "Student found",
    data: matchStudent,
  });
});
const createStudent = async (req, res, next) => {
  // parse body data using zod validator schema
  nameValidatorSchema.safeParse(req.body);
  let data = req.body;
  let createdStudent = await createStudentService(data);
  res.status(201).json({
    message: "Student created successfully",
    data: createdStudent,
  });
};
const createStudentWithDepartment = async (req, res) => {
  createStudentWithDepartmentValidationSchema.parse(req.body);
  let data = req.body;
  let createdStudent = await createStudentWithDepartmentService(data);
  res.status(201).json({
    message: "Student created successfully",
    data: createdStudent,
  });
};
const updateStudent = async (req, res) => {
  idValidator.parse(Number(req.params.id));
  let { id } = req.params;
  updateStudentValidationSchema.parse(req.body);
  let data = req.body;
  let updatedStudent = await updateStudentService(Number(id), data);
  res.status(200).json({
    message: "Student updated successfully",
    data: updatedStudent,
  });
};
const deleteStudent = async (req, res) => {
  idValidator.parse(Number(req.params.id));
  let { id } = req.params;
  let deletedStudent = await deleteStudentService(Number(id));
  res.status(200).json({
    message: "Student deleted successfully",
    data: deletedStudent,
  });
};

export {
  getAllStudents,
  getStudentById,
  createStudent,
  createStudentWithDepartment,
  updateStudent,
  deleteStudent,
};
