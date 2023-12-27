// Logic behind telling the user whether or not i'm awake
// Might not work and get transferred into user's local time, don't know how to fix that... yet

let currentTime = new Date().toLocaleTimeString('en-US', {
	timeZone: 'America/New_York',
});
let hours = new Date(currentTime).getHours();

let myName = document.getElementById('dynamic_about');

if (hours >= 0 && hours <= 8) {
	myName.textContent = `🌙 Asleep`;
} else {
	myName.textContent = `☀️ Awake`;
}

// Funny card animation that goes booioioioioioing
const wait = (milliseconds) =>
	new Promise((resolve) => setTimeout(resolve, milliseconds));

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry);
		entry.target.classList.toggle(`show`, entry.isIntersecting);
	});
});

const hiddenCards = document.querySelectorAll(`.hidden`);
hiddenCards.forEach((el) => observer.observe(el));
