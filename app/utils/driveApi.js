const { google } = require("googleapis");
const credentials = require("../../credentials.json");
const scopes = ["https://www.googleapis.com/auth/drive"];
const auth = new google.auth.JWT(
  credentials.client_email,
  null,
  credentials.private_key,
  scopes
);

module.exports = drive = google.drive({ version: "v3", auth });
// export  default  drive = google.drive({ version: "v3", auth });

// drive.files.list({}, (err, res) => {
//   if (err) throw err;
//   const files = res.data.files;
//   if (files.length) {
//   files.map((file) => {
//     console.log(file);
//   });
//   } else {
//     console.log('No files found');
//   }
// });
