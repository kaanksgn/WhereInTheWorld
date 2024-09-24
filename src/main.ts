// import { api } from "./api";
// import { type FetchError } from "./api/xml-get-countries";
import { countries, initializeLocalStorage } from "./storage/countries";
import "./styles.css";
import { Country } from "./types/coutries";
import { elements } from "./utils/elements";
import { renderCountries } from "./utils/render-countries";
// import { setFetchState } from "./utils/set-fetch-state";

void initializeLocalStorage();
elements.form.onsubmit = async (e) => {
  e.preventDefault();
  const input = elements.searchInput.value.trim().toLowerCase();

  const filteredCountries: Country[] = countries.filter((country) =>
    country.name.common.toLowerCase().includes(input)
  );
  renderCountries(filteredCountries);

  // setFetchState({ state: "pending" });
  // xmlGetCountries(input)
  //   .then((countries) => {
  //     console.log(countries);
  //     setFetchState({ state: "success" });
  //     renderCountries(countries);
  //   })
  //   .catch((error: FetchError) => {
  //     console.log(error);
  //     setFetchState({ state: "error", error });
  //   });

  //   try {
  //     setFetchState({ state: "pending" });
  //     const countries = await api.getCountriesByName(input);
  //     renderCountries(countries);
  //     setFetchState({ state: "success" });
  //   } catch (error: unknown) {
  //     setFetchState({ state: "error", error: error as FetchError });
  //   }
};
