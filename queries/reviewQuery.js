const db = require("../db/dbConfig.js");

// get all Reviews
const getAllReviews = async () => {
  try {
    const allReviews = await db.any("SELECT * FROM review ORDER BY review_id");
    return allReviews;
  } catch (error) {
    throw error;
  }
};

// get one review
const getOneReview = async (id) => {
  try {
    const oneReview = await db.oneOrNone(
      "SELECT * FROM review WHERE review_id = $1",
      id
    );
    return { result: oneReview };
  } catch (error) {
    throw { error };
  }
};

// add new review

const addOneReview = async (review) => {
  try {
    const newReview = await db.one(
      "INSERT INTO review (shopper_firebase_uid, store_id, review_rating, review_comment, review_timestamp) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [
        review.shopper_firebase_uid,
        review.store_id,
        review.review_rating,
        review.review_comment,
        review.review_timestamp,
      ]
    );

    return { result: newReview };
  } catch (error) {
    throw error;
  }
};

// update review
const updateOneReview = async (id, review) => {
  try {
    const updateReview = await db.one(
      "UPDATE review SET shopper_firebase_uid=$1, store_id=$2, review_rating=$3, review_comment=$4, review_timestamp=$5 WHERE review_id=$6 RETURNING *",
      [
        review.shopper_firebase_uid,
        review.store_id,
        review.review_rating,
        review.review_comment,
        review.review_timestamp,
        id,
      ]
    );
    return { result: updateReview };
  } catch (error) {
    throw error;
  }
};

// delete review
const deleteOneReview = async (id) => {
  try {
    const deleteReview = await db.one(
      "DELETE FROM review WHERE review_id=$1 RETURNING *",
      id
    );
    return deleteReview;
  } catch (error) {
    throw { error };
  }
};

module.exports = {
  getAllReviews,
  getOneReview,
  addOneReview,
  updateOneReview,
  deleteOneReview,
};
