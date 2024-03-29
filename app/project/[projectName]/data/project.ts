import { InfoCardProps } from "../component/InfoCard";
import { TPropertyName } from "state/projectState";

interface ProjectInfor {
  name: string;
  detailList: Array<InfoCardProps>;
}

export const projectInfo: Record<TPropertyName, ProjectInfor> = {
  "parc-clematis": {
    detailList: [
      { title: "Search Metrics", contain: "0.10" },
      { title: "Target Budget", contain: "RM 500k - 800k" },
      { title: "Type", contain: "Condo" },
      { title: "Location", contain: "Gelugor, Penang" },
      { title: "Numbers of Leads", contain: "15" },
      { title: "Target Company", contain: "Sunway, Setia City" },
    ],
    name: "Parc Clematis",
  },
  "parc-esta": {
    detailList: [
      { title: "Search Metrics", contain: "0.89" },
      { title: "Target Budget", contain: "RM 300k - 600k" },
      { title: "Type", contain: "Condo" },
      { title: "Location", contain: "Gelugor, Penang" },
      { title: "Numbers of Leads", contain: "24" },
      { title: "Target Company", contain: "Sunway, Setia City" },
    ],
    name: "Parc Esta",
  },
  "archipelago": {
    detailList: [
      { title: "Search Metrics", contain: "0.10" },
      { title: "Target Budget", contain: "RM 500k - 800k" },
      { title: "Type", contain: "Condo" },
      { title: "Location", contain: "Gelugor, Penang" },
      { title: "Numbers of Leads", contain: "15" },
      { title: "Target Company", contain: "Sunway, Setia City" },
    ],
    name: "Archipelago",
  },
  "the-mezzo": {
    detailList: [
      { title: "Search Metrics", contain: "0.15" },
      { title: "Target Budget", contain: "RM 800k - 1500k" },
      { title: "Type", contain: "Condo" },
      { title: "Location", contain: "Gelugor, Penang" },
      { title: "Numbers of Leads", contain: "23" },
      { title: "Target Company", contain: "Sunway, Setia City" },
    ],
    name: "The Mezzo",
  },
  "viva-vista": {
    detailList: [
      { title: "Search Metrics", contain: "0.50" },
      { title: "Target Budget", contain: "RM 300k - 600k" },
      { title: "Type", contain: "Condo" },
      { title: "Location", contain: "Gelugor, Penang" },
      { title: "Numbers of Leads", contain: "32" },
      { title: "Target Company", contain: "Sunway, Setia City" },
    ],
    name: "Viva Vista",
  },
  "river-place": {
    detailList: [
      { title: "Search Metrics", contain: "0.01" },
      { title: "Target Budget", contain: "RM 500k - 800k" },
      { title: "Type", contain: "Outlet" },
      { title: "Location", contain: "Gelugor, Penang" },
      { title: "Numbers of Leads", contain: "0" },
    ],
    name: "River Place",
  },
  "shelford-23": {
    detailList: [
      { title: "Search Metrics", contain: "0.01" },
      { title: "Target Budget", contain: "RM 700k - 2000k" },
      { title: "Type", contain: "Outlet" },
      { title: "Location", contain: "Gelugor, Penang" },
      { title: "Numbers of Leads", contain: "0" },
      { title: "Target Company", contain: "Sunway, Setia City" },
    ],
    name: "Shelford 23",
  },
};