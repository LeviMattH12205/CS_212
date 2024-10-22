var has_downloaded_already=false;
console.log('Hello World!')
var yname=prompt("what is your name");
const mname="Levi Haynie"
function showGreeting(name){
console.log("Hello, "+name+" my name is "+mname+"! Welcome to my portfolio!")
document.getElementById("work").innerHTML="Hello, "+name+" my name is "+mname+"! Welcome to my portfolio!"
}
showGreeting(yname)
daysUntilDeadline();
function download_resume(){
    if (!has_downloaded_already) {
        alert("you have successfully downloaded the résumé");
        has_downloaded_already=true;
    }
    var amount_downloaded=[];
    var count=1;
    output.push(count);
    count++;
}
var projectname=["Woodworking","CYB-126","CS-212"];
var projectdes=["This is the staff that I'm working on", "This is one of my works from CS-212", "This is my fav work from CYB-126 "]
var projecttime=["11/10/2024","05/20/2023","09/28/2024"]

for (let index = 0; index < 3; index++) {
    const title = projectname[index];
    const description = projectdes[index];
    const deadline = projecttime[index];
    const date1 = new Date(deadline);
    const date2 = new Date('2024-10-21');
    if (index==0) {
        document.getElementById('project1_title').innerHTML = title;
        document.getElementById('project1_description').innerHTML = description;
        document.getElementById('project1_timeline').innerHTML = deadline;
    }
    if (index==1) {
        document.getElementById('project2_title').innerHTML = title;
        ocument.getElementById('project2_description').innerHTML = description;
        ocument.getElementById('project2_timeline').innerHTML = deadline;
    }
    if (index==2) {
        document.getElementById('project3_title').innerHTML = title;
        document.getElementById('project3_description').innerHTML = description;
        document.getElementById('project3_timeline').innerHTML = deadline;
    }  
    if (date1.getTime() < date2.getTime()) {
        if (index==0) {
            document.getElementById('woodworking_projects').innerHTML = "ongoing";
        }
        if (index==1) {
            document.getElementById('School_projects').innerHTML = "ongoing";
        }
        if (index==2) {
            document.getElementById('School_projects_1').innerHTML = "ongoing";
        } 
    }  else {
        if (index==0) {
            document.getElementById('woodworking_projects').innerHTML = "completed";
        }
        if (index==1) {
            document.getElementById('School_projects').innerHTML = "completed";
        }
        if (index==2) {
            document.getElementById('School_projects_1').innerHTML = "completed";
        }  
    }
    
}
const education = [  
    { school: 'Coconino High School/CHS', class: 'JROTC',  date: 'spring 2023' },  
    { school: 'NAU/Northern Arizona University', class: 'CS 212', date: 'fall 2024' },
    { school: 'NAU/Northern Arizona University', class: 'CYB 126', date: 'fall 2024' },
    { school: 'NAU/Northern Arizona University', class: 'CJJ 101', date: 'fall 2024' },
    { school: 'NAU/Northern Arizona University', class: 'future of AI', date: 'fall 2024' }  
];  
function generateTable(education) {  
    let table = '<table>'; 
    table += '<tr><th>school</th><th>class</th><th>date</th></tr>';  
    data.forEach(item => {  
    table += `<tr><td>${item.school}</td><td>${item.class}</td><td>${item.date}</td></tr>`;  
    });  
    table += '</table>';  
    return table;  
} 
const tableContainer = document.getElementById('experience'); 
tableContainer.innerHTML = generateTable(education); 
