var has_downloaded_already=false;
var yname=prompt("what is your name");
var yname = prompt("What is your name?");
const mname = "Levi Haynie";

function showGreeting(name) 
{
    alert("Hello, " + name + ", my name is " + mname + "! Welcome to my portfolio!");
    document.getElementById("work").innerHTML = "Hello, " + name + ", my name is " + mname + "! Welcome to my portfolio!";
}
showGreeting(yname);
/*daysUntilDeadline();
function download_resume(){
    if (!has_downloaded_already) {
        alert("you have successfully downloaded the résumé");
        has_downloaded_already=true;
    }
    var amount_downloaded=[];
    var count=1;
    output.push(count);
    count++;
}*/
var projectname=["Woodworking","CYB-126","CS-212"];
var projectdes=["This is the staff that I'm working on", "This is one of my works from CS-212", "This is my fav work from CYB-126 "]
var projecttime=["11/10/2024","05/20/2023","09/28/2024"]

/*for (let index = 0; index < 3; index++) {
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
    
}*/
const education = [  
    { school: 'Coconino High School/CHS', class: 'JROTC',  date: 'spring 2023' },  
    { school: 'NAU/Northern Arizona University', class: 'CS 212', date: 'fall 2024' },
    { school: 'NAU/Northern Arizona University', class: 'CYB 126', date: 'fall 2024' },
    { school: 'NAU/Northern Arizona University', class: 'CJJ 101', date: 'fall 2024' },
    { school: 'NAU/Northern Arizona University', class: 'PRM 165', date: 'fall 2024' }  
];  
function generateTable(education) {  
    let table = '<table>'; 
    table += '<tr><th>school</th><th>class</th><th>date</th></tr>';  
    education.forEach(item => {  
    table += `<tr><td>${item.school}</td><td>${item.class}</td><td>${item.date}</td></tr>`;  
    });  
    table += '</table>';  
    return table;  
} 
const tableContainer = document.getElementById('experience'); 
tableContainer.innerHTML = generateTable(education); 

var navbar=["Skills","Projects","Aspirations","Education","Résumé"]

/*const $navbar_1=$("#navbar_1");
navbar.forEach(item => {
$navbar_1.append(<li data-section="${item.toLowerCase()}">${item}</li>);
});
    $("#navbar_1 li").on("click", function() {
    const targetSection = $(this).data("section");
    $("html, body").animate({
      scrollTop: $("#" + targetSection).offset().top
    }, 800);
  });
*/
  let skills = ['added_skills']; // Array to store the list of skills

  // Utility function to render the skills list
  function renderSkills() {
    const $skillsList = $("#skillsList");
    $skillsList.empty(); // Clear the list

    skills.forEach((skill, index) => {
      $skillsList.append(`
        <li class="skill-item">
          <span class="skill-name" data-index="${index}">${skill}</span>
          <button class="delete-btn" data-index="${index}">Delete</button>
        </li>
      `);
    });
    }

  // Function to add a skill
  function addSkill(skill) {
    if (!skill) {
      showError("Please enter a skill.");
      return;
    }
    if (skills.includes(skill)) {
      showError("This skill already exists.");
      return;
    }
    skills.push(skill);
    renderSkills();
    $("#newSkillInput").val(""); // Clear the input
  }

  // Function to show an error message
  function showError(message) {
    $("#error").text(message).fadeIn().delay(2000).fadeOut();
  }

  // Add skill event
  $("#addSkillBtn").on("click", function() {
    const newSkill = $("#newSkillInput").val().trim();
    addSkill(newSkill);
  });

  // Click event to edit a skill
  $("#skillsList").on("click", ".skill-name", function() {
    const index = $(this).data("index");
    const newSkill = prompt("Edit Skill:", skills[index]);
    if (newSkill && !skills.includes(newSkill)) {
      skills[index] = newSkill;
      renderSkills();
    } else if (newSkill && skills.includes(newSkill)) {
      showError("This skill already exists.");
    }
  });

  // Click event to delete a skill
  $("#skillsList").on("click", ".delete-btn", function() {
    const index = $(this).data("index");
    skills.splice(index, 1);
    $(this).closest(".skill-item").slideUp(300, function() {
      $(this).remove();
      renderSkills();
    });
  });

  // Render the skills initially
  renderSkills();



  const projects = [
    {
      title: 'woodworking Project',
      description: "This is the wooden stick that I've been working on for years and my final goal for this project is to make it the best it can be, but still keep the original look of a normal stick and make into a magic staff",
      deadline: new Date("11/10/2024"),
      imageURL: 'broken stick project copy 2.jpeg'
    },
    {
      title: 'School Projects CYB 126',
      description: 'This was one of my favorite codes that I worked on in CYB 126. It was challenging, but it was fun to do and it just makes sense to me.',
      deadline: new Date("05/20/2023"),
      imageURL: 'CYB126 favorite work copy 2.png'
    },
    {
      title: 'School Projects CS 212',
      description: 'this one I chose one of my practice assignments in CS 212.',
      deadline: new Date("09/28/2024"),
      imageURL: 'CS 212 practice photo copy 2.png'
    }
  ];

  // Function to render projects
  function renderProjects() {
    const $projectsContainer = $("#projectsContainer");
    $projectsContainer.empty(); // Clear existing projects
    for (let i = 0; i < projects.length; i++) {
         const project = projects[i];
        const projectCard = 
        <div class="project-card">
          <img src="${project.imageURL}" alt="${project.title}">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <p class="project-deadline">Deadline: ${project.deadline.toDateString()}</p>
        </div>
      $projectsContainer.append(projectCard);
    }
}

    
  

  // Render projects initially
  renderProjects();

  // Sort by deadline
  let ascending = true;
  $("#sortBtn").on("click", function() {
    projects.sort((a, b) => ascending ? a.deadline - b.deadline : b.deadline - a.deadline);
    ascending = !ascending; // Toggle sort order
    renderProjects(); // Re-render projects in new order
  });