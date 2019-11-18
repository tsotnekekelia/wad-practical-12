const express = require('express');
const router = express.Router();
const fs = require('fs');

/* GET users tasks listing. */
router.get('/1/tasks', function (req, res, next) {

    fs.readFile('./data/tasks.json', (err, data) => {
        if (err) throw err;
        let tasks = JSON.parse(data);
        res.json(tasks);
    });

});

module.exports = router;
