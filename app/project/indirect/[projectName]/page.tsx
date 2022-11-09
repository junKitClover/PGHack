"use client";

import { Box, Text, Visible, Icon } from "component/atoms";
import { useEffect, useState } from "react";
import { Stack, Grid, Flex } from "component/organisms";
import LeadCard, { LeadCardProps, LeadQuality } from "../../component/LeadCard";
import LeadCardShimmer from "../../component/LeadCardShimmer";
import InfoCard, { InfoCardProps } from "../../component/InfoCard";
import { projectInfo } from "../../data/project";
import { leadInfo } from "../../data/lead";
import { Button } from "component/molecules";
import Link from "next/link";
import Router from "next/router";
import styles from "./page.module.scss";
import classnames from "classnames";

const Page = ({ params: { projectName } }: any) => {
  const { name, detailList } = projectInfo[projectName];
  const [loginUserType, setLoginUserType] = useState("");
  const [config, setConfig] = useState("PG");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const localStorageUser = localStorage.getItem("userName") || "";
    const localStorageUserType = localStorage.getItem("userType") || "";

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
    <Stack gap={4}>
      <Text type="display" as="h1" padding={4}>
        {name}
      </Text>
      <Flex gap={2}>
        <Link href={`/project/direct/${projectName}`}>
          <Button type="outline">Direct Lead</Button>
        </Link>
        <Button type="contained">Indirect Lead</Button>
      </Flex>
      <Grid col={[1, 2]} gap={[3, 5, 6]} paddingBlock={5} paddingInline={3}>
        <div
          className={classnames(styles.section, {
            [styles.selectedSection]: config === "PG",
          })}
          onClick={() => {
            setConfig("PG");
          }}
        >
          <Grid paddingBlock={3} paddingInline={2} gap={3}>
            <Text as="label">PG Default filter will be base on: </Text>
            <ul>
              <li className={styles.listStyle}>
                <Icon iconName="done" size="small" color="success"/><Text>Location</Text>
              </li>
              <li className={styles.listStyle}>
                <Icon iconName="done" size="small" color="success"/><Text>Property type</Text>
              </li>
              <li className={styles.listStyle}>
                <Icon iconName="done" size="small" color="success"/><Text>Purpose</Text>
              </li>
              <li className={styles.listStyle}>
                <Icon iconName="done" size="small" color="success"/><Text>Budget Range</Text>
              </li>
              <li className={styles.listStyle}>
                <Icon iconName="done" size="small" color="success"/><Text>Submission Date</Text>
              </li>
            </ul>
            
          </Grid>
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
            }
          }}
        >
          <Grid paddingBlock={3} paddingInline={2} gap={3}>
            <Text as="label">Manual Config</Text>
            <Flex justifyContent="center" alignItem="center" direction="column" gap={3} paddingBlock={2}>
              <Icon iconName="lock" size="large" color="information"/>
              <Text as="label">Please contact your Account Manager to unlock</Text>
            </Flex>
          </Grid>
        </div>
      </Grid>
      <LeadQuality />
      <Grid col={[1, 2, 3]} gap={[3, 5, 6]} paddingBlock={5} paddingInline={3}>
        {leadInfo.map((prop, i) => {
          if (isLoading) return <LeadCardShimmer key={i} />;
          return <LeadCard {...prop} key={i} hideContact={loginUserType !== "SUPER"} disableShowMore={loginUserType !== "SUPER"}/>;
        })}
      </Grid>
    </Stack>
  );
};

export default Page;
