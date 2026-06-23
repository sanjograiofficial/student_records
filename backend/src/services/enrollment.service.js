import prisma from "../db/db.js";
import asyncHandler from "../middlewares/asyncHandler.js";

const enrollStudentInCourseService = asyncHandler(async (data) => {
  let { student_id, course_id, enrolled_at } = data;
  let enrollmentCreated = await prisma.enrollments.create({
    data: {
      studentId: student_id,
      courseId: course_id,
    },
    select: {
      id: true,
      createdAt: true,
      updatedAt: true,
      enrolledAt: enrolled_at ? false : true,
      student: true,
      course: true,
    },
  });
  return enrollmentCreated;
});
export { enrollStudentInCourseService };
