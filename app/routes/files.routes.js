const drive = require("../utils/driveApi");
const router = require("express").Router();

router.get("/files/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id, "suck");
  drive.files.list({ fields: `files(${id})` }, (err, res) => {
    if (err) throw err;
    const files = res.data.files;
    if (files.length) {
      files.map((file) => {
        console.log(file);
      });
    } else {
      console.log("No files found");
    }
  });
});

module.exports = router;
