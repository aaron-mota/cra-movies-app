const router = require("express").Router()
const api = require("./api")

// API
router.use('/api', api)

// NON-API
router.use('/docs', require("./docs"))



module.exports = router;