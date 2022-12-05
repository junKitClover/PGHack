import { InfoCardProps } from "../component/InfoCard";

interface ProjectInfor {
  name: string;
  detailList: Array<InfoCardProps>;
}

export const projectInfo: Record<string, ProjectInfor> = {
  "the-light-waterfront-penang": {
    detailList: [
      { title: "Search Metrics", contain: "0.89" },
      { title: "Target Budget", contain: "RM 300k - 600k" },
      { title: "Type", contain: "Condo" },
      { title: "Location", contain: "Gelugor, Penang" },
      { title: "Numbers of Leads", contain: "24" },
      { title: "Target Company", contain: "Sunway, Setia City" },
    ],
    name: "The Light Waterfront Penang",
  },
  "permatang-sanctuary": {
    detailList: [
      { title: "Search Metrics", contain: "0.10" },
      { title: "Target Budget", contain: "RM 500k - 800k" },
      { title: "Type", contain: "Condo" },
      { title: "Location", contain: "Gelugor, Penang" },
      { title: "Numbers of Leads", contain: "15" },
      { title: "Target Company", contain: "Sunway, Setia City" },
    ],
    name: "Permatang Sanctuary",
  },
  trehaus: {
    detailList: [
      { title: "Search Metrics", contain: "0.15" },
      { title: "Target Budget", contain: "RM 800k - 1500k" },
      { title: "Type", contain: "Condo" },
      { title: "Location", contain: "Gelugor, Penang" },
      { title: "Numbers of Leads", contain: "23" },
      { title: "Target Company", contain: "Sunway, Setia City" },
    ],
    name: "Trehaus",
  },
  "the-terraces-condominium": {
    detailList: [
      { title: "Search Metrics", contain: "0.50" },
      { title: "Target Budget", contain: "RM 300k - 600k" },
      { title: "Type", contain: "Condo" },
      { title: "Location", contain: "Gelugor, Penang" },
      { title: "Numbers of Leads", contain: "32" },
      { title: "Target Company", contain: "Sunway, Setia City" },
    ],
    name: "The Terraces Condominium",
  },
  "udini-square": {
    detailList: [
      { title: "Search Metrics", contain: "0.01" },
      { title: "Target Budget", contain: "RM 500k - 800k" },
      { title: "Type", contain: "Outlet" },
      { title: "Location", contain: "Gelugor, Penang" },
      { title: "Numbers of Leads", contain: "0" },
    ],
    name: "UDINI Square",
  },
  "vertiq-boutique-outlets": {
    detailList: [
      { title: "Search Metrics", contain: "0.01" },
      { title: "Target Budget", contain: "RM 700k - 2000k" },
      { title: "Type", contain: "Outlet" },
      { title: "Location", contain: "Gelugor, Penang" },
      { title: "Numbers of Leads", contain: "0" },
      { title: "Target Company", contain: "Sunway, Setia City" },
    ],
    name: "Vertiq Boutique Outlets",
  },
};