const getYymmdd = (date) => {
  const yyyy = date.getFullYear();
  const mm = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : (date.getMonth() + 1);
  const dd = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  return `${yyyy}-${mm}-${dd}`;
};

const yyyymmdd = getYymmdd(new Date());
const yyyymmdd170909 = getYymmdd(new Date(2017, 9 - 1, 9));
console.log('yyyymmdd:', yyyymmdd);
console.log('yyyymmdd170909:', yyyymmdd170909);
