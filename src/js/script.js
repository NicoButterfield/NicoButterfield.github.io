
myGet(0);

function myGet(num)
{
    const projNames = 
    [
        "Click here to view."
    ]

    const projImgs = 
    [
        "../files/images/todos.jpg", 
        "../files/images/webDev3.jpg",
        "../files/images/scrap.jpg"
    ]

    const projLinks = 
    [
        "https://nicobutterfield.github.io/Scheduling-App/src/public/html/login.html",
        "https://nicobutterfield.github.io/HtmlCSSJavascipt/",
        "https://nicobutterfield.github.io/Scrapbook/",
    ]

    const descriptions = 
    [
        "A web appliction that uses both front end and backend technologies to display and store the schedules of multiple users. Users can sign-up, login and view their own person list of schedule items that have been stored in a backend database using MySQL.",
        "A responsive website that displays basic information describing HTML, CSS and Javascript.",
       "A website that uses html, css and javascript to displaying and flip through photos.",

    ]

    const header = document.getElementById("project-header");
    const image = document.getElementById("project-image");
    const description = document.getElementById("project-description");
    const link = document.getElementById("project-link");


    image.setAttribute("src", projImgs[num]); 
    description.innerText = descriptions[num];
    link.setAttribute("href", projLinks[num]);
    link.innerText = projNames[0];


    if(num === 0)
    {
        document.getElementById("project0").classList.add("active-nav-link");
        document.getElementById("project1").classList.remove("active-nav-link");
        document.getElementById("project2").classList.remove("active-nav-link");
        
        document.getElementById("project0").style.opacity = 1;
        document.getElementById("project1").style.opacity = 0.3;
        document.getElementById("project2").style.opacity = 0.3;
    }

    if(num === 1)
    {
        document.getElementById("project1").classList.add("active-nav-link");
        document.getElementById("project0").classList.remove("active-nav-link");
        document.getElementById("project2").classList.remove("active-nav-link");
        
        document.getElementById("project1").style.opacity = 1;
        document.getElementById("project0").style.opacity = 0.3;
        document.getElementById("project2").style.opacity = 0.3;
    }

    if(num === 2)
    {
        document.getElementById("project2").classList.add("active-nav-link");
        document.getElementById("project0").classList.remove("active-nav-link");
        document.getElementById("project1").classList.remove("active-nav-link");
       
        document.getElementById("project2").style.opacity = 1;
        document.getElementById("project0").style.opacity = 0.3;
        document.getElementById("project1").style.opacity = 0.3;
    }

}
