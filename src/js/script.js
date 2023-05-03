
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
        "../files/images/scrap.jpg",
        "../files/images/kmSS.png"
    ]

    const projLinks = 
    [
        "https://nicobutterfield.github.io/Scheduling-App/src/public/html/login.html",
        "https://nicobutterfield.github.io/HtmlCSSJavascipt/",
        "https://nicobutterfield.github.io/Scrapbook/",
        "https://nicobutterfield.github.io/DataViz-MovieGraph/kmeansGraph/index.html",
    ]

    const descriptions = 
    [
        "A web appliction that uses both front end and backend technologies to display and store the schedules of multiple users. Users can sign-up, login and view their own person list of schedule items that have been stored in a backend database using MySQL.",
        "A responsive website that displays basic information describing HTML, CSS and Javascript.",
       "A website that uses html, css and javascript to display and flip through photos.",
       "An interactive, force directed graph that draws edges between movie nodes based on their shared actors and uses a k-means algorithm to create different colored, distance based groups, making the graph easily readable to viewers.",

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
        document.getElementById("project3").classList.remove("active-nav-link");

        document.getElementById("project0").style.opacity = 1;
        document.getElementById("project1").style.opacity = 0.3;
        document.getElementById("project2").style.opacity = 0.3;
        document.getElementById("project3").style.opacity = 0.3;
    }

    if(num === 1)
    {
        document.getElementById("project0").classList.remove("active-nav-link");
        document.getElementById("project1").classList.add("active-nav-link");
        document.getElementById("project2").classList.remove("active-nav-link");
        document.getElementById("project3").classList.remove("active-nav-link");
    
        document.getElementById("project0").style.opacity = 0.3;
        document.getElementById("project1").style.opacity = 1;
        document.getElementById("project2").style.opacity = 0.3;
        document.getElementById("project3").style.opacity = 0.3;
    }

    if(num === 2)
    {
        
        document.getElementById("project0").classList.remove("active-nav-link");
        document.getElementById("project1").classList.remove("active-nav-link");
        document.getElementById("project2").classList.add("active-nav-link");
        document.getElementById("project3").classList.remove("active-nav-link");
        
        document.getElementById("project0").style.opacity = 0.3;
        document.getElementById("project1").style.opacity = 0.3;
        document.getElementById("project2").style.opacity = 1;
        document.getElementById("project3").style.opacity = 0.3;
    }


    if(num === 3)
    {
        document.getElementById("project0").classList.remove("active-nav-link");
        document.getElementById("project1").classList.remove("active-nav-link");
        document.getElementById("project2").classList.remove("active-nav-link");
        document.getElementById("project3").classList.add("active-nav-link");
       
        document.getElementById("project0").style.opacity = 0.3;
        document.getElementById("project1").style.opacity = 0.3;
        document.getElementById("project2").style.opacity = 0.3;
        document.getElementById("project3").style.opacity = 1;
    }
    

}
