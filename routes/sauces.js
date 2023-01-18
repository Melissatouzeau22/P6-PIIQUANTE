// import d'Express
const express = require("express");

// import de router
const router = express.Router();

// import d'auth
const auth = require("../middleware/auth");

// import de multer pour les images
const multer = require("../middleware/multer-config");

// import du controller sauce
const sauceCtrl = require("../controllers/sauceCtrl");

router.use(auth);
// toutes les sauces
router.get("/", sauceCtrl.getAllSauces);

// créer une sauce
router.post("/", multer, sauceCtrl.createSauce);

// avoir une sauce
router.get("/:id", sauceCtrl.getOneSauce);

// modifier une sauce
router.put("/:id", multer, sauceCtrl.modifySauce);

// supprimer une sauce
router.delete("/:id", sauceCtrl.deleteSauce);

// liker ou disliker une sauce
router.post("/:id/like", sauceCtrl.likeOrNot);

// export du module
module.exports = router;
