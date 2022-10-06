import express from 'express';

// const express = require('express');
const router = express.Router();

// provide todo route implementation here

router.get('/', (req, res) => {
    res.send('Root endpoint of of TODO route')
})

router.get('/id', (req, res) => {
    res.send('Get TODO Item by ID')
})

export default router;

// module.exports = router;