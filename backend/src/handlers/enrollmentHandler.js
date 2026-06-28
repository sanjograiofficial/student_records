import prisma from "../db/db.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import { enrollStudentInCourseService } from "../services/enrollment.service.js";
import { enrollmentValidationSchema } from "../validators/validator.js";

const enrollStudentInCourse = asyncHandler(async (req, res) => {
  enrollmentValidationSchema.parse(req.body);
  let { studentId, courseId, enrolledAt } = req.body;
  const enrollmentCreated = await enrollStudentInCourseService(req.body);
  res.status(400).json({
    message: "Student enrolled to course successfully",
    data: enrollmentCreated,
  });
});
export { enrollStudentInCourse };
