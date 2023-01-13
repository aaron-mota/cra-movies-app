const router = require("express").Router()
const { v4: uuidv4 } = require('uuid');
let docs = require("../../db/docs.json")

const ObjectId = require('mongodb').ObjectId
const db = require('../../db/mongodb')

const collection = db.collection("docs") // <-- EDIT!


/////////////////
// NOTES
/////////////////

// using "id" for FE rendering, so need to create it for FE from MongoDb's "_id"  (done with handler functions, etc.)




/////////////////
// HANDLER FUNCTIONS
/////////////////
const createSingle = async (doc) => {
  // CREATE DOC IN DB
  let createdDoc = await collection.insertOne(doc)
  createdDoc.id = createdDoc._id
  console.log("RETURN", createdDoc)
  // RETURN DOC
  return createdDoc
} 
const getSingle = async (id) => {
  // GET DOC FROM DB
  let doc = await collection.findOne({_id: ObjectId(id)})
  doc.id = doc._id
  // RETURN DOC
  return doc
} 
const updateSingle = async (doc) => {
  // UPDATE DOC IN DB
  const id = doc._id
  delete doc._id
  delete doc.id
  const updatedDoc = await collection.updateOne({_id: ObjectId(id)}, {$set: {...doc}})
  // {
  //   acknowledged: true,
  //   modifiedCount: 1,
  //   upsertedId: null,
  //   upsertedCount: 0,
  //   matchedCount: 1
  // }
  doc._id = id
  doc.id = id
  // RETURN DOC
  return doc
} 
const deleteSingle = async (id) => {
  // DELETE DOC FROM DB
  const result = await collection.deleteOne({_id: ObjectId(id)})
  // { acknowledged: true, deletedCount: 1 }
  // RETURN DOC
  return result.acknowledged
} 


/////////////////
// SINGLE
/////////////////

// CREATE
router.post('/', async (req, res) => {
  // const id = req.params.id
  const doc = req.body.doc
  const createdDoc = await createSingle(doc)
  res.send(createdDoc)
})

// READ (BY ID)
router.get('/:id', async (req, res) => {
  const doc = await getSingle(req.params.id)
  res.send(doc);
});

// UPDATE [PUT]
router.put('/:id', async (req, res) => {
  console.log("UPDATE:", req.body)
  const doc = req.body.doc
  const updatedDoc = await updateSingle(doc)
  res.send(updatedDoc)
})

// DELETE
router.delete('/:id', async (req, res) => {
  const bool = await deleteSingle(req.params.id)
  res.send(bool)
})


/////////////////
// MANY
/////////////////

// READ (ALL)
router.get('/', async (req, res) => {
  let docs = await collection.find().toArray()
  docs = docs.map(doc => ({...doc, id: doc._id}))
  res.send(docs);
});






module.exports = router;

