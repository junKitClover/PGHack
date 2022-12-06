"use client";

import { useEffect, useState } from "react";
import { Stack, Grid, Flex } from "component/organisms";
import { Text, Visible } from "component/atoms";
import { PROJECT_NAME, PROJECT_LEAD_QUALITY, PROJECT_LEAD_INFO, PROJECT_LEAD_TYPE, PROJECT_LEAD_EMAIL_WITH_NAME } from "state/projectState";
import { useAtom } from "jotai";
import LeadCard from "app/components/LeadCard/LeadCard";
import LeadCardShimmer from "./component/LeadCardShimmer/LeadCardShimmer";
import { projectInfo } from "./data/project";
import styles from "./page.module.scss";
import { TPropertyName } from "state/projectState";
import { Result, LeadDisplayData, LookALikeResult } from "app/type/LeadType";
import { prettyDataSet, prettyLookALikeDataSet } from "app/helper/prettyDataSet";

interface ProjectNameProps {
  params: {
    projectName: TPropertyName;
  };
  searchParams: object;
}

const Page = ({ params: { projectName } }: any) => {
  const { name } = projectInfo[projectName as unknown as TPropertyName];
  const [isLoading, setIsLoading] = useState(true);
  const [allLeadInfo, setAllLeadInfo] = useState<Array<LeadDisplayData>>([]);
  const [projectNameState, setProjectName] = useAtom(PROJECT_NAME);
  const [projectLead] = useAtom(PROJECT_LEAD_INFO);
  const [projectFilterLeadQuality] = useAtom(PROJECT_LEAD_QUALITY);
  const [projectEmailWithName] = useAtom(PROJECT_LEAD_EMAIL_WITH_NAME);
  const [leadType] = useAtom(PROJECT_LEAD_TYPE);

  if (name !== projectNameState) {
    setProjectName(name);
  }

  useEffect(() => {
    const thisProjectLead = projectLead[projectName as unknown as TPropertyName];
    console.log(leadType, thisProjectLead.map((({ email }) => (email))));

    if (leadType === 'DIRECT') {
      setIsLoading(true);
      fetch('https://propertyguru.hasura.app/api/rest/getProfileByEmails', {
        method: 'POST',
        cache: 'no-cache',
        headers: {
          'x-hasura-admin-secret': 'Sfuro9op4sS5tmD98vlqcjEZirCddguhzg4WxNo3415CLsjqdK26jl6AzOAkwbWa',
        },
        body: JSON.stringify({ "emailIds": thisProjectLead.map((({ email }) => (email))) })
      })
        .then((res) => res.json())
        .then((data: Result) => {
          setAllLeadInfo(prettyDataSet(data));
          setIsLoading(false);
        });
    } else if(leadType === "INDIRECT") {
      setIsLoading(true);
      fetch('https://propertyguru.hasura.app/api/rest/getLookAlikes', {
        method: 'POST',
        cache: 'no-cache',
        headers: {
          'x-hasura-admin-secret': 'Sfuro9op4sS5tmD98vlqcjEZirCddguhzg4WxNo3415CLsjqdK26jl6AzOAkwbWa',
        },
        body: JSON.stringify({ "seedEmail": thisProjectLead.map((({ email }) => (email))) })
      })
        .then((res) => res.json())
        .then((data: LookALikeResult) => {
          setAllLeadInfo(prettyLookALikeDataSet(data));
          setIsLoading(false);
        });
    }
  }, [projectLead, projectName, leadType])

  return (
    <Stack gap={4}>
      <Grid gap={[3, 5, 6]} paddingBlock={5} col={[1, 2, 2]} className={styles.container}>
        {
          isLoading && ([1,2]).map((item, i)=> (<LeadCardShimmer key={i} />))
        }
        { allLeadInfo.filter(({ leadQualification }) => {
          if (projectFilterLeadQuality.length > 0) {
            return projectFilterLeadQuality.indexOf(leadQualification) >= 0;
          }
          return true;
        }).map((prop, i) => {
          return <LeadCard {...prop} key={i} name={projectEmailWithName[prop.email] || 'No Name'}/>;
        })}
      </Grid>
      <Visible visible={allLeadInfo.length === 0 && !isLoading}>
       <Flex justifyContent="center" alignItem="center" className={styles.emptyResult}><Text>No record found</Text></Flex>
      </Visible>
    </Stack>
  );
};

export default Page;
