import { atom } from "jotai";

export type TPropertyName = "parc-esta" | "archipelago" | "the-mezzo" | "viva-vista" | "river-place" | "shelford-23"

export type TLeadType = 'DIRECT' | 'INDIRECT';

export type TLeadStore = Record<TPropertyName, Array<RegisterInfor>>;  
interface RegisterInfor {
  name: string;
  email: string;
}

export const PROJECT_NAME = atom("Parc Esta");
export const PROJECT_LEAD_STATUS = atom<Array<String>>([]);
export const PROJECT_LEAD_QUALITY = atom<Array<String>>([]);
export const PROJECT_IS_LOADING = atom(false);
export const PROJECT_LEAD_INFO = atom<
  Record<TPropertyName, Array<RegisterInfor>>
>({
  "parc-esta": [],
  "archipelago": [],
  "the-mezzo": [],
  "viva-vista": [],
  "river-place": [],
  "shelford-23": [],
});
export const PROJECT_LEAD_EMAIL_WITH_NAME = atom<Record<string,string>>({});
export const PROJECT_LEAD_TYPE = atom<TLeadType>('DIRECT');