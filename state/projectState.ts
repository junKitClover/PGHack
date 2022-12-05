import { atom } from "jotai";

export const PROJECT_NAME = atom('The Light Waterfront Penang');
export const PROJECT_LEAD_STATUS = atom<Array<String>>([]);
export const PROJECT_LEAD_QUALITY = atom<Array<String>>([]);
export const PROJECT_IS_LOADING = atom(false);