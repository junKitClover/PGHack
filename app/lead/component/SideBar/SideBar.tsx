'use client'

import { Stack } from "component/organisms";
import { Box, Text } from "component/atoms";
import styles from "./SideBar.module.scss";
import { LEAD_PAGE } from "state/leadStated";
import { useAtom } from "jotai";
import classNames from "classnames";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ProjectProps {
  id: number;
  name: string;
  path: string;
}

const projectList: Array<ProjectProps> = [
  {
    id: 1,
    name: "Search Lead",
    path: "/lead/search",
  },
  {
    id: 2,
    name: "Bulk Lead Validation",
    path: "/lead/bulk",
  }
];

const SideBar = () => {
  const [leadPage, setLeadPage] = useAtom(LEAD_PAGE);

  return (
    <Box paddingBlock={3} backgroundColor="transparent" className={styles.projectSideBar}>
      <Stack gap={4}>
        <Text color="fontColor" size="small" >Lead Validation</Text>
        <Box border rounded backgroundColor="white" >
          {projectList.map(({ name, id, path }, index) => (
            <Link key={id} href={path} className={styles.link} onClick={()=>{setLeadPage(name)}}>
              {leadPage === name  && <div className={styles.highlightBar}/>}
              <Box backgroundColor="transparent" paddingBlock={8} paddingInline={6} className={classNames({
              [styles.borderOnTop]: index !==0
            })}>
                <Text size="small" color={leadPage === name ? "primary" : 'fontColor'}>{name}</Text>
              </Box>
            </Link>
          ))}
        </Box>
      </Stack>
    </Box>
  )
};

export default SideBar;