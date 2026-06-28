import prisma from "../db/db.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import {
  createUserService,
  deleteUserService,
  getAllUsersService,
  getUserByIdService,
  updateUserService,
} from "../services/users.service.js";

const getAllUsers = asyncHandler(async (req, res) => {
  let allUsers = await getAllUsersService();
  if (allUsers.length == 0) throw new Error("No user found");

  res.json({
    message: "All Users found",
    data: allUsers,
  });
});
const getUserById = asyncHandler(async (req, res) => {
  idValidator.parse(Number(req.params.id));
  let { id } = req.params;
  if (id == "") {
    return res.status(400).json({
      error: "Id cannot be empty",
    });
  }
  if (isNaN(id)) {
    return res.status(400).json({
      error: "Id must be a number",
    });
  }
  let matchUser = await getUserByIdService(Number(id));
  res.status(200).json({
    message: "User found",
    data: matchUser,
  });
});
const createUser = async (req, res) => {
  let data = req.body;
  let createdUser = await createUserService(data);
  res.status(201).json({
    message: "User created successfully",
    data: createdUser,
  });
};
const updateUser = async (req, res) => {
  let id = req.params;
  if (id == "") {
    return res.status(400).json({
      error: "Id cannot be empty",
    });
  }
  if (isNaN(id)) {
    return res.status(400).json({
      error: "Id must be a number",
    });
  }
  let data = req.body;
  let { name, email } = req.body;
  let updatedUser = await updateUserService(Number(id), data);
  res.status(200).json({
    message: "User updated successfully",
    data: updatedUser,
  });
};
const deleteUser = async (req, res) => {
  let id = req.params;
  if (id == "") {
    return res.status(400).json({
      error: "Id cannot be empty",
    });
  }
  if (isNaN(id)) {
    return res.status(400).json({
      error: "Id must be a number",
    });
  }
  let deletedUser = await deleteUserService(Number(id));
  res.status(200).json({
    message: "User deleted successfully",
    data: deletedUser,
  });
};

export { getAllUsers, getUserById, createUser, updateUser, deleteUser };
