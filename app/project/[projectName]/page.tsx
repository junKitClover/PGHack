"use client";

import { useEffect, useState } from "react";
import { Stack, Grid } from "component/organisms";
import { PROJECT_NAME, PROJECT_IS_LOADING, PROJECT_LEAD_QUALITY, PROJECT_LEAD_INFO, TProjectType } from "state/projectState";
import { useAtom } from "jotai";
import LeadCard from "app/components/LeadCard/LeadCard";
import LeadCardShimmer from "./component/LeadCardShimmer/LeadCardShimmer";
import { projectInfo } from "./data/project";
// import { leadInfo } from "./data/lead";
import Router from "next/router";
import styles from "./page.module.scss";
import { Result, LeadDisplayData } from "app/type/LeadType"; 
import { prettyDataSet } from "app/helper/prettyDataSet";

interface ProjectNameProps {
  params: {
    projectName: string;
  };
  searchParams: object;
}

const Page = ({ params: { projectName } }: any) => {
  const { name } = projectInfo[projectName];
  const [isLoading, setIsLoading] = useState(true);
  const [allLeadInfo, setAllLeadInfo] = useState<Array<LeadDisplayData>>([]);
  const [isSelected, setIsSelected] = useState(["Hot", "Warm", "Cold"]);
  const [projectNameState, setProjectName] = useAtom(PROJECT_NAME);
  const [projectLead] = useAtom(PROJECT_LEAD_INFO);
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
    const thisProjectLead = projectLead[projectName as unknown as TProjectType];

    fetch('https://propertyguru.hasura.app/api/rest/getProfileByEmails', {
        method: 'POST',
        cache: 'no-cache',
        headers: {
          'x-hasura-admin-secret': 'Sfuro9op4sS5tmD98vlqcjEZirCddguhzg4WxNo3415CLsjqdK26jl6AzOAkwbWa',
        },
        body: JSON.stringify({ "emailIds": thisProjectLead.map((({email})=>(email))) })
      })
        .then((res) => res.json())
        .then((data: Result) => {
          setAllLeadInfo(prettyDataSet(data));
          setIsLoading(false);
        })
    
  },[projectLead])

  return (
    <Stack gap={4}>
      <Grid gap={[3, 5, 6]} paddingBlock={5} col={[1,2,2]} className={styles.container}>
        {allLeadInfo.filter(({leadQualification}) => {
          if(projectFilterLeadQuality.length > 0) { 
            return projectFilterLeadQuality.indexOf(leadQualification) >= 0;
          } 
          return true;
        }).map((prop, i) => {
          if (isLoading) return <LeadCardShimmer key={i} />;
          return <LeadCard {...prop} key={i} />;
        })}
      </Grid>
    </Stack>
  );
};

export default Page;
