const router = require("express").Router()
const api = require("./api")

// API
//////////////
router.use('/api', api)

// NON-API
//////////////

// LOCAL "MOCK DB"
// router.use('/docs', require("./mock/docs"))

// MONGODB
router.use('/docs', require("./mongodb/docs"))



module.exports = router;