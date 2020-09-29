import { BASE_URL } from "./settings/api.js";
import displayMessage from "./components/displayMessage.js";

(async function () {
	const container = document.querySelector(".console-container");
	const consoleUrl = `${BASE_URL}/consoles`;

	try {
		const response = await fetch(consoleUrl);
		const consoles = await response.json();

		container.innerHTML = "";
		consoles.forEach((console) => {
			container.innerHTML += `
            <a href="details.html?id=${console.id}" class="one-console">
                <h2>${console.name}</h2> 
                <div class="image">
                    <img src="${console.url}">
                </div>
            <a>
                `;
		});
	} catch (error) {
		displayMessage("error", error, ".console-container");
	}
})();
