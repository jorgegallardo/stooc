const express = require('express');
const router = express.Router();

//@route        GET api/dashboard/test
//@description  tests dashboard route
//@access       public
router.get('/test', (req, res) => {
  res.json({ message: 'dashboard works' });
});

module.exports = router;
