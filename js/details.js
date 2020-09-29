import { BASE_URL } from "./settings/api.js";
import displayMessage from "./components/displayMessage.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
	document.location.href = "404.html";
}

const productUrl = `${BASE_URL}/consoles/${id}`;

(async function () {
	try {
		const container = document.querySelector(".details-container");
		const response = await fetch(productUrl);
		const details = await response.json();
		let handheld = console.is_handheld;

		if (handheld === false) {
			handheld = "This console was not handheld";
		} else {
			handheld = "This console was handheld";
		}

		container.innerHTML = `
        <h2>${details.name}</h2> 
        <p>First released: ${details.launch_year}</p>
        <div class="details-image">
            <img src="${details.url}">
        </div>
        <p>${handheld}</p>
        `;
	} catch (error) {
		displayMessage("error", error, ".details-container");
	}
})();
