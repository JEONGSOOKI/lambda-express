const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log(req);
    res.json({msg:'router to router exam!'});
});

module.exports = router;