const db = require("../db/dbConfig.js");

// get all Users
const getAllUsers = async () => {
  try {
    const allUsers = await db.any("SELECT * FROM user");
    return allUsers;
  } catch (error) {
    throw error;
  }
};

// get one user
const getOneUser = async (id) => {
  try {
    const oneUser = await db.oneOrNone(
      "SELECT * FROM user WHERE user_firebase_uid = $1",
      id
    );
    return { result: oneUser };
  } catch (error) {
    throw { error };
  }
};

// add new User
const addOneUser = async (user) => {
  try {
    const newUser = await db.one(
      "INSERT INTO user (user_firebase_uid, user_email, user_first_name, user_last_name, user_instagram_link, user_facebook_link, user_dietary_preferences) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        user.user_firebase_uid,
        user.user_email,
        user.user_first_name,
        user.user_last_name,
        user.user_instagram_link,
        user.user_facebook_link,
        user.user_dietary_preferences,
      ]
    );
    return { result: newUser };
  } catch (error) {
    throw { error };
  }
};

// update User
const updateOneUser = async (id, user) => {
  try {
    const updateUser = await db.one(
      "UPDATE user SET user_firebase_uid=$1, user_email=$2, user_first_name=$3, user_last_name=$4, user_instagram_link=$5, user_facebook_link=$6, user_dietary_preferences=$7 WHERE user_firebase_uid=$8 RETURNING *",
      [
        user.user_firebase_uid,
        user.user_email,
        user.user_first_name,
        user.user_last_name,
        user.user_instagram_link,
        user.user_facebook_link,
        user.user_dietary_preferences,
        id,
      ]
    );
    return { result: updateUser };
  } catch (error) {
    throw { error };
  }
};

// delete user
const deleteOneUser = async (id) => {
  try {
    const deleteUser = await db.one(
      "DELETE FROM user WHERE user_firebase_uid=$1 RETURNING *",
      id
    );
    return deleteUser;
  } catch (error) {
    throw { error };
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  addOneUser,
  updateOneUser,
  deleteOneUser,
};
