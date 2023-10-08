const express = require('express');
const router = express.Router();

router.post('/foodData', (req, res) => {
    try {
        res.send(global.food_items);
        res.send(global.food_cat);
    } catch (error) {
        console.error(error.message);
        res.send('Server error');
    }
})

module.exports = router;