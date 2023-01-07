const router = require("express").Router()
const docs = require("../_mock/db_docs.json")


router.get('/', (req, res) => {
  res.send(docs);
});

router.post('/', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});


module.exports = router;