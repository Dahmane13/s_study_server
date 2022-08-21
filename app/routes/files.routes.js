const drive = require("../utils/driveApi");
const router = require("express").Router();

router.get("/files/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id, "suck");
  drive.files.list({ q: `'${id}' in parents` }, (err, res) => {
    if (err) throw err;
    const files = res.data.files;

    console.log(res.data);
  });
});

module.exports = router;
