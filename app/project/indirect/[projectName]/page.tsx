"use client";

import { Box, Text, Visible, Icon, ColorPlate } from "component/atoms";
import { useEffect, useState } from "react";
import { Stack, Grid, Flex } from "component/organisms";
import LeadCard, { LeadCardProps } from "../../component/LeadCard/LeadCard";
import LeadCardShimmer from "../../component/LeadCardShimmer/LeadCardShimmer";
import { projectInfo } from "../../data/project";
import { leadInfo } from "../../data/lead";
import { Button } from "component/molecules";
import Link from "next/link";
import Router from "next/router";
import styles from "./page.module.scss";
import classnames from "classnames";
import PGFilter from "./component/PGFilter";
import LockManualFilter from "./component/LockManualFilter";
import ManualFilter from "./component/ManualFilter";

const Page = ({ params: { projectName } }: any) => {
  const { name, detailList } = projectInfo[projectName];
  const [loginUserType, setLoginUserType] = useState("");
  const [config, setConfig] = useState("PG");
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
    if (isLoading) {
      const interval = setInterval(() => {
        setIsLoading(false);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isLoading]);

  useEffect(() => {
    const localStorageUser = localStorage.getItem("userName") || "SUPER";
    const localStorageUserType = localStorage.getItem("userType") || "SUPER";

    if (!localStorageUser) {
      window.location.href = "/";
      Router.push("/");
    }

    if (localStorageUserType === "NORMAL") {
      window.location.href = `/project/direct/${projectName}`;
      Router.push(`/project/direct/${projectName}`);
    }

    setLoginUserType(localStorageUserType);
  });

  return (
    <Stack gap={4} paddingInline={2}>
      <Text type="display" as="h1" padding={4}>
        {name}
      </Text>
      <Flex gap={2}>
        <Link href={`/project/direct/${projectName}`}>
          <Button type="outline">Direct Lead</Button>
        </Link>
        <Button type="contained">Lookalike Lead</Button>
      </Flex>
      <Grid col={[1, 2]} gap={[3, 5, 6]} paddingBlock={5} paddingInline={3}>
        <div
          className={classnames(styles.section, {
            [styles.selectedSection]: config === "PG",
          })}
          onClick={() => {
            setConfig("PG");
            setIsLoading(true);
          }}
        >
          <PGFilter />
        </div>
        <div
          className={classnames({
            [styles.section]: loginUserType === "SUPER",
            [styles.sectionDisable]: loginUserType === "MID",
            [styles.selectedSection]: config === "MANUAL",
          })}
          onClick={() => {
            if (loginUserType === "SUPER") {
              setConfig("MANUAL");
              setIsLoading(true);
            }
          }}
        >
          {loginUserType === "SUPER" ? <ManualFilter /> : <LockManualFilter />}
        </div>
      </Grid>
      <Grid col={[1, 2, 3]} gap={[3, 5, 6]} paddingBlock={5} paddingInline={3}>
        {allLeadInfo.map((prop, i) => {
          if (isLoading) return <LeadCardShimmer key={i} />;
          return (
            <LeadCard
              {...prop}
              key={i}
              hideContact={loginUserType !== "SUPER"}
              disableShowMore={loginUserType !== "SUPER"}
            />
          );
        })}
      </Grid>
    </Stack>
  );
};

export default Page;
