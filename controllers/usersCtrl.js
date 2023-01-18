const { User } = require("../models/users.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signUp = (req, res) => {
  console.log(req.body);
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        email: req.body.email,
        password: hash,
      });
      user
        .save()
        .then(() =>
          res.status(200).json({ message: "utilisateur enregistré!" })
        )
        .catch((err) =>
          res.status(400).json({ message: "Utilisateur non enregistré!" + err })
        );
    })
    .catch((err) => res.status(500).json({ err }));
};

// login controller
exports.logUser = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const findUser = User.findOne({ email: email });
  //
  findUser
    .then((user) => {
      if (user === null) {
        res.status(401).json({ error: "Utilisateur non trouvé !" });
      } else {
        bcrypt
          .compare(password, user.password)
          .then((valid) => {
            if (!valid) {
              res.status(401).json({ error: "Mot de passe incorrect!" });
            } else {
              const token = `${process.env.JWT_PASSWORD}`;
              res.status(200).json({
                userId: user._id,
                token: jwt.sign({ userId: user._id }, token, {
                  expiresIn: "24h",
                }),
              });
            }
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json({ err });
          });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err });
    });
};
