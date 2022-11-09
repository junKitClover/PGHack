'use client'

import { Stack } from "component/organisms";
import { Box } from "component/atoms";
import { Button } from "component/molecules";
import Link from "next/link";
import { useEffect, useState } from "react";

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
    path: "/project/direct/the-light-waterfront-penang",
  },
  {
    id: 2,
    name: "Permatang Sanctuary",
    location: "Permatang Tinggi, Bukit Mertajam",
    path: "/project/direct/permatang-sanctuary",
  },
  {
    id: 3,
    name: "Tréhaus",
    location: "Bukit Jambul, Penang",
    path: "/project/direct/trehaus",
  },
  {
    id: 4,
    name: "The Terraces Condominium",
    location: "Bukit Jambul, Penang",
    path: "/project/direct/the-terraces-condominium",
  },
  {
    id: 5,
    name: "UDINI Square",
    location: "MetroEast, Penang",
    path: "/project/direct/udini-square",
  },
  {
    id: 6,
    name: "Vertiq Boutique Outlets",
    location: "Metroeast, Penang",
    path: "/project/direct/vertiq-boutique-outlets",
  },
];

const SideBar = () => {
  const [currentPath, setCurrentPath]= useState('/project/direct/the-light-waterfront-penang');

  useEffect(()=>{
    const {href} = window.location;
    const paths = href.split('/');
    setCurrentPath(paths[paths.length - 1]);
  },[])

  return (
    <Box paddingBlock={3} paddingInline={2}>
      <Stack gap={3}>
        {projectList.map(({name, id, path}) => (
          <Link key={id} href={path}>
            <Button type={path.indexOf(currentPath) >= 0 ? "contained" : "text"} isFloat onClick={()=>{setCurrentPath(path)}}>
              {name}
            </Button>
          </Link>
        ))}
      </Stack>
    </Box>
  )};

export default SideBar;