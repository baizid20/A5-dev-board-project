
// Date function
const weekName = ['Sun','Mon','Tues','Wed','Thu','Fri','Sat']

const week =weekName[new Date().getDay()] 
document.getElementById('weak').innerText = week
newdate = new Date ();
const date = newdate.getDate();
const monthName = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"," Oct","Nov","Dec"];

let month = monthName[newdate.getMonth()]
const year = newdate.getFullYear()
const today = month + ' ' + date +' '+ year ;

document.getElementById('localdate').innerText = today;