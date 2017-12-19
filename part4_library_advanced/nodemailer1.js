const nodemailer = require('nodemailer');
// const smtpTransport = require('nodemailer-smtp-transport');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    // user: '지메일아이디@gmail.com',
    // pass: '비밀번호'
    user: 'stophyuni@gmail.com',
    pass: 'gosdkdi1',
  },
});

// setup email data with unicode symbols
const mailOptions = {
  // from: '지메일아이디@gmail.com', // sender address
  from: 'stophyuni@gmail.com', // sender address
  to: 'stophyuni@gmail.com', // list of receivers
  subject: 'Hello ✔', // Subject line
  text: 'Hello world?', // plain text body
  // html: '<b>Hello world?</b>', // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Message sent: ${info.response}`);
  }
  transporter.close();
});

