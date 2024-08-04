const router = require('express').Router();
const signUp = require('../controller/appController').signUp;

router.post('/user/sign-up', signUp);


module.exports = router;