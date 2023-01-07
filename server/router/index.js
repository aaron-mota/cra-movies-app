const router = require("express").Router()
const api = require("./api")

// API
router.use('/api', api)

// NON-API
router.use('/examples', require("./examples"))



module.exports = router;