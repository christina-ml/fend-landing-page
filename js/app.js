/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
var nav = document.getElementById('navbar__list');
var section = document.querySelectorAll('section');
// var dataNav = document.querySelectorAll('[data-nav]');
// const sectionID = section.id;



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// gets sections from array.from() method
sections=Array.from(document.getElementsByTagName("section"));

// space items evenly in navbar:
nav.style.textAlign = "center";
nav.style.display = "flex";
nav.style.justifyContent = "space-evenly";

// *** don't need: this is more limiting - you get stuck in a "grid" rather than letting the navbar grow
// nav.style.display = "grid";
// nav.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
// nav.style.gridTemplateRows = "1fr";

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
// loops through the sections that exist on the page
for(i=0; i<sections.length; i++) {
    let li = document.createElement('li');
    let anchor = document.createElement('a');
    li.appendChild(anchor);
    nav.appendChild(li);

    // loops through all sections 'i' and sets the href attribute to each
    // this jumps to each section on the page. It adds the #section (that goes through the loop each time), and starts at 1 instead of 0.
    anchor.setAttribute("href", section[i].innerHTML);
    anchor.href="#section" + (i + 1);
    
    // letter i is being used to loop over all the sections:
    // anchor.textContent = section[i].id;
    // anchor.textContent = section[i].id.slice(0, 7).concat(' ', [i + 1]);
    // var dataNav = section[i].dataset.nav;
    // anchor.textContent = dataNav;
    anchor.textContent = section[i].dataset.nav;
};

// **************** working on this section 4-20-2021 **********************************
// Add class 'active' to section when near top of viewport
// function toggleActive() {
//     const activeClass = 'your-active-class';
//     console.log(activeClass);
// }


// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
// window.addEventListener('scroll', toggleActive);

