const router = require("express").Router()
const docs = require("../db/db_docs.json")

// HANDLER FUNCTIONS
const updateSingle = (doc) => {
  // UPDATE DOC IN DB
  const index = docs.findIndex(d => d.id === doc.id)
  docs[index] = doc
  // RETURN DOC
  return doc
} 
const getSingle = (id) => {
  // GET DOC FROM DB
  const doc = docs.find(d => d.id === +id)
  // RETURN DOC
  return doc
} 



// GET ALL
router.get('/', (req, res) => {
  res.send(docs);
});

// GET SINGLE (BY ID)
router.get('/:id', async (req, res) => {
  const doc = await getSingle(req.params.id) // nothing to truly await here with in-app mock data
  res.send(doc);
});

// UPDATE SINGLE [PUT]
router.put('/:id', async (req, res) => {
  // const id = req.params.id
  const doc = req.body.doc
  const updatedDoc = await updateSingle(doc) // nothing to truly await here with in-app mock data
  res.send(updatedDoc)
})



// NOT YET USED
// router.post('/', (req, res) => {
//   console.log(req.body);
//   res.send(
//     `I received your POST request. This is what you sent me: ${req.body.post}`,
//   );
// });





module.exports = router;

