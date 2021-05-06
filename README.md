# Landing Page Project

## Table of Contents

* [About](#about)
    - [Content Theme](#content-theme)
* [How to View](#how-to-view)
* [Instructions](#instructions)
* [Interface and Architecture](#interface-and-architecture)
    - [Architecture](#architecture)
    - [Usability](#usability)
    - [Styling](#styling)
    - [HTML Structure](#html-structure)
* [Landing Page Behavior](#landing-page-behavior)
    - [Navigation](#navigation)
    - [Section Active State](#section-active-state)
        - [Main Sections - Active](#main-sections-active)
        - [Navbar - Active](#navbar-active)
    - [Scroll to Anchor](#scroll-to-anchor)
* [Additional Content (not required)](#additional-content-not-required)
    - [Back to Top](#back-to-top)

## About

Dynamic Landing Page for Marketing Content.
In this project, you will build a multi-section landing page. Often times, you won't know how much content will be added to a page through a Content Management System (CSM) or an API. To handle this problem, you will dynamically add content to a web page. You'll be building a landing page that combines your skills with JavaScript, HTML, and CSS to update and control the page and create a dynamic user experience.

### Content Theme

For this Landing Page, I chose to build a site based on a sneaker boutique I created myself, called Sneakocity. The theme is Outdoors & City Living, where the ideal customer would be interested in the latest trends and hype culture and live in an urban setting such as SoHo, NYC. This was part of my Sneaker Essentials course work, and these are original ideas and concepts. #SneakerSchoolWork is the social media hashtag. I also mention [SneakerCon](https://sneakercon.com/), which is the largest Sneaker convention where you can attend to buy, sell, and trade the most sought-after sneakers.

## How to View

This Landing Page can be viewed in your browser by clicking here: [Landing Page](https://christina-ml.github.io/fend-landing-page/)

## Instructions

I started off using Udacity's starter code, which has some HTML and CSS styling to display a static version of the Landing Page project. I converted this project from a static project to an interactive one. This required modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, I opened `js/app.js` and started building out the app's functionality.

For specific, detailed instructions, I looked at the project instructions in the Udacity Classroom.

# Interface and Architecture

## Architecture

This project has this structure:
css
* css
    * styles.css  
    -- images
    * image-js
* index.html
* js
    * app.js
* README.md

## Usability

Make all features usable across modern desktop, tablet, and phone browsers.

## Styling

Styling has been added for active states.

There is a slight color change to the background of each active section while scrolling.

## HTML Structure

There are at least 4 sections that have been added to the page. Added Section 4. Also added a few images.

# Landing Page Behavior

## Navigation

Navigation is built dynamically as an unordered list.

## Section Active State

### Main Sections - Active

Make it clear which section is being viewed while scrolling through the page. This is done by the slight color change to the background, and also a CSS animation to move the section left/right while scrolling.

### Navbar - Active

First, I was able to loop through the main sections with an 'active' state. Then I needed to find a way to do the same to the items in the navbar while scrolling, to keep track of where the user is. This was difficult to figure out.

How I did it:

I figured out that the class name has to be added/removed in order to indicate whether or not it's 'active'. As you scroll through the page, each section visible in the viewport will have a class, which will be available only when you are viewing that section. So what happens is the 'active' class appears while you're scrolling to it, and then disappears when you move to the next section. This is done using a loop in JavaScript.

I needed to add an 'active' class to the first navbar item. Otherwise the code was highlighting the 1st, 2nd, 3rd, and 4th in order. And then staying stuck/not removing the class.

I set the class to all sections as 'none' as a placeholder, and then added a class of 'your-active-class' to the first item.

Then I switched out the 'your-active-class' to loop through while scrolling and become 'activeNav'.

Then changed the CSS to have it be a different color while scrolling.


## Scroll to Anchor

Make it so when clicking an item from the navigation menu, the link scrolls to the appropriate section.

# Additional Content (not required)

Added a back to top image link at the end of all the sections. When you click it, the page scrolls back to the top.

Added a CSS animation to shift the active section to the left/right

## Back to Top

Added a back to top image link using JavaScript. Created anchor element, created image tag to go inside anchor element, set css styles for image, attached image to anchor. Then added an Event Listener to scroll to top of page, when clicking on the link which is the image at the bottom of section 4. Smooth scrolling when anchor link is clicked.
