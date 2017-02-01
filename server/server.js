const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

const app = express();

const SMTPServer = {
  port: 465,
  host: 'smtp.gmail.com',
  auth: {
    user: 'akozenko.work@gmail.com',
    pass: 'qwerty654321',
  },
};

const transporter = nodemailer.createTransport(smtpTransport(SMTPServer));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send', (req, res) => {
  console.log(req.body);

  transporter.sendMail({
    from: `Klumba <${SMTPServer.auth.user}>`,
    to: 'akozenko.work@gmail.com',
    subject: 'Request from site',
    text: req.body.message,
  },

  (error, info) => {
    if (error) console.log(error);
    console.log('Message sent: ', info.response);
  });

  res.send('ok');
});

app.listen(3000);
