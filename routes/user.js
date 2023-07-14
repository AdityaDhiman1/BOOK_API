const express= require('express');



const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).send('this is get faculty')
})

router.post('/', (req, res,next) => {
    res.status(200).send('this is post faculty')
})

module.exports = router