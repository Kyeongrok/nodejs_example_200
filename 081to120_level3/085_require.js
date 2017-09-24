/*
 npm install --save moment
 */
const moment = require('moment');

const today = new Date();
const momentToday = moment(today);

console.log(momentToday.format('YYYY-MM-DD'));

