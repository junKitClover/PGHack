'use client'

import { Stack } from "component/organisms";
import { Box, Text } from "component/atoms";
import styles from "./sideBar.module.scss";
import classNames from "classnames";
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
  const [currentPath, setCurrentPath] = useState('/project/direct/the-light-waterfront-penang');

  useEffect(() => {
    const { href } = window.location;
    const paths = href.split('/');
    setCurrentPath(paths[paths.length - 1]);
  }, []);

  return (
    <Box paddingBlock={3} paddingInline={2} backgroundColor="transparent" className={styles.projectSideBar}>
      <Stack gap={4}>
        <Text color="fontColor" size="small" >PROJECT</Text>
        <Box border rounded backgroundColor="white" >
          {projectList.map(({ name, id, path }, index) => (
            <Link key={id} href={path} className={styles.link} onClick={()=>{setCurrentPath(path)}}>
              {path.indexOf(currentPath) >= 0  && <div className={styles.highlightBar}/>}
              <Box backgroundColor="transparent" paddingBlock={8} paddingInline={6} className={classNames({
              [styles.borderOnTop]: index !==0
            })}>
                <Text size="small" color={path.indexOf(currentPath) > 0 ? "primary" : 'fontColor'}>{name}</Text>
              </Box>
            </Link>
          ))}
        </Box>
      </Stack>
    </Box>
  )
};

export default SideBar;