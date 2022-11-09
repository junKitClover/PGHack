"use client";

import { Box, Text } from "component/atoms";
import { useEffect, useState } from "react";
import { Stack, Grid, Flex } from "component/organisms";
import LeadCard, { LeadCardProps, LeadQuality } from "../../component/LeadCard";
import InfoCard, { InfoCardProps } from "../../component/InfoCard";
import { projectInfo } from "../../data/project";
import { leadInfo } from "../../data/lead";
import { Button } from "component/molecules";
import { SUPER_USER } from "../../../user";
import Link from "next/link";
import Router from "next/router";

interface ProjectNameProps {
  params: {
    projectName: string;
  };
  searchParams: object;
}

const Page = ({ params: { projectName } }: ProjectNameProps) => {
  const { name, detailList } = projectInfo[projectName];
  const [loginUser, setLoginUser] = useState("");

  useEffect(() => {
    const localStorageUser = localStorage.getItem("userName") || "";

    if(!localStorageUser){
      window.location.href = '/';
      Router.push('/');
    }
    
    if (SUPER_USER.indexOf(localStorageUser) >= 0) {
      setLoginUser("SUPER");
    }
  }, [loginUser]);

  return (
    <Stack gap={4}>
      <Text type="display" as="h1" padding={4}>
        {name}
      </Text>
      <Flex gap={2}>
        <Button type="contained">Direct Lead</Button>
        {loginUser === "SUPER" ? (
          <Link href={`/project/indirect/${projectName}`}>
            <Button type="outline">Indirect Lead</Button>
          </Link>
        ) : (
          <Button disabled type="outline" iconName="lock">
              Indirect Lead
          </Button>
        )}
      </Flex>
      <Grid col={[2, , 3]} gap={[3, 5, 6]} paddingBlock={5} paddingInline={3}>
        {detailList.map((props, i) => (
          <InfoCard {...props} key={i} />
        ))}
      </Grid>
      <LeadQuality />
      <Grid col={[1, 2, 3]} gap={[3, 5, 6]} paddingBlock={5} paddingInline={3}>
        {leadInfo.map((prop, i) => (
          <LeadCard {...prop} key={i} />
        ))}
      </Grid>
    </Stack>
  );
};

export default Page;
