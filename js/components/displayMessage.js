export default function displayMessage(messageType, message, targElement) {
	console.log("message", message);

	const element = document.querySelector(targElement);

	element.innerHTML = `<div class="message ${messageType}"> ${message} </div>`;
}
