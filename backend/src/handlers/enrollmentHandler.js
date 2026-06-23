import prisma from "../db/db.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import { enrollStudentInCourseService } from "../services/enrollment.service.js";
import { validateAllFieldTypes } from "../validators/fieldValidators.js";

const enrollStudentInCourse = async (req, res) => {
  let { student_id, course_id, enrolled_at } = req.body;
  // validating student id and course id
  if (!student_id || !course_id) {
    return res.status(400).json({
      message: "Student id and course id is required",
    });
  }
  if (student_id && (isNaN(student_id) || Number(student_id)) <= 0) {
    return res.status(400).json({
      message: "Student id not valid",
    });
  }
  if (course_id && (isNaN(course_id) || Number(course_id)) <= 0)
    return res.status(400).json({
      message: "Course Id not valid",
    });
  if (enrolled_at && isNaN(Date.parse(enrolled_at)))
    return res.status(400).json({
      message: "Enrolled at must be a valid date",
    });
  const enrollmentCreated = await enrollStudentInCourseService(req.body);
  res.status(400).json({
    message: "Student enrolled to course successfully",
    data: enrollmentCreated,
  });
};
export { enrollStudentInCourse };
