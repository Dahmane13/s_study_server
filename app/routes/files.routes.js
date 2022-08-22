const drive = require("../utils/driveApi");
const router = require("express").Router();

router.get("/files/:id", async (req, res) => {
  const { id } = req.params;
  drive.files.list({ q: `'${id}' in parents` }, (err, response) => {
    if (err) throw err;
    // console.log(response.data);
    const { files } = response.data;
    res.json(files);
  });
});

module.exports = router;
