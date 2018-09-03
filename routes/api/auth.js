//anything having to do with registering, login, authentication, form validations
const express = require('express');
const router = express.Router();
var bcrypt = require('bcrypt');
const saltRounds = 10;

//load Teacher model
const Teacher = require('../../models/Teacher');

//@route        GET api/auth/register
//@description  registers a new user in the db
//@access       public
router.post('/register', (req, res) => {
  //mongoose queries aren't promises, but do have a .then function
  Teacher.findOne({ email: req.body.email }).then(teacher => {
    //if the teacher exists, the email being sent is not unique
    if (teacher) {
      return res.status(400).json({ email: 'Email already exists.' });
    } else {
      const { name, email, password } = req.body;
      const newTeacher = new Teacher({ name, email, password });

      bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) throw err;
        newTeacher.password = hash;
        //mongoose async operations (save) return es6 promises
        newTeacher
          .save()
          .then(teacher => {
            console.log(`Created teacher:\n ${teacher}.`);
            res.json(teacher);
          })
          .catch(err => {
            res.status(400).json(err);
          });
      });
    }
  });
});

//@route        GET api/auth/test
//@description  tests auth route
//@access       public
router.get('/test', (req, res) => {
  res.json({ message: 'auth works' });
});

module.exports = router;
