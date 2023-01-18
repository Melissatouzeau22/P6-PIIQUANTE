// import des routes
const userRoutes = require("./routes/user");
const saucesRoutes = require("./routes/sauces");

// environnements variables
require("dotenv").config();

// import d'Express
const express = require("express");

// import du modele de sauce
const sauce = require("./models/saucesModels");

// Appel d'Express
const app = express();

// middleware global
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// connection à Base de données
require("./mongo");

// import de cors
const cors = require("cors");

app.use(cors());
// middleware JSON
app.use(express.json());

// routes
app.use("/api/auth", userRoutes);
app.use("/api/sauces", saucesRoutes);

// import de Path
const path = require("path");

app.use("/images", express.static(path.join(__dirname, "images")));

// Accès pour server.js
module.exports = app;
