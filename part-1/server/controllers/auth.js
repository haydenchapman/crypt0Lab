
const bcrypt = require('bcryptjs');
const users = [];
module.exports = {
    login: (req, res) => {
      //console.log('Logging In User')
      const {username, password} = req.body;

      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
          const correctPass = bcrypt.compareSync(password, users[i].hash);
          if (correctPass) {
            let userToReturn = {...users[i]};
            delete userToReturn.hash;
          res.status(200).send(userToReturn)
          }
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
      console.log('Registering User')
      const {username, email, firstName, lastName, password} = req.body;
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync(password, salt);
      const newUser = {
        username,
        email,
        firstName,
        lastName,
        hash,
        };
        users.push(newUser)
        let userToReturn = {...newUser}
        delete userToReturn.hash;
        res.status(200).send(userToReturn)
        console.log(users);
      }
};