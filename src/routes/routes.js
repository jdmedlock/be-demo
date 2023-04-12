const express = require('express')
const { wakeUp } = require('../controllers/wakeup')
const { hello } = require('../controllers/hello')

const router = express.Router()

router.route('/wakeup')
  .get(wakeUp)
router.route('/hello')
  .get(hello)

module.exports = router