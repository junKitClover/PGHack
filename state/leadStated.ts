import { atom } from "jotai";
import { LeadDisplayData } from 'app/lead/search/LeadType';

export const LEAD_PAGE = atom('Search Lead');
export const LEAD_SEARCH_RESULT = atom<Array<LeadDisplayData>>([]);
export const LEAD_SEARCH_LOADING = atom(false);
export const LEAD_USER_NAME = atom('');