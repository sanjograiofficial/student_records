import prisma from "../db/db.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import {
  createTeacherService,
  deleteTeacherService,
  getAllTeachersService,
  getTeacherByIdService,
  updateTeacherService,
} from "../services/teachers.service.js";
import {
  createTeacherValidationSchema,
  idValidator,
  updateTeacherValidationSchema,
} from "../validators/validator.js";

const getAllTeachers = asyncHandler(async (req, res) => {
  let allTeachers = await getAllTeachersService();
  if (allTeachers.length == 0) throw new Error("No teacher found");
  res.json({
    message: "All teachers found",
    data: allTeachers,
  });
});
const getTeacherById = asyncHandler(async (req, res) => {
  idValidator.parse(Number(req.params.id));
  let { id } = req.params;
  let matchTeacher = await getTeacherByIdService(Number(id));
  res.status(200).json({
    message: "Teacher found",
    data: matchTeacher,
  });
});
const createTeacher = async (req, res) => {
  createTeacherValidationSchema.parse(req.body);
  let data = req.body;
  let createdTeacher = await createTeacherService(data);
  res.status(201).json({
    message: "Teacher created successfully",
    data: createdTeacher,
  });
};
const updateTeacher = async (req, res) => {
  idValidator.parse(Number(req.params.id));
  let { id } = req.params;
  updateTeacherValidationSchema.parse(req.body);
  let data = req.body;
  let updatedTeacher = await updateTeacherService(Number(id), data);
  res.status(200).json({
    message: "Teacher updated successfully",
    data: updateTeacher,
  });
};
const deleteTeacher = async (req, res) => {
  idValidator.parse(Number(req.params.id));
  let { id } = req.params;
  let deletedTeacher = await deleteTeacherService(Number(id));
  res.status(200).json({
    message: "Teacher deleted successfully",
    data: deleteTeacher,
  });
};

export {
  getAllTeachers,
  getTeacherById,
  createTeacher,
  updateTeacher,
  deleteTeacher,
};
