const express = require('express');
const stores = express.Router();

const validateStore = require('../validations/storeValidator');

const {
    getAllStores,
    getOneStore
} = require('../queries/stores');

//index

stores.get('/', async (request, response) => {
    const { error, result } = await getAllStores();
    if (error) {
        response.status(500).json({ error: 'Server Error' });
    } else {
        response.status(200).json(result)
    }
});

//show

stores.get('/:id', async (request, response) => {
    const { id } = request.params;
    const { error, result } = await getOneStore(id);

    if (error?.code === 0) {
        response.status(404).json({ error: 'Store does not exist' })
    } else if (error) {
        response.status(500).json({ error: 'Server Error' });
    } else {
        response.status(200).json(result);
    }
});

module.exports = stores;