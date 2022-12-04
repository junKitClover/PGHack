"use client";

import { useEffect, useState } from "react";
import { Stack, Grid, Flex } from "component/organisms";
import LeadCard, { LeadCardProps } from "../../component/LeadCard/LeadCard";
import LeadCardShimmer from "../../component/LeadCardShimmer/LeadCardShimmer";
import { projectInfo } from "../../data/project";
import { leadInfo } from "../../data/lead";
import Router from "next/router";
import styles from "./page.module.scss";

interface ProjectNameProps {
  params: {
    projectName: string;
  };
  searchParams: object;
}

const Page = ({ params: { projectName } }: any) => {
  const { name, detailList } = projectInfo[projectName];
  const [loginUserType, setLoginUserType] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [allLeadInfo, setAllLeadInfo] = useState(leadInfo);
  const [isSelected, setIsSelected] = useState(["Hot", "Warm", "Cold"]);

  const onChangeSelected = (input: "Hot" | "Warm" | "Cold") => {
    setIsSelected((prev): Array<string> => {
      if (prev.indexOf(input) >= 0) {
        return prev.filter((key) => key === input);
      }
      return [...prev, input];
    });
  };

  useEffect(()=>{
    setAllLeadInfo(leadInfo.filter(({leadScore}) => isSelected.indexOf(leadScore)>=0))
  },[
    isSelected
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const localStorageUserName = localStorage.getItem("userName") || 'SUPER';
    const localStorageUserType = localStorage.getItem("userType") || "SUPER";

    if (!localStorageUserName) {
      window.location.href = "/";
      Router.push("/");
    }

    if (localStorageUserType) {
      setLoginUserType(localStorageUserType);
    }
  }, [loginUserType]);

  return (
    <Stack gap={4}>
      {/* <Flex gap={[3, 5, 6]} paddingBlock={5} wrap="wrap" justifyContent={["center","spaceBetween"]} className={styles.container}>
        {allLeadInfo.map((prop, i) => {
          if (isLoading) return <LeadCardShimmer key={i} />;
          return <LeadCard {...prop} key={i} />;
        })}
      </Flex> */}
      <Grid gap={[3, 5, 6]} paddingBlock={5} col={[1,2,3]} className={styles.container}>
        {allLeadInfo.map((prop, i) => {
          if (isLoading) return <LeadCardShimmer key={i} />;
          return <LeadCard {...prop} key={i} />;
        })}
      </Grid>
    </Stack>
  );
};

export default Page;
