const express = require("express");
const review = express.Router();

const validateReviews = require("../validations/validateReviews.js");

const {
  getAllReviews,
  getOneReview,
  addOneReview,
  updateOneReview,
  deleteOneReview,
} = require("../queries/reviewQuery.js");

// INDEX - show all reviews

review.get("/reviews", async (request, response) => {
  const allReviews = await getAllReviews();
  if (allReviews[0]) {
    response.status(200).json(allReviews);
  } else {
    response.status(500).json({ error: "Server Error" });
  }
});

// Show one review by id

review.get("/reviews/:id", async (request, response) => {
  const { id } = request.params;
  const { error, result } = await getOneReview(id);
  if (error?.code === 0) {
    response.status(404).json({ error: "Review Not Found" });
  } else if (error) {
    response.status(500).json({ error: "Server Error" });
  } else {
    response.status(200).json(result);
  }
});

// Add one review

review.post("/reviews", validateReviews, async (request, response) => {
  const { error, result } = await addOneReview(request.body);
  if (error) {
    response.status(500).json({ error: "Server Error" });
  } else {
    response.status(201).json(result);
  }
});

// Update one review

review.put("/reviews/:id", validateReviews, async (request, response) => {
  const { id } = request.params;
  const { error, result } = await updateOneReview(id, request.body);
  if (error) {
    response.status(500).json({ error: "Server Error - Could not update" });
  } else {
    response.status(200).json({ result });
  }
});

// Delete one review

review.delete("/reviews/:id", async (request, response) => {
  const { id } = request.params;
  const { error, result } = await deleteOneReview(id);
  if (error) {
    response.status(404).json({ error: "Review Not Found" });
  } else {
    response.status(201).json(result);
  }
});

module.exports = review;
