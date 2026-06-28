import prisma from "../db/db.js";
import asyncHandler from "../middlewares/asyncHandler.js";

const enrollStudentInCourseService = asyncHandler(async (data) => {
  let { studentId, courseId, enrolledAt } = data;
  let enrollmentCreated = await prisma.enrollments.create({
    data: {
      studentId: studentId,
      courseId: courseId,
    },
    select: {
      id: true,
      createdAt: true,
      updatedAt: true,
      enrollAt: enrolledAt ? true : false,
      student: true,
      course: true,
    },
  });
  return enrollmentCreated;
});
export { enrollStudentInCourseService };
