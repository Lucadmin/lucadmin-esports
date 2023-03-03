// handler for contact-us form submissions
// Sends mail to hello@lucadmin.de with nodemailer
export default function handler(req, res) {
  // check if request is POST
  if (req.method !== "POST") {
    res.status(400).json({ error: "Invalid request method" });
    return;
  }

  const nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    host: "mxe83f.netcup.net",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `${req.body.name} <${req.body.mail}>`,
    to: "hello@lucadmin.de",
    subject: "Lucadmin contact form submission from " + req.body.name,
    text: req.body.message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).json({ error: error });
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).json({ message: "Email sent" });
    }
  });
}
