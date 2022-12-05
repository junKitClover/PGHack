import { atom } from "jotai";
interface RegisterInfor {
  name: string,
  email: string,
  projectName: 'the-light-waterfront-penang' | 'permatang-sanctuary' | 'trehaus' | 'the-terraces-condominium' | 'udini-square' | 'vertiq-boutique-outlets'
}

export const PROJECT_NAME = atom('The Light Waterfront Penang');
export const PROJECT_LEAD_STATUS = atom<Array<String>>([]);
export const PROJECT_LEAD_QUALITY = atom<Array<String>>([]);
export const PROJECT_IS_LOADING = atom(false);
export const PROJECT_LEAD_INFO = atom<Array<RegisterInfor>>([]);
