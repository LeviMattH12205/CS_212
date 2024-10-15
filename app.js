var has_downloaded_already=false;
console.log('Hello World!')
var yname=prompt("what is your name");
const mname="Levi Haynie"
function showGreeting(name){
console.log("Hello,            "+name+" my name is "+mname+"! Welcome to my portfolio!")
document.getElementById("work").innerHTML="Hello,"+name+" my name is "+mname+"! Welcome to my portfolio!"
}
showGreeting(yname)
function daysUntilDeadline(){
    let date1 = new Date();
    let date2 = new Date("12/14/2024");
    let Difference_In_Time =
    date2.getTime() - date1.getTime();
    let Difference_In_Days =
    Math.round
    (Difference_In_Time / (1000 * 3600 * 24));
    console.log
    ("Total number of days between dates:\n" +
        date1.toDateString() + " and " +
        date2.toDateString() +
        " is: " + Difference_In_Days + " days")

}
daysUntilDeadline();
function download_resume(){
    if (!has_downloaded_already) {
        alert("you have successfully downloaded the résumé");
        has_downloaded_already=true;
    } 
}
