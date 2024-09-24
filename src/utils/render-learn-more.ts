import { countries } from "../storage/countries";
import { Country } from "../types/coutries";
import { elements } from "./elements";

export function renderLearnMore(country: Country): void {
  elements.countryList.innerHTML = ``;
  const div = document.createElement("div");
  div.className = "flex flex-col items-center justify-between gap-4 px-24 mb-20";
  div.id = "learn-more";

  const backButton = document.createElement("button");
  backButton.className = "px-2 py-1 bg-[#2b3743] text-medium text-xs shadow-md rounded-md";
  backButton.type = "button";
  backButton.textContent = "← Back";
  backButton.onclick = () => {
    elements.countryList.innerHTML = ``;
  };

  div.insertAdjacentHTML(
    "beforeend",
    `
            <img
        src=${country.flags.svg} />
      <h1>${country.name.common}</h1>
      <p class="text-sm font-light"><span class="font-medium">Native Name:</span> ${
        Object.values(country.name.nativeName ?? { common: "N/A" }).at(0)?.common
      }</p>
      <p class="text-sm font-light"><span class="font-medium">Population:</span> ${country.population.toLocaleString()}</p>
      <p class="text-sm font-light"><span class="font-medium">Region:</span> ${country.region}</p>
      <p class="text-sm font-light"><span class="font-medium">Sub Region:</span> ${
        country.subregion
      }</p>
      <p class="text-sm font-light"><span class="font-medium">Capital:</span> ${
        country.capital ?? "N/A"
      }</p>
      <p class="text-sm font-light"><span class="font-medium">Top Level Domain:</span>${
        country.tld?.at(0) ?? "N/A"
      }</p>
      <p class="text-sm font-light"><span class="font-medium">Currencies:</span> ${Object.values(
        country.currencies ?? {}
      )
        .map((c) => `(${c.symbol}) ${c.name}`)
        .join(", ")}</p>
      <p class="text-sm font-light">
        <span class="font-medium">Languages:</span> ${Object.values(
          country.languages ?? ["N/A"]
        ).join(" , ")}
      </p>
     
      `
  );
  const buttondiv = document.createElement("div");
  country.borders?.forEach((n) => {
    const newb = document.createElement("button");
    newb.className = "px-2 py-1 bg-[#2b3743] text-medium text-xs shadow-md rounded-md";
    newb.textContent = n;
    newb.type = "button";
    newb.onclick = async () => {
      // const newc = await api.getCountriesByCode(n);
      const filteredCountries = countries.filter((x) => x.cca3 === n);
      renderLearnMore(filteredCountries[0]);
    };
    buttondiv.appendChild(newb);
  });

  //   for (let n in country.borders) {
  //     const newb = document.createElement("button");
  //     newb.className = "px-2 py-1 bg-[#2b3743] text-medium text-xs shadow-md rounded-md";
  //     newb.textContent = n;
  //     newb.type = "button";
  //     newb.onclick = async () => {
  //       const newc = await api.getCountriesByName("alpha", n);
  //       renderLearnMore(newc[0]);
  //     };
  //     buttondiv.appendChild(newb);
  //   }
  div.appendChild(buttondiv);
  div.appendChild(backButton);
  elements.countryList.appendChild(div);
}
