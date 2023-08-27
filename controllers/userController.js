const express = require("express");
const user = express.Router();

const validateUser = require("../validations/validateUser.js");

const {
  getAllUsers,
  getOneUser,
  addOneUser,
  updateOneUser,
  deleteOneUser,
} = require("../queries/userQuery.js");

// INDEX - show all Users

user.get("/", async (request, response) => {
  const allUsers = await getAllUsers();
  if (allUsers[0]) {
    response.status(200).json(allUsers);
  } else {
    response.status(500).json({ error: "Server Error" });
  }
});

// Show one user by id

user.get("/:id", async (request, response) => {
  const { id } = request.params;
  const { error, result } = await getOneUser(id);
  if (error?.code === 0) {
    response.status(404).json({ error: "User Not Found" });
  } else if (error) {
    response.status(500).json({ error: "Server Error" });
  } else {
    response.status(200).json(result);
  }
});

// Add one user

user.post("/", validateUser, async (request, response) => {
  const { error, result } = await addOneUser(request.body);
  if (error) {
    response.status(500).json({ error: "Server Error" });
  } else {
    response.status(201).json(result);
  }
});

// Update one user

user.put("/:id", validateUser, async (request, response) => {
  const { id } = request.params;
  const { error, result } = await updateOneUser(id, request.body);
  if (error) {
    response.status(500).json({ error: "Server Error - Could not update" });
  } else {
    response.status(200).json({ result });
  }
});

// Delete one user

user.delete("/:id", async (request, response) => {
  const { id } = request.params;
  const { error, result } = await deleteOneUser(id);
  if (error) {
    response.status(404).json({ error: "User Not Found" });
  } else {
    response.status(200).json(result);
  }
});

module.exports = user;
