const router = require("express").Router()
let docs = require("../db/docs.json")
const { v4: uuidv4 } = require('uuid');

/////////////////
// HANDLER FUNCTIONS
/////////////////
const createSingle = (doc) => {
  // CREATE DOC IN DB
  doc.id = uuidv4()
  docs.unshift(doc)
  // RETURN DOC
  return doc
} 
const getSingle = (id) => {
  // GET DOC FROM DB
  const doc = docs.find(d => `${d.id}` === `${id}`)
  // RETURN DOC
  return doc
} 
const updateSingle = (doc) => {
  // UPDATE DOC IN DB
  const index = docs.findIndex(d => `${d.id}` === `${doc.id}`)
  docs[index] = doc
  // RETURN DOC
  return doc
} 
const deleteSingle = (id) => {
  // DELETE DOC FROM DB
  docs = docs.filter(d => `${d.id}` !== `${id}`)
  // RETURN DOC
  return true
} 


/////////////////
// SINGLE
/////////////////

// CREATE
router.post('/', async (req, res) => {
  // const id = req.params.id
  const doc = req.body.doc
  const createdDoc = await createSingle(doc) // nothing to truly await here with in-app mock data
  res.send(createdDoc)
})

// READ (BY ID)
router.get('/:id', async (req, res) => {
  const doc = await getSingle(req.params.id) // nothing to truly await here with in-app mock data
  res.send(doc);
});

// UPDATE [PUT]
router.put('/:id', async (req, res) => {
  console.log("UPDATE:", req.body)
  const doc = req.body.doc
  const updatedDoc = await updateSingle(doc) // nothing to truly await here with in-app mock data
  res.send(updatedDoc)
})

// DELETE
router.delete('/:id', async (req, res) => {
  const bool = await deleteSingle(req.params.id) // nothing to truly await here with in-app mock data
  res.send(bool)
})


/////////////////
// MANY
/////////////////

// READ (ALL)
router.get('/', (req, res) => {
  res.send(docs);
});






module.exports = router;

