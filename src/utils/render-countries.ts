import { type Country } from "../types/coutries";
import { elements } from "./elements";
import { renderLearnMore } from "./render-learn-more";

export function renderCountries(countries: Country[]): void {
  elements.countryList.innerHTML = ``;

  countries.forEach((c) => {
    const parentDiv = document.createElement("div");
    parentDiv.className = "flex flex-col bg-neutral-900 w-72 shadow-lg rounded-lg";

    parentDiv.insertAdjacentHTML(
      "beforeend",
      `<img
        class="rounded-t-lg"
        src=${c.flags.svg}
      />
      <div class="flex flex-col pl-6 py-4 gap-1">
        <h1 class="text-sm font-medium">${c.name.common}</h1>
        <p class="font-light text-xs">
          <span class="font-medium">Population:</span> ${c.population}
        </p>
        <p class="font-light text-xs"><span class="font-medium">Region:</span> ${c.region}</p>
        <p class="font-light text-xs"><span class="font-medium">Capital:</span> ${c.capital}</p>
      </div>`
    );

    const learnMoreButton = document.createElement("button");

    learnMoreButton.onclick = () => {
      renderLearnMore(c);
    };

    learnMoreButton.className = "text-xs font-medium self-end px-6 py-4 hover:animate-pulse";
    learnMoreButton.type = "button";
    learnMoreButton.textContent = "Learn More ->";

    parentDiv.appendChild(learnMoreButton);
    elements.countryList.appendChild(parentDiv);
  });
}
