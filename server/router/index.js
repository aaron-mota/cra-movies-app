const router = require("express").Router()
const api = require("./api")

// API
//////////////
router.use('/api', api)

// NON-API
//////////////
// Uncomment different router sets to swap databases

// MOCK DB (LOCAL JSON FILE) (generated via Mockaroo)
// router.use('/docs', require("./mock/docs"))

// MONGODB
// router.use('/docs', require("./mongodb/docs"))

// PRISMA
router.use('/docs', require("./prisma/docs"))
// router.use('/users', require("./prisma/users"))



module.exports = router;