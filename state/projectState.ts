import { atom } from "jotai";

export type TProjectType =
  | "the-light-waterfront-penang"
  | "permatang-sanctuary"
  | "trehaus"
  | "the-terraces-condominium"
  | "udini-square"
  | "vertiq-boutique-outlets";

export type TLeadStore = Record<TProjectType, Array<RegisterInfor>>;  
interface RegisterInfor {
  name: string;
  email: string;
}

export const PROJECT_NAME = atom("The Light Waterfront Penang");
export const PROJECT_LEAD_STATUS = atom<Array<String>>([]);
export const PROJECT_LEAD_QUALITY = atom<Array<String>>([]);
export const PROJECT_IS_LOADING = atom(false);
export const PROJECT_LEAD_INFO = atom<
  Record<TProjectType, Array<RegisterInfor>>
>({
  "the-light-waterfront-penang": [],
  "permatang-sanctuary": [],
  trehaus: [],
  "the-terraces-condominium": [],
  "udini-square": [],
  "vertiq-boutique-outlets": [],
});
