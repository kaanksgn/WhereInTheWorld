import { FetchError } from "../api/xml-get-countries";
import { elements } from "./elements";

type Args =
  | {
      state: "pending";
    }
  | {
      state: "success";
    }
  | {
      state: "error";
      error: FetchError;
    };
export function setFetchState(args: Args): void {
  switch (args.state) {
    case "pending":
      (elements.button.disabled = true), elements.loadingSpinner.classList.remove("hidden");
      break;

    case "success":
      elements.loadingSpinner.classList.add("hidden");
      elements.button.disabled = false;
      elements.state.innerHTML = ``;
      break;
    case "error":
      elements.button.disabled = false;
      elements.loadingSpinner.classList.add("hidden");
      elements.state.innerHTML = `
        <p class=text-red-500 text-center>${args.error.message}</p>`;
      break;
  }
}
