"use client";

import { Box, Text, Icon, ColorPlate, Visible } from "component/atoms";
import { useState, useEffect } from "react";
import { Stack, Flex } from "component/organisms";
import { Button } from "component/molecules";
import { TColor, TTextColor } from "styles/Color";
import styles from "./LeadCard.module.scss";
import { SUPER_USER } from "../../user";
import classnames from "classnames";

type TLeadScore = "Hot" | "Warm" | "Cold";

interface ColorProps {
  background: TColor;
  color: TTextColor;
}

const ColorMapping: Record<TLeadScore, ColorProps> = {
  Hot: {
    background: "successDarker",
    color: "white",
  },
  Warm: {
    background: "success",
    color: "white",
  },
  Cold: {
    background: "successLighter",
    color: "black",
  },
};

export interface LeadCardProps {
  name: string;
  phoneNumber: string;
  email: string;
  budegetRange: string;
  location: string;
  propertyType: string;
  searchFor: string;
  lastSearch: string;
  signUpTime: string;
  leadScore: TLeadScore;
  isVerified: boolean;
  hideContact?: boolean;
  disableShowMore?: boolean;
  lastSearch30Days: Array<string>;
  propertiesView30Days: Array<string>;
  leadSubmit30Days: string;
  isInterestedNewProject: "STRONG" | "MODERATE";
}

export const LeadQuality = () => (
  <Box border rounded paddingInline={3} paddingBlock={4}>
    <Flex gap={3}>
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
        <ColorPlate backgroundColor="successDarker" />
        <Text>Hot</Text>
      </Flex>
      <Flex gap={3}>
        <ColorPlate backgroundColor="success" />
        <Text>Warm</Text>
      </Flex>
      <Flex gap={3}>
        <ColorPlate backgroundColor="successLighter" />
        <Text>Cold</Text>
      </Flex>
    </Flex>
  </Box>
);

const LeadCard = ({
  name,
  phoneNumber,
  email,
  budegetRange,
  propertyType,
  location,
  searchFor,
  lastSearch,
  signUpTime,
  leadScore,
  isVerified,
  lastSearch30Days,
  leadSubmit30Days,
  propertiesView30Days,
  isInterestedNewProject,
  hideContact = false,
  disableShowMore = false,
}: LeadCardProps) => {
  const [loginUserType, setLoginUserType] = useState("");
  const [showMore, setShowMore] = useState(false);

  const showMoreHandler = () => {
    setShowMore((prev) => !prev);
  };

  useEffect(() => {
    const localStorageUserType = localStorage.getItem("userType") || "";
    setLoginUserType(localStorageUserType);
  }, [loginUserType]);

  return (
    <Box
      border
      rounded
      className={showMore ? styles.showMore : styles.showLess}
    >
      <div className={styles.container}>
        <Flex
          padding={[2, 4]}
          gap={3}
          alignItem="center"
          backgroundColor={
            loginUserType === "NORMAL"
              ? "white"
              : ColorMapping[leadScore].background
          }
        >
          {isVerified && loginUserType !== "NORMAL" && (
            <Icon
              iconName="verified"
              title="OTP Verified"
              size="small"
              color={ColorMapping[leadScore].color}
              position="top center"
            />
          )}
          <Stack gap={1}>
            <Text
              size="medium"
              color={
                loginUserType === "NORMAL"
                  ? "black"
                  : ColorMapping[leadScore].color
              }
            >
              {name}
            </Text>
            <Visible visible={!hideContact}>
              <Flex>
                <a href={`tel:${phoneNumber}`}>
                  <Text
                    size="xSmall"
                    color={
                      loginUserType === "NORMAL"
                        ? "black"
                        : ColorMapping[leadScore].color
                    }
                  >
                    {phoneNumber}
                  </Text>
                </a>
                <Text
                  size="xSmall"
                  weight="bold"
                  color={ColorMapping[leadScore].color}
                >
                  &nbsp;&nbsp;.&nbsp;&nbsp;
                </Text>
                <a href={`mailto:${email}`}>
                  <Text
                    size="xSmall"
                    color={
                      loginUserType === "NORMAL"
                        ? "black"
                        : ColorMapping[leadScore].color
                    }
                  >
                    {email}
                  </Text>
                </a>
              </Flex>
            </Visible>
            <Visible visible={hideContact}>
              <Flex gap={3} alignItem="center">
                <Icon
                  iconName="lock"
                  size="small"
                  color={ColorMapping[leadScore].color}
                />
                <Text type="tooltips" color={ColorMapping[leadScore].color}>
                  Please contact your Account Manager to unlock
                </Text>
              </Flex>
            </Visible>
          </Stack>
          {loginUserType !== "NORMAL" && (
            <div className={classnames(styles.leadScore, {
              [styles.leadScore_hot]: leadScore==='Hot',
              [styles.leadScore_warm]: leadScore==='Warm',
              [styles.leadScore_cold]: leadScore==='Cold',
            })}>
              <Text color="white" size="xSmall">
                {leadScore}
              </Text>
            </div>
          )}
        </Flex>
      </div>
      <Box padding={3} backgroundColor="greyLight">
        <Text as="span" color="black" size="xSmall" weight="thin">
          Lead Submission {lastSearch}
        </Text>
      </Box>
      <Visible visible={loginUserType !== "NORMAL"} isAutoWidth={false}>
        <Flex direction={"column"} padding={[2, 4, 6]} backgroundColor="white">
          <Flex direction={["column", "row"]} gap={[2, 10]}>
            <Stack gap={2}>
              <Flex gap={2}>
                <Text as="span" color="black" size="small" weight="semiBold">
                  Budget:
                </Text>
                <Text as="span" color="black" size="small" weight="thin">
                  {budegetRange}
                </Text>
              </Flex>
              <Flex gap={2}>
                <Text as="span" color="black" size="small" weight="semiBold">
                  Purpose:
                </Text>
                <Text as="span" color="black" size="small" weight="thin">
                  {searchFor}
                </Text>
              </Flex>
              <Flex gap={2}>
                <Text as="span" color="black" size="small" weight="semiBold">
                  Property Type:
                </Text>
                <Text as="span" color="black" size="small" weight="thin">
                  {propertyType}
                </Text>
              </Flex>
              <Flex gap={2}>
                <Text as="span" color="black" size="small" weight="semiBold">
                  Location:
                </Text>
                <Text as="span" color="black" size="small" weight="thin">
                  {location}
                </Text>
              </Flex>
            </Stack>
            <Visible visible={showMore}>
              <Stack gap={2}>
                <Flex gap={2} alignItem="center">
                  <Text as="span" color="black" size="small" weight="semiBold">
                    Search done last 30 days:
                  </Text>
                  <Flex gap={1}>
                    {lastSearch30Days.map((key) => (
                      <Button isFloat key={key} size="small">{key}</Button>
                    ))}
                  </Flex>
                </Flex>
                <Flex gap={2} alignItem="center">
                  <Text as="span" color="black" size="small" weight="semiBold">
                    Properties viewed last 30 days:
                  </Text>
                  <Flex gap={1}>
                    {propertiesView30Days.map((key) => (
                      <Button isFloat key={key} size="small">{key}</Button>
                    ))}
                  </Flex>
                </Flex>
                <Flex gap={2}>
                  <Text as="span" color="black" size="small" weight="semiBold">
                    Leads Submitted last 30 days:
                  </Text>
                  <Text as="span" color="black" size="small" weight="thin">
                    {leadSubmit30Days}
                  </Text>
                </Flex>
                <Flex gap={2}>
                  <Text as="span" color="black" size="small" weight="semiBold">
                    New Project Interest:
                  </Text>
                  <Text as="span" color={isInterestedNewProject === "STRONG" ? "successDarker" : "warningDarker"} size="small" weight="semiBold" >
                    {isInterestedNewProject}
                  </Text>
                </Flex>
              </Stack>
            </Visible>
          </Flex>
          <Flex gap={4} justifyContent="spaceBetween" paddingTop={5}>
            <Button
              type={"outline"}
              iconName={disableShowMore ? "lock" : ""}
              disabled={disableShowMore}
              onClick={showMoreHandler}
            >
              {showMore ? "Show Less" : "Show More"}
            </Button>
            <Button iconName="chat" size="small" isFloat type="outline" />
          </Flex>
        </Flex>
      </Visible>
      <Visible visible={loginUserType === "NORMAL"} isAutoWidth={false}>
        <Flex
          padding={[2, 4, 6]}
          gap={5}
          direction="column"
          backgroundColor="greyLighter"
          justifyContent="center"
          alignItem="center"
        >
          <Icon iconName="lock" size="large" color="informationDarker" />
          <Text type="tooltips">
            Please contact your Account Manager to unlock
          </Text>
        </Flex>
      </Visible>
    </Box>
  );
};

export default LeadCard;
