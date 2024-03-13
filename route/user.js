const express = require('express');
const controller = require('../controller')
const router = express.Router();
router.get('/',controller.getLoginData
);
router.get('/:id',controller.getPersonData)

router.post('/',controller.addFormData)

module.exports = router;