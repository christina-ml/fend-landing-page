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
const nav = document.getElementById('navbar__list');
const section = document.querySelectorAll('section');

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

    // add a unique ID to each li when building the navbar
    // which represents the section id that's related to
    // and should match to what it been added in 'href' attribute:
    li.setAttribute('id', "li-section" + (i + 1));

    // creating class for li element - activeNav & adding it to the navbar
    li.setAttribute('class', 'none');
    li.appendChild(anchor);
    nav.appendChild(li);

    // loops through all sections 'i' and sets the href attribute to each
    // this jumps to each section on the page. It adds the #section (that goes through the loop each time), and starts at 1 instead of 0.
    anchor.setAttribute("href", section[i].innerHTML);
    anchor.href="#section" + (i + 1);
    anchor.textContent = section[i].dataset.nav;

    // setting the anchor tag to have a class of 'menu__link'
    anchor.setAttribute('class', 'menu__link');
};

// change section 1's li class in the navbar
// now there's your-active-class on the first one, and all others say activeNav
const changeLiClass = document.getElementById('li-section1');
changeLiClass.classList.add('your-active-class');
changeLiClass.classList.remove('activeNav');

/**
 * Scroll to anchor ID using scrollTO event
 * Add class 'active' to section when near top of viewport
 * Add active class to the current button (highlight it)
 * 
 */

// selecting navbar, ul, and anchor elements
const navlinks = document.querySelectorAll(".navbar__menu ul a");

// loop over all links in navbar__menu
for (const navlink of navlinks) {
  navlink.addEventListener("click", onClick);
}

// on clicking the link
function onClick(event) {
  event.preventDefault();
  const href = this.getAttribute("href");
  const topPos = document.querySelector(href).offsetTop;
  

  // In onClick function, get the previously clicked navbar item to remove the active class from it
  const previousLi = document.querySelector('.activeNav');

  // check if there is an active element, if so, then remove the class
  previousLi && previousLi.classList.remove("activeNav");

  // select the li item that matches the clicked link and set its class to active
  const sectionID = href.slice(href.indexOf("n") + 1);
  const clickedLi = document.querySelector("#li-section" + sectionID);
  clickedLi.setAttribute("class", "activeNav");

//   smooth scrolling when anchor link is clicked
  let scrollOptions = {
    top: topPos,
    behavior: "smooth"
  }
  
 
  window.scrollTo(scrollOptions);
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

/**
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

// the area that should be active on the page that we want to remove the class from
// color change to active section - gradient (active class is styled using CSS)
function activeViewport(section) {
  for(section of sections) { 
    const rect = section.getBoundingClientRect();
    if ((rect.left >= rect.top) && (rect.left <= rect.bottom)){
      section.classList.add("your-active-class");

      const previousLi = document.querySelector('.activeNav');
      // check if there is an active element, if so, then remove the class
      previousLi && previousLi.classList.remove("activeNav");

      // get the related navbar item using section id and add the active class to it
      const clickedLi = document.querySelector("#li-" + section.id);
      clickedLi.setAttribute("class", "activeNav");
    
      // style for animation: name, duration, # of times
      section.setAttribute('style', 'animation: mymove 1s 1;');
    }
    else {
      section.classList.remove("your-active-class");
      }
    }
  }

// calling the function that scrolls to the anchor element for section
document.addEventListener('scroll', activeViewport);

/**
 * 
 * check if item is in viewport - END
 * 
 * Begin Additional Content (not required)
 * Adding back to top image link
 * 
*/

// adding div section where it will go - at the end of all the sections
// create div element & attach it to the main section
const backToTop = document.createElement('div');
const mainSection = document.querySelector('main');
mainSection.appendChild(backToTop);
backToTop.setAttribute('id', 'backTop');

// adding an image
// create anchor element
const anchor2 = document.createElement('a');
anchor2.setAttribute('id', 'backToTop');
const anchortwo = document.getElementById('backTop').appendChild(anchor2);

// create image tag to go inside anchor element
const image = document.createElement('img');
image.src  = 'image-js/up-arrow-blue.png';
const lastimage = document.getElementById('backTop').appendChild(image);

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


/**
 * Scroll to top of page - for the back to top image link
 * 
*/

anchor2.addEventListener("click", forClick);

// on clicking the link
function forClick(event) {
    const anc = this.getAttribute("a");
    const topPos2 = document.querySelector(anc);
    event.preventDefault();

    //   smooth scrolling when anchor link is clicked
    let scrollOptions = {
        top: topPos2,
        behavior: "smooth"
    }
 
  window.scrollTo(scrollOptions);
};
