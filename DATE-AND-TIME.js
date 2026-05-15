//1st Style: New Date(): return current Date and time //

// var a = new Date()
// console.log(a)
// console.log(a.toString())
// console.log(a.toDateString())
// console.log(a.toTimeString())
// console.log(a.toLocaleDateString())
// console.log(a.toLocaleTimeString())

//2nd Style: New Date(year,mont,day,hour,minute,seconds,miliseconds)->single argument => treat as miliseconds

// console.log(new Date(2027,7,12,15,30,30,5000).toLocaleString())
// console.log(new Date(2027,7,12,15,30,30).toLocaleString())
// console.log(new Date(2027,7,12,15).toLocaleString())
// console.log(new Date(2027,7,12).toLocaleString())
// console.log(new Date(2027,7).toLocaleString())
// console.log(new Date(2027).toLocaleString())

//3rd Style: New Date(miliseconds)
// console.log(new Date(2323232323232).toLocaleString())

//4th style: New Date(Date string) 

// console.log(new Date("2027/04/03").toLocaleString())
// console.log(new Date("2027/04/03 15:30:30").toLocaleString())

//---to get date and time---//

// var a = new Date(2026,3,5,13,30,30)
// console.log(a.getFullYear());
// console.log(a.getMonth());
// console.log(a.getDate());
// console.log(a.getHours());
// console.log(a.getMinutes());
// console.log(a.getSeconds());
// // console.log(a.getmiliseconds());
// console.log(a.getUTCDate());

// console.log(a.getTime());    //milliSeconds since 1 Jan 1970 //
// console.log(a.getDay());    //weekdat //
// console.log(Date.now());    //milliSeconds since 1 Jan 1970 //
