import { Country } from "../types/coutries";

export const api = {
  async getCountriesByName(name: string): Promise<Country[]> {
    const resp = await fetch(`https://restcountries.com/v3.1/name/${name}`, { method: "GET" });
    if (!resp.ok) {
      throw new Error(`HTTP ERROR! STATUS : ${resp.status}`);
    }
    const json = await resp.json();
    return json;
  },

  async getCountriesByCode(name: string): Promise<Country[]> {
    const resp = await fetch(`https://restcountries.com/v3.1/alpha/${name}`, { method: "GET" });
    if (!resp.ok) {
      throw new Error(`HTTP ERROR! STATUS : ${resp.status}`);
    }
    const json = await resp.json();
    return json;
  },

  async getAllCountries(): Promise<Country[]> {
    const resp = await fetch("https://restcountries.com/v3.1/all");
    if (!resp.ok) {
      throw new Error(`HTTP ERROR! STATUS : ${resp.status}`);
    }
    const json = await resp.json();
    return json;
  },
};
