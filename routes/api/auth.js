//anything having to do with registering, login, authentication, form validations
const express = require('express');
const router = express.Router();

//@route        GET api/auth/test
//@description  tests auth route
//@access       public
router.get('/test', (req, res) => {
  res.json({ message: 'auth works' });
});

module.exports = router;
