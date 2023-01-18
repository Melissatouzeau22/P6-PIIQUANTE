const passwordValidator = require("password-validator");

// Create a schema
const schema = new passwordValidator();

// Add properties to it
const validator = schema
  .is()
  .min(8) // Minimum length 8
  .is()
  .max(100) // Maximum length 100
  .has()
  .uppercase() // Must have uppercase letters
  .has()
  .lowercase() // Must have lowercase letters
  .has()
  .digits(2) // Must have at least 2 digits
  .has()
  .not()
  .spaces() // Should not have spaces
  .is()
  .not()
  .oneOf(["Passw0rd", "Password123"]); // Blacklist these values

exports.PasswordCheck = (req, res, next) => {
  if (validator.validate(req.body.password)) {
    next();
  } else {
    res.status(400).json({
      message:
        "Merci d'utiliser un mot de passe contenant au minimum 2 chiffres, des majuscules, des minuscules et au minimum 8 caractères.",
    });
  }
};
