"use client";

import { useEffect, useState } from "react";
import { Stack, Grid } from "component/organisms";
import { PROJECT_NAME, PROJECT_IS_LOADING, PROJECT_LEAD_QUALITY, PROJECT_LEAD_STATUS } from "state/projectState";
import { useAtom } from "jotai";
import LeadCard from "./component/LeadCard/LeadCard";
import LeadCardShimmer from "./component/LeadCardShimmer/LeadCardShimmer";
import { projectInfo } from "./data/project";
import { leadInfo } from "./data/lead";
import Router from "next/router";
import styles from "./page.module.scss";

interface ProjectNameProps {
  params: {
    projectName: string;
  };
  searchParams: object;
}

const Page = ({ params: { projectName } }: any) => {
  const { name } = projectInfo[projectName];
  const [loginUserType, setLoginUserType] = useState("");
  const [allLeadInfo, setAllLeadInfo] = useState(leadInfo);
  const [isSelected, setIsSelected] = useState(["Hot", "Warm", "Cold"]);
  const [projectNameState, setProjectName] = useAtom(PROJECT_NAME);
  const [projectIsLoading] = useAtom(PROJECT_IS_LOADING);
  const [projectFilterLeadQuality] = useAtom(PROJECT_LEAD_QUALITY);

  if(name !== projectNameState){
    setProjectName(name);
  }

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
      <Grid gap={[3, 5, 6]} paddingBlock={5} col={[1,2,2]} className={styles.container}>
        {allLeadInfo.filter(({leadScore}) => {
          if(projectFilterLeadQuality.length > 0) { 
            return projectFilterLeadQuality.indexOf(leadScore) >= 0;
          } 
          return true;
        }).map((prop, i) => {
          if (projectIsLoading) return <LeadCardShimmer key={i} />;
          return <LeadCard {...prop} key={i} />;
        })}
      </Grid>
    </Stack>
  );
};

export default Page;
