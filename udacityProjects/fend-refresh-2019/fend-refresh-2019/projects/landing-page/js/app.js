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

// Creating a variable contains all available sections in template
var lpSections = document.querySelectorAll('.section');

//Creating a variable contains the navbar list
var navbarList = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */

// Adding list items to navbar list
function addToNavbarList() {

	for (section of lpSections) {
		/*--- For each section we'll do the following methods ----*/

		// To determine the clickable name
		let sectionTitle = section.getAttribute('data-nav');

		// To determine the link of each item as you said that "Each Section has an ID (used for the anchor)"
		let sectionLink = section.getAttribute('id');

		// Create listItem <li></li> for each section
		let listItem = document.createElement('li');

		// Creating anchor tags for each section in navbar
		listItem.innerHTML = `<a class="menu__link">${sectionTitle}</a>`;

		// Appending each list item to the navbarList
		navbarList.appendChild(listItem);
	}

	// Navigating to each section
	var anchors = document.querySelectorAll('a');

	anchors[0].addEventListener('click', function (e) {
		// e.preventDeafault();
		console.log(anchors[0].innerText);
		document.getElementById('section1').scrollIntoView();
	});

	anchors[1].addEventListener('click', function (e) {
		// e.preventDeafault();
		console.log(anchors[1].innerText);
		document.getElementById('section2').scrollIntoView();
	});

	anchors[2].addEventListener('click', function (e) {
		// e.preventDeafault();

		console.log(anchors[2].innerText);
		document.getElementById('section3').scrollIntoView();
	});

	anchors[3].addEventListener('click', function (e) {
		// e.preventDeafault();
		console.log(anchors[3].innerText);
		document.getElementById('section4').scrollIntoView();
	});

	anchors[4].addEventListener('click', function (e) {
		// e.preventDeafault();
		console.log(anchors[4].innerText);
		document.getElementById('section5').scrollIntoView();
	});

	anchors[5].addEventListener('click', function (e) {
		// e.preventDeafault();
		console.log(anchors[5].innerText);
		document.getElementById('section6').scrollIntoView();
	});
}

// Is my section in my viewport or not?
var isInViewport = function (elem) {
	var distance = elem.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.left >= 0 &&
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		distance.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};

// Adding "your-active-class" to each item while scrolling event
window.addEventListener('scroll', function () {

	lpSections.forEach(element => {
		//for each .thisisatest
		if (isInViewport(element)) {
			//if in Viewport
			if (!element.classList.contains("your-active-class")) {
				element.classList.add("your-active-class");
			}
		} else {
			element.classList.remove("your-active-class");
		}
	});
}, false);


// build the nav
addToNavbarList();