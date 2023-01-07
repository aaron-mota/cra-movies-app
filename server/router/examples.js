const router = require("express").Router()


router.get('/hello', (req, res) => {
  res.send('Hello From EXAMPLES');
});
router.post('/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});


module.exports = router;