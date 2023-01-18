const uniqueValidator = require("mongoose-unique-validator");
const { mongoose } = require("../mongo");
// Création du schéma utilisateur
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
userSchema.plugin(uniqueValidator);

const User = mongoose.model("user", userSchema);

// Export
module.exports = { User };
