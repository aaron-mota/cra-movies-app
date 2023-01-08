const router = require("express").Router()
let docs = require("../db/db_docs.json")

// HANDLER FUNCTIONS
const createSingle = (doc) => {
  // CREATE DOC IN DB
  docs = docs.unshift(doc)
  // RETURN DOC
  return doc
} 
const getSingle = (id) => {
  // GET DOC FROM DB
  const doc = docs.find(d => d.id === +id)
  // RETURN DOC
  return doc
} 
const updateSingle = (doc) => {
  // UPDATE DOC IN DB
  const index = docs.findIndex(d => d.id === doc.id)
  docs[index] = doc
  // RETURN DOC
  return doc
} 
const deleteSingle = (id) => {
  // DELETE DOC FROM DB
  docs = docs.filter(d => d.id !== +id)
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
  // const id = req.params.id
  const doc = req.body.doc
  const updatedDoc = await updateSingle(doc) // nothing to truly await here with in-app mock data
  res.send(updatedDoc)
})

// DELETE
router.delete('/:id', async (req, res) => {
  // const id = req.params.id
  const bool = await deleteSingle(req.params.id) // nothing to truly await here with in-app mock data
  res.send(bool)
})

/////////////////
// MANY
/////////////////
// GET ALL
router.get('/', (req, res) => {
  res.send(docs);
});



// NOT YET USED
// router.post('/', (req, res) => {
//   console.log(req.body);
//   res.send(
//     `I received your POST request. This is what you sent me: ${req.body.post}`,
//   );
// });





module.exports = router;

