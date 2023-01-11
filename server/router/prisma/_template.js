// import {PrismaClient} from '@prisma/client'
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient
const router = require("express").Router()

const collection = "collection"


/////////////////
// NOTES
/////////////////

// using "id" for FE rendering, so need to create it for FE from MongoDb's "_id"  (done with handler functions, etc.)



/////////////////
// HANDLER FUNCTIONS
/////////////////

// SINGLE
////////////
const createSingle = async (doc) => {
  // CREATE DOC IN DB
  let createdDoc = await prisma[collection].create({
    data: doc,
  })  // console.log("RETURN", createdDoc)  // [createdDoc] createdDoc (id, not  _id)
  // RETURN DOC
  return createdDoc
} 
const getSingle = async (id) => {
  // GET DOC FROM DB
  let doc = await prisma[collection].findFirst({
    where: {
      id: id
    }
  })  // console.log("RETURN", doc) // [doc] doc (id, not _id)
  // RETURN DOC
  return doc
} 
const updateSingle = async (doc) => {
  // UPDATE DOC IN DB
  const id = doc.id
  delete doc.id
  const updatedDoc = await prisma[collection].update({
    where: {
      id: id
    },
    data: doc
  })  // console.log("RETURN", updatedDoc)  // [updatedDoc] doc (id, not _id)
  doc.id = id
  // RETURN DOC
  return doc
} 
const deleteSingle = async (id) => {
  // DELETE DOC FROM DB
  const result = await prisma[collection].delete({
    where: {
      id: id
    }
  }) // console.log("RETURN", result) // [result] deletedDoc (id, not _id)
  const bool = Boolean(result.id)
  // RETURN DOC
  return bool
}

// MANY
////////////
const getMany = async () => {
  // GET DOCS FROM DB
  let docs = await prisma[collection].findMany()  // console.log("RETURN", docs) // [docs] array of docs
  // RETURN DOCS
  return docs
} 


  
async function main() {
  await prisma.$connect()

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
    // console.log(typeof req.params.id, req.params.id)
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
  router.get('/', async (req, res) => {
    const docs = await getMany()
    res.send(docs);
  });


}



main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })



module.exports = router;

