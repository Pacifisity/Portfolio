const currentTime = new Date().toLocaleTimeString('en-US', {
	timeZone: 'America/New_York',
});
const hours = new Date(currentTime).getHours();

console.log(currentTime);

const myName = document.getElementById('dynamic_about');

if (hours >= 0 && hours <= 8) {
	myName.textContent = `🌙 Asleep`;
} else {
	myName.textContent = `☀️ Awake`;
}

// Might not work and get transferred into user's local time, don't know how to fix that... yet
