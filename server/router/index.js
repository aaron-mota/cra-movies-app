const router = require("express").Router()
const api = require("./api")

// API
//////////////
router.use('/api', api)

// NON-API
//////////////
// Uncomment different router sets to swap databases

// MOCKLOCAL "MOCK DB"
// router.use('/docs', require("./mock/docs"))

// MONGODB
// router.use('/docs', require("./mongodb/docs"))

// PRISMA
router.use('/docs', require("./prisma/docs"))



module.exports = router;