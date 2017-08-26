let dateWithString = new Date("2018", "0", "10");
let dateWithNumber = new Date(2018, 2 - 1, 10);
let printDate = (date) =>{
    console.log("date : %s", date);
    console.log("year:%s month:%s date:%s", date.getFullYear(), date.getMonth() + 1, date.getDate());
    console.log("hours:%s minutes:%s seconds:%s", date.getHours(), date.getMinutes(), date.getSeconds());
}
printDate(dateWithString);
console.log("---------------------");
printDate(dateWithNumber);