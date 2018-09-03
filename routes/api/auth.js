//anything having to do with registering, login, authentication, form validations
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');

//load Teacher model
const Teacher = require('../../models/Teacher');

//@route        POST api/auth/register
//@description  registers a new user in the db
//@access       public
router.post('/register', (req, res) => {
  //mongoose queries aren't promises, but do have a .then function
  Teacher.findOne({ email: req.body.email }).then(teacher => {
    //if the teacher exists, the email being sent is not unique
    if (teacher) {
      return res.status(400).json({ email: 'Email already exists.' });
    } else {
      const { firstName, lastName, email, password } = req.body;
      const newTeacher = new Teacher({ firstName, lastName, email, password });

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

//@route        POST api/auth/register
//@description  user login (return JWT)
//@access       public
router.post('/login', (req, res) => {
  //user will send a form with an email and a password, login has to find user by email, then compare password in request to the encrypted password, and if they match, send the jwt
  const { email, password } = req.body;
  Teacher.findOne({ email }).then(teacher => {
    if (!teacher) return res.status(404).json({ email: 'Teacher not found.' });

    bcrypt.compare(password, teacher.password).then(passwordsMatch => {
      if (passwordsMatch) {
        //res.send({ password: 'Successful match.' });
        const payload = { id: teacher.id, firstName: teacher.firstName };

        //payload is the user info we want to include in the token
        jwt.sign(
          payload,
          keys.secretOrPrivateKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({ success: true, token: `Bearer ${token}` });
          }
        );
      } else return res.status(400).json({ password: 'Incorrect password.' });
    });
  });
});

//@route        GET api/auth/test
//@description  tests auth route
//@access       public
router.get('/test', (req, res) => {
  res.json({ message: 'auth works' });
});

module.exports = router;
