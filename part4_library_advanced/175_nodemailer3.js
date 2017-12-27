const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: '지메일아이디@gmail.com',
    pass: '비밀번호',
  },
});

// setup email data with unicode symbols
const mailOptions = {

  from: '지메일아이디@gmail.com', // sender address
  to: '지메일아이디@gmail.com', // list of receivers
  subject: 'Hello attachment', // Subject line
  // text: 'Hello world?', // plain text body

  // html body
  html: '<h1>Hello Attachment</h1><a href="http://www.infopub.co.kr">' +
    '<img src="http://www.infopub.co.kr/pdspool/common/main_top/2016-11-02.jpg"/></p></a>',

  // attachment configuration
  attachments: [
    {
      filename: 'attachment_test.xlsx',
      path: 'attachment_test.xlsx',
    },
  ],
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Message sent: ${info.response}`);
    console.log(mailOptions.attachments);
  }
  transporter.close();
});
