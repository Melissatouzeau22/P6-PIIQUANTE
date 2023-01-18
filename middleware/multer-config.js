// Import de multer
const multer = require("multer");

const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images");
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(" ").join("_");
    const fileNameWithoutExt = path.parse(name).name;
    const extension = path.extname(name);
    callback(null, `${fileNameWithoutExt}_${Date.now()}${extension}`);
  },
});

// export de multer
module.exports = multer({ storage: storage }).single("image");
