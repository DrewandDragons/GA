// Try and manipulate the page
// Easiest

// 1) Get the title for each dog/cat services, and put them into the console using console.log

// let titleOne = document.querySelector(".rover-fact-indiv-1 h3").innerText;
// console.log(titleOne);
// let titleTwo = document.querySelector(".rover-fact-indiv-2 h3").innerText;
// console.log(titleTwo);
// let titleThree = document.querySelector(".rover-fact-indiv-3 h3").innerText;
// console.log(titleThree);
// let titleFour = document.querySelector(".rover-fact-indiv-4 h3").innerText;
// console.log(titleFour);
// let titleFive = document.querySelector(".rover-fact-indiv-5 h3").innerText;
// console.log(titleFive);

// There's a quicker way of doing this with loops & querySelectorAll - stay tuned!

// 2) Change the title of the page to "We're the CAT People"

// document.querySelector("h1").innerText = "We're the CAT people";

// 3) Change the main image to be something cat related.

// random cat image I found on the internet
// let catImageUrl = "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba";
// let el = document.querySelector(".rover-hero-container");
// el.style.backgroundImage = `url(${catImageUrl})`;

// Harder

// 1) Replace the call to action button background color with "red"
// const roverCta = document.querySelector(".rover-cta-container .rover-cta");
// roverCta.style.backgroundColor = "red";

// 2) Find another image and replace the header (try unsplash.com, get familiar with searching for images)

// 3) When someone clicks the "Book your next Rover sitter" button, change the text of the button to say "Thanks"
// roverCta.addEventListener("click", changeCtaText);
//
// function changeCtaText() {
//   roverCta.innerText = "Thanks"
// }

// Hardest (only if you get the others first)
// 1) Make the responsive menu work!
// 2) Implement a modal window - "Sign up now" CTA when someone clicks the 'Sign Up' button
