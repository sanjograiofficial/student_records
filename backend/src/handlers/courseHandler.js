import prisma from "../db/db.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import {
  createCourseService,
  deleteCourseService,
  getAllCoursesService,
  getCourseByIdService,
  updateCourseService,
} from "../services/course.service.js";
import {
  createCourseValidationSchema,
  idValidator,
  updateCourseValidationSchema,
} from "../validators/validator.js";

const getAllCourses = asyncHandler(async (req, res) => {
  let allCourses = await getAllCoursesService();
  if (allCourses.length == 0) throw new Error("No course found");

  res.json({
    message: "All Courses found",
    data: allCourses,
  });
});
const getCourseById = asyncHandler(async (req, res) => {
  idValidator.parse(Number(req.params.id));
  let { id } = req.params;
  let matchCourse = await getCourseByIdService(Number(id));
  res.status(200).json({
    message: "Course found",
    data: matchCourse,
  });
});
const createCourse = asyncHandler(async (req, res) => {
  createCourseValidationSchema.parse(req.body);
  const { name, credit, teacherId } = req.body;
  let createdCourse = await createCourseService({ name, credit, teacherId });
  res.status(201).json({
    message: "Course created successfully",
    data: createdCourse,
  });
});
const updateCourse = asyncHandler(async (req, res) => {
  idValidator.parse(Number(req.params.id));
  let { id } = req.params;
  updateCourseValidationSchema.parse(req.body);
  let data = req.body;
  let updatedCourse = await updateCourseService(Number(id), data);
  res.status(200).json({
    message: "Course updated successfully",
    data: updatedCourse,
  });
});
const deleteCourse = asyncHandler(async (req, res) => {
  idValidator.parse(Number(req.params.id));
  let { id } = req.params;
  let deletedCourse = await deleteCourseService(Number(id));
  res.status(200).json({
    message: "Course deleted successfully",
    data: deletedCourse,
  });
});

export {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
};
