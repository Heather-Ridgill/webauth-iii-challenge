const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const jwt = require(`jsonwebtoken`);

const authRouter = require('./authentication/auth-router');
const usersRouter = require('./users/user-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
  res.send("It's alive!");
});

//Lets get that TOKEN!
server.get(`/token`, (req, res)=> {
// const token = jwt.sign({
//     token: `I got the token!`,
//     exp: 100 * 60 * 5
// }, `secret`)
// res.status(400).json(token)
// })


const payload =  {
    subject: `theuser`,
    userid: `hridgill`,
    favoriteChili: `habanero`
};

const secret = `thisisgoingtowork`;

const options = {
    expiresIn: `1d`
};

const token = jwt.sign(payload, secret, options);

res.json(token);
})

module.exports = server;