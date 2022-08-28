const drive = require("../utils/driveApi");
const router = require("express").Router();

router.get("/files/:id", async (req, res) => {
  const { id } = req.params;

  if (typeof id === "undefined" || !id || id === null) {
    res.send("Invalid Id !");
  } else {
    drive.files.list({ q: `'${id}' in parents` }, (err, response) => {
      if (err) throw err;
      // console.log(response.data);
      const { files } = response.data;
      res.json(files);
    });
  }
});

// GET /query/:filename
// Search for specific files or folders on the current user's My Drive BY NAME
//  return reponse example
// [
//   {
//     id: "18WaQUGVwpWbuUPR37whI1mi9qtLja1nP",
//     name: "TPs",
//     parents: ["1NjP4tBvyoBwELikKoH4d0R-Ii1oSpGHt"],
//   },
//   {
//     id: "1Ddyg5B7B05LokLb7hS5-xy0W4hAcSE5o",
//     name: "TPs",
//     parents: ["1ELbCUOd5nmucAcmkz7HeXfj8jMux2kRy"],
//   },
// ]

router.get("/query/:filename", async (req, res) => {
  const { filename } = req.params;

  if (typeof filename === "undefined" || !filename || filename === null) {
    res.send("Invalid name !");
  } else {
    drive.files.list(
      {
        q: `fullText contains '${filename}'`,
        fields: "files(id,name,parents)",
      },
      (err, response) => {
        if (err) throw err;
        // console.log(response.data);
        const { files } = response.data;

        console.log(`name contains '${filename}'`, files);
        res.json(files);
      }
    );
  }
});

module.exports = router;
