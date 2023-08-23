const express = require('express');
const reviews = express.Router();

const validateReviews = require('../validations/reviewerValidator');

const {
    getAllReviews,
    getOneReview,
    createAReview,
    updateReview,
    deleteAReview
} = require('../queries/reviews');

//index

reviews.get('/', async (request, response) => {
    const { error, result } = await getAllReviews();
    if (error) {
        response.status(500).json({ error: 'Server Error' })
    } else {
        response.status(200).json(result)
    }
});

//show

reviews.get('/:id', async (request, response) => {
    const { error, result } = await getOneReview();
    if (error?.code === 0) {
        response.status(404).json({ error: 'Review Not Found' })
    } else if (error) {
        response.status(500).json({ error: 'Server Error' })
    } else {
        response.status(200).json(result)
    }
});

//create

reviews.post('/', validateReviews, async (request, response) => {
    const { error, newUser } = await createAReview(request.body);
    if (error) {
        response.status(500).json({ error: 'Server Error' })
    } else {
        response.status(201).json(newUser)
    }
});

//update

reviews.put('/:id', validateReviews, async (request, response) => {
    const { id } = request.params
    const { error, updatedReview } = await updateReview(id, request.body)
    if (error) {
        response.status(500).json({ error: 'Server Error' })
    } else {
        response.status(200).json({ updatedReview })
    }
});

//delete

reviews.delete('/:id', async (request, response) => {
    const { id } = request.params
    const { error, deleteReview } = await deleteAReview(id)
    if (error) {
        response.status(404).json({ error: 'Review Not Found' })
    } else {
        response.status(200).json(deleteReview)
    }
});

module.exports = reviews



