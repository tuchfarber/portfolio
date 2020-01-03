function lightbox(item, show){
    var width = window.innerWidth || window.document.documentElement.clientWidth || window.document.body.clientWidth;
    if(width > 1000){
        var lightbox = document.getElementById("lightbox");
        var lightbox_img = document.getElementById("lightbox_img");
        if(show){
            lightbox.style.display = "flex";
            lightbox_img.src = item.src;
        }else{
            lightbox.style.display = "none";
            lightbox_img.src = "";
        }
    }
}

const DEGREES = [
    {name: "B.S. Computer Science", university: "University of Cincinnati", graduation: "Apr 2017"}
]

const JOBS = [
    {title: "Senior Software Engineer", company: "edX", start: "Jul 2019", end: "Present"},
    {title: "Software Engineer", company: "edX", start: "Jun 2017", end: "Jul 2019"},
    {title: "Web Applications Developer", company: "General Cable Corp.", start: "Jan 2016", end: "Jun 2017"},
]

const PROJECTS = [
    {title: "Veto it", description: "Web app that helps you collaboratively pick a restaurant. It pulls a list of nearby restaurants which you can share and veto places from.", repo: "https://gitlab.com/tuchfarber/veto-it"},
    {title: "Catan Board Finder", description: "Tool to generate Catan board based on desired board balance.", repo: "https://github.com/tuchfarber/catan-board-finder"},
]

const renderEducation = (degrees) => {
    document.getElementById("education").innerHTML = (
        `
          <h3>Education</h3>
          ${degrees.map(degree=>(
            `
            <p>
                <b>${degree.name}</b><br>
                <i>${degree.university}</i><br>
              Graduation: ${degree.graduation}
            </p>
            `
          )).join("")}
        `
    )
}

const renderExperience = (jobs) => {
    document.getElementById("experience").innerHTML = (
        `
          <h3>Experience</h3>
          ${jobs.map(job=>(
            `
            <p>
                <b>${job.title}</b><br>
                <i>${job.company}</i><br>
                ${job.start} - ${job.end}
            </p>
            `
          )).join("")}
        `
    )
}

const renderProjects = (projects) => {
    document.getElementById("projects").innerHTML = (
        `
          <h3>Personal Projects</h3>
          ${projects.map(project=>(
            `
            <div class="project">
                <a class="project-repo" href="${project.repo}">
                    <div class="project-title">${project.title}</div>
                </a>
                <div class="project-description">${project.description}</div>
            </div>
            `
          )).join("")}
        `
    )}

const renderAll = () => {
    renderEducation(DEGREES);
    renderExperience(JOBS);
    renderProjects(PROJECTS);
}

renderAll()