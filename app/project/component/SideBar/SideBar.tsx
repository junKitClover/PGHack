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
  location: string;
  path: string;
}

const projectList: Array<ProjectProps> = [
  {
    id: 1,
    name: "The Light Waterfront Penang",
    location: "Gelugor, Penang",
    path: "/project/the-light-waterfront-penang",
  },
  {
    id: 2,
    name: "Permatang Sanctuary",
    location: "Permatang Tinggi, Bukit Mertajam",
    path: "/project/permatang-sanctuary",
  },
  {
    id: 3,
    name: "Trehaus",
    location: "Bukit Jambul, Penang",
    path: "/project/trehaus",
  },
  {
    id: 4,
    name: "The Terraces Condominium",
    location: "Bukit Jambul, Penang",
    path: "/project/the-terraces-condominium",
  },
  {
    id: 5,
    name: "UDINI Square",
    location: "MetroEast, Penang",
    path: "/project/udini-square",
  },
  {
    id: 6,
    name: "Vertiq Boutique Outlets",
    location: "Metroeast, Penang",
    path: "/project/vertiq-boutique-outlets",
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