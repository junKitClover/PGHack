import { Stack } from "component/organisms";
import { Box } from "component/atoms";
import { Button } from "component/molecules";
import Link from "next/link";

interface ProjectProps {
  id: number,
  name: string;
  location: string;
  path: string;
}

const projectList: Array<ProjectProps> = [
  {
    id: 1,
    name: "THE LIGHT Waterfront Penang",
    location: "Gelugor, Penang",
    path: "/project/the-light-waterfront-penang-01",
  },
  {
    id: 2,
    name: "Permatang Sanctuary",
    location: "Permatang Tinggi, Bukit Mertajam",
    path: "/project/permatang-sanctuary-02",
  },
  {
    id: 3,
    name: "Tréhaus",
    location: "Bukit Jambul, Penang",
    path: "/project/trehaus-03",
  },
  {
    id: 4,
    name: "The Terraces Condominium",
    location: "Bukit Jambul, Penang",
    path: "/project/the-terraces-condo-04",
  },
  {
    id: 5,
    name: "UDINI Square",
    location: "MetroEast, Penang",
    path: "/project/udini-square-05",
  },
  {
    id: 6,
    name: "Vertiq Boutique Outlets",
    location: "Metroeast, Penang",
    path: "/project/vertiq-boutique-06",
  },
];

const SideBar = () => (
  <Box paddingBlock={3} paddingInline={2}>
    <Stack gap={3}>
      {projectList.map(({name, id, path}) => (
        <Link key={id} href={path}>
          <Button type="text" isFloat >
            {name}
          </Button>
        </Link>
      ))}
    </Stack>
  </Box>
);

export default SideBar;