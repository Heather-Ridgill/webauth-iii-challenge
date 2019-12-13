const router = require('express').Router();

const Users = require('./users-model');
const checkRole = require (`../authentication/check-role-middleware`);
const restricted = require('../authentication/auth-restricted-middleware');


router.get('/', restricted, checkRole(`HR`), (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.get (`/roles`, restricted, checkRole(`Finance`), checkRole(`HR`), checkRole(`Service`))

module.exports = router;
