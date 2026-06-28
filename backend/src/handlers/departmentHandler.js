import prisma from "../db/db.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import {
  createDepartmentService,
  deleteDepartmentService,
  getAllDepartmentsService,
  getDepartmentByIdService,
  updateDepartmentService,
} from "../services/department.service.js";
import {
  createDepartmentValidationSchema,
  idValidator,
  updateDepartmentValidationSchema,
} from "../validators/validator.js";

const getAllDepartments = asyncHandler(async (req, res) => {
  let allDepartments = await getAllDepartmentsService();
  if (allDepartments.length == 0) throw new Error("No department found");

  res.json({
    message: "All Departments found",
    data: allDepartments,
  });
});
const getDepartmentById = asyncHandler(async (req, res) => {
  idValidator.parse(Number(req.params.id));
  let { id } = req.params;
  let matchDepartment = await getDepartmentByIdService(Number(id));
  res.status(200).json({
    message: "Department found",
    data: matchDepartment,
  });
});
const createDepartment = async (req, res) => {
  createDepartmentValidationSchema.parse(req.body);
  let data = req.body;
  let createdDepartment = await createDepartmentService(data);
  res.status(201).json({
    message: "Department created successfully",
    data: createdDepartment,
  });
};
const updateDepartment = async (req, res) => {
  idValidator.parse(Number(req.params.id));
  let { id } = req.params;
  updateDepartmentValidationSchema.parse(req.body);
  let data = req.body;
  let { name, email } = req.body;
  let updatedDepartment = await updateDepartmentService(Number(id), data);
  res.status(200).json({
    message: "Department updated successfully",
    data: updatedDepartment,
  });
};
const deleteDepartment = async (req, res) => {
  idValidator.parse(Number(req.params.id));
  let { id } = req.params;
  let deletedDepartment = await deleteDepartmentService(Number(id));
  res.status(200).json({
    message: "Department deleted successfully",
    data: deletedDepartment,
  });
};

export {
  getAllDepartments,
  getDepartmentById,
  createDepartment,
  updateDepartment,
  deleteDepartment,
};
