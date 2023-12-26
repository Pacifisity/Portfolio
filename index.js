const date = new Date();
const hours = date.getHours();

console.log(date);

const dynamicAboutSection = document.getElementById('dynamic_about');

if (hours >= 0 && hours <= 8) {
	dynamicAboutSection.textContent = `🌙 Asleep`;
} else {
	dynamicAboutSection.textContent = `☀️ Awake`;
}

// Might not work and get transferred into user's local time, don't know how to fix that... yet
