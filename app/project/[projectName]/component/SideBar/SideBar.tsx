'use client'

import { Stack } from "component/organisms";
import { Box, Text } from "component/atoms";
import styles from "./SideBar.module.scss";
import { PROJECT_NAME } from "state/projectState";
import { useAtom } from "jotai";
import classNames from "classnames";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ProjectProps {
  id: number,
  name: string;
  slug: string;
  location: string;
  path: string;
}

const projectList: Array<ProjectProps> = [
  {
    id: 1,
    name: "Parc Esta",
    slug: "parc-esta",
    location: "Gelugor, Penang",
    path: "/project/parc-esta",
  },
  {
    id: 2,
    name: "Archipelago",
    slug: "archipelago",
    location: "Permatang Tinggi, Bukit Mertajam",
    path: "/project/archipelago",
  },
  {
    id: 3,
    name: "The Mezzo",
    slug: "the-mezzo",
    location: "Bukit Jambul, Penang",
    path: "/project/the-mezzo",
  },
  {
    id: 4,
    slug: "viva-vista",
    name: "Viva Vista",
    location: "Bukit Jambul, Penang",
    path: "/project/viva-vista",
  },
  {
    id: 5,
    slug: "river-place",
    name: "River Place",
    location: "MetroEast, Penang",
    path: "/project/river-place",
  },
  {
    id: 6,
    slug: "shelford-23",
    name: "Shelford 23",
    location: "Metroeast, Penang",
    path: "/project/shelford-23",
  },
];

const SideBar = () => {
  const [projectName, setProjectName] = useAtom(PROJECT_NAME);

  return (
    <Box paddingBlock={3} backgroundColor="transparent" className={styles.projectSideBar}>
      <Stack gap={4}>
        <Text color="fontColor" size="small" >PROJECT</Text>
        <Box border rounded backgroundColor="white" >
          {projectList.map(({ name, id, path }, index) => (
            <Link key={id} href={path} className={styles.link} onClick={()=>{setProjectName(name)}}>
              {projectName === name && <div className={styles.highlightBar}/>}
              <Box backgroundColor="transparent" paddingBlock={8} paddingInline={6} className={classNames({
              [styles.borderOnTop]: index !==0
            })}>
                <Text size="small" color={projectName === name ? "primary" : 'fontColor'}>{name}</Text>
              </Box>
            </Link>
          ))}
        </Box>
      </Stack>
    </Box>
  )
};

export default SideBar;