// import du module mongoose
const mongoose = require("mongoose");
require("dotenv").config();
const password = process.env.DB_PASSWORD;
const username = process.env.DB_USERNAME;

exports.mongoose = mongoose
  .connect(
    `mongodb+srv://${username}:${password}@cluster0.u9wwa4x.mongodb.net/HotTakes?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

// Export
module.exports = { mongoose };
