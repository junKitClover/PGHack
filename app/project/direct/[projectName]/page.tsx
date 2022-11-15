"use client";

import { Box, Text, Visible, Icon, ColorPlate  } from "component/atoms";
import { useEffect, useState } from "react";
import { Stack, Grid, Flex } from "component/organisms";
import LeadCard, { LeadCardProps } from "../../component/LeadCard";
import LeadCardShimmer from "../../component/LeadCardShimmer";
import InfoCard, { InfoCardProps } from "../../component/InfoCard";
import { projectInfo } from "../../data/project";
import { leadInfo } from "../../data/lead";
import { Button } from "component/molecules";
import Link from "next/link";
import Router from "next/router";

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
    const localStorageUserName = localStorage.getItem("userName") || '';
    const localStorageUserType = localStorage.getItem("userType") || "";

    if (!localStorageUserName) {
      window.location.href = "/";
      Router.push("/");
    }

    if (localStorageUserType) {
      setLoginUserType(localStorageUserType);
    }
  }, [loginUserType]);

  return (
    <Stack gap={4} paddingInline={2}>
      <Text type="display" as="h1" padding={4}>
        {name}
      </Text>
      <Flex gap={2}>
        <Button type="contained">Direct Lead</Button>
        {loginUserType === "NORMAL" ? (
          <Button disabled type="outline" iconName="lock">
            Indirect Lead
          </Button>
        ) : (
          <Link href={`/project/indirect/${projectName}`}>
            <Button type="outline">Lookalike Lead</Button>
          </Link>
        )}
      </Flex>
      <Visible visible={false}>
        <Grid col={[2, , 3]} gap={[3, 5, 6]} paddingBlock={5} paddingInline={3}>
          {detailList.map((props, i) => (
            <InfoCard {...props} key={i} />
          ))}
        </Grid>
      </Visible>
      {loginUserType === "NORMAL" ? null: <Box border rounded paddingInline={3} paddingBlock={4}>
        <Flex gap={3} direction={["column", "row"]}>
          <Flex gap={3}>
            <Icon
              iconName="info"
              size="small"
              color="black"
              title="Last Search"
              position="bottom center"
            />
            <Text>Lead Quality</Text>
          </Flex>
          <Flex gap={3}>
            <ColorPlate
              backgroundColor="successDarker"
              isSelected={isSelected.indexOf("Hot") >= 0}
              onClick={() => onChangeSelected("Hot")}
            />
            <Text>Hot</Text>
          </Flex>
          <Flex gap={3}>
            <ColorPlate
              backgroundColor="success"
              isSelected={isSelected.indexOf("Warm") >= 0}
              onClick={() => onChangeSelected("Warm")}
            />
            <Text>Warm</Text>
          </Flex>
          <Flex gap={3}>
            <ColorPlate
              backgroundColor="successLighter"
              isSelected={isSelected.indexOf("Cold") >= 0}
              onClick={() => onChangeSelected("Cold")}
            />
            <Text>Cold</Text>
          </Flex>
        </Flex>
      </Box> }
      <Grid col={[1, 2, 3]} gap={[3, 5, 6]} paddingBlock={5} paddingInline={3}>
        {allLeadInfo.map((prop, i) => {
          if (isLoading) return <LeadCardShimmer key={i} />;
          return <LeadCard {...prop} key={i} />;
        })}
      </Grid>
    </Stack>
  );
};

export default Page;
