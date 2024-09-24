import { type Country } from "../types/coutries";

export type FetchError = {
  status: number;
  message: string;
};
export function xmlGetCountries(nameQuery: string): Promise<Country[]> {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open("GET", `https://restcountries.com/v3.1/name/${nameQuery}`);
    req.onload = () => {
      if (req.status === 200) {
        const countries = JSON.parse(req.response);
        resolve(countries);
      } else {
        const error = JSON.parse(req.response);
        reject(error);
      }
    };
    req.send();
  });
}
