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

    // ** ALMOST... but this is not what I want. **
    // changes the class to menu__link styles from CSS
    // Attaches a class to the <li> tags, to become class='menu__link'
    // li.setAttribute('class', 'menu__link');

    // Can set more attributes, such as an id='planets' if I wanted to
    // li.setAttribute('id', 'planets');

    // setting the anchor tag to have a class of 'menu__link'
    anchor.setAttribute('class', 'menu__link');
};

// Add class 'active' to section when near top of viewport
// Add active class to the current button (highlight it)


// Scroll to anchor ID using scrollTO event
// selecting navbar, ul, and anchor elements
const navlinks = document.querySelectorAll(".navbar__menu ul a");

// loop over all links in navbar__menu
for (const navlink of navlinks) {
  navlink.addEventListener("click", onClick);
}

// on clicking the link
function onClick(event) {
  const href = this.getAttribute("href");
  const topPos = document.querySelector(href).offsetTop;
  event.preventDefault();

//   smooth scrolling when anchor link is clicked
  var scrollOptions = {
    top: topPos,
    behavior: "smooth"
  }
 
  window.scrollTo(scrollOptions);
}


// *** NOT WHAT I WANT this to do...
// this scrolls to 800px, when you click on section 1 in the body.
// this doesn't work for clicking on the links in the navbar.
// let to = document.querySelector('section.your-active-class');
// to.addEventListener('click', (ev)=>{
//     document.documentElement.scrollTo(0, 800); //800px up from current position
// });

// maybe this will scroll to anchor? No...
// let toAnchor = document.querySelectorAll(".navbar__menu ul a");
// toAnchor.addEventListener('click', (ev)=>{
//     document.documentElement.scrollTo(0, 1000); //250px up from current position
// });


// calling the function that scrolls to the anchor element

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

/**
 * 
 * check if item is in viewport - START
 */
// helper function
 function isInViewport(section) {
  const rect = section.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      
      // if innerHeight or clientHeight of element &&
      // if innerWidth or clientWidth of element
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// section.your-active-class

// the area that should be active on the page that we want to remove the class from
// const activeArea = document.querySelector('section.your-active-class');
// the current active class name
// curActiveClass = activeArea.classList[0];
// returns the index DOMTokenList of "your-active-class"


// activeArea.classList.remove('your-active-class');
// creates class called inactive - unnecessary but a placeholder
// activeArea.classList.add('inactive');

function activeViewport(section) {
  for(section of sections) { 
    const rect = section.getBoundingClientRect();
    if ((rect.left >= rect.top) && (rect.left <= rect.bottom)){
      section.classList.add("your-active-class");

      // color change to active section - gradient
      section.setAttribute('style', 'background: linear-gradient(to bottom, rgba(0,0,40,0.3), rgba(0,0,0,0)');

      // style for animation: name, duration, # of times
      section.setAttribute('style', 'animation: mymove 1s 1;');
    }
    else {
      section.classList.remove("your-active-class");
      }
    }
  }

document.addEventListener('scroll', activeViewport);

/**
 * 
 * check if item is in viewport - END
 */



/**
 * Begin Additional Content (not required)
 * 
*/

// *** adding back to top image link

// adding div section where it will go - at the end of all the sections
// create div element & attach it to the main section
const backToTop = document.createElement('div');
var mainSection = document.querySelector('main');
mainSection.appendChild(backToTop);
backToTop.setAttribute('id', 'backTop');

// adding an image
// create anchor element
const anchor2 = document.createElement('a');
anchor2.setAttribute('id', 'backToTop');
var anchortwo = document.getElementById('backTop').appendChild(anchor2);

// create image tag to go inside anchor element
const image = document.createElement('img');
image.src  = 'image-js/up-arrow-blue.png';
var lastimage = document.getElementById('backTop').appendChild(image);

// set css styles for image
lastimage.setAttribute('id', 'logo');
lastimage.setAttribute('style', 'height: 100px');

// create paragraph for logo text, and give it an ID to grab it
const logoText = document.createElement('p');
logoText.setAttribute('id', 'logoCaption');
anchortwo.appendChild(logoText);

// grab the new paragraph with ID of logoCaption
// add a string of words for the new paragraph with a TextNode
const logoCap = document.getElementById('logoCaption');
const logoWords = document.createTextNode("Back To Top");
logoCap.appendChild(logoWords);


// attach image to anchor
anchor2.appendChild(image);


// *** scroll to top of page
anchor2.addEventListener("click", forClick);

// on clicking the link
function forClick(event) {
    const anc = this.getAttribute("a");
    const topPos2 = document.querySelector(anc);
    event.preventDefault();

    //   smooth scrolling when anchor link is clicked
    var scrollOptions = {
        top: topPos2,
        behavior: "smooth"
    }
 
  window.scrollTo(scrollOptions);
};
