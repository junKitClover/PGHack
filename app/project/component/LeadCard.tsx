"use client";

import { Box, Text, Icon, Visible } from "component/atoms";
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
    background: "informationDarker",
    color: "fontColor",
  },
  Warm: {
    background: "information",
    color: "fontColor",
  },
  Cold: {
    background: "informationLighter",
    color: "fontColor",
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
      paddingBlock={5}
      paddingInline={4}
      className={styles.cardBase}
    >
      <div className={styles.container}>
        <Flex
          gap={3}
          alignItem="center"
          backgroundColor="white"
          className={styles.borderTopRound}
        >
          {isVerified && loginUserType !== "NORMAL" && (
            <Icon
              iconName="verified"
              title="OTP Verified"
              size="small"
              color="primaryDarker"
              position="top center"
            />
          )}
          <Stack gap={1}>
            <Text
              size="medium"
              color="fontColor"
            >
              {name}
            </Text>
            <Flex gap={1}>
              <Icon iconName="schedule" size="xSmall" iconOpticalSize={20} color="secondaryFontColor" />
              <Text
                size="xSmall"
                color="secondaryFontColor"
              >
                {lastSearch}
              </Text>
            </Flex>
          </Stack>
          <div
            className={classnames(styles.leadScore, {
              [styles.leadScore_hot]: leadScore === "Hot",
              [styles.leadScore_warm]: leadScore === "Warm",
              [styles.leadScore_cold]: leadScore === "Cold",
            })}
          >
            <Text color="white" size="xSmall">
              {leadScore}
            </Text>
          </div>
        </Flex>
      </div>
      <Flex direction={"column"} paddingTop={5} backgroundColor="white" className={styles.borderBottomRound}>
        <Flex direction={"column"} gap={2}>
          <Stack gap={2}>
            <Flex gap={2}>
              <Text as="span" type="label" color="secondaryFontColor">
                Budget
              </Text>
              <Text as="span" type="labelValue">
                {budegetRange}
              </Text>
            </Flex>
            <Flex gap={2}>
              <Text as="span" type="label" color="secondaryFontColor">
                Property Type
              </Text>
              <Text as="span" type="labelValue">
                {propertyType}
              </Text>
            </Flex>
            <Flex gap={2}>
              <Text as="span" type="label" color="secondaryFontColor">
                Location
              </Text>
              <Text as="span" type="labelValue">
                {location}
              </Text>
            </Flex>
            <Visible visible={showMore}>
              <Stack gap={2}>
                <Flex
                  gap={2}
                  alignItem={["start", "center"]}
                  direction={["column", "row"]}
                >
                  <Text as="span" type="label" color="secondaryFontColor">
                    Search done last 30 days
                  </Text>
                  <Text as="span" type="labelValue">
                    {lastSearch30Days.join(',')}
                  </Text>
                </Flex>
                <Flex
                  gap={2}
                  alignItem={["start", "center"]}
                  direction={["column", "row"]}
                >
                  <Text as="span" type="label" color="secondaryFontColor" >
                    Properties viewed last 30 days
                  </Text>
                  <Text as="span" type="labelValue">
                    {propertiesView30Days.join(',')}
                  </Text>
                </Flex>
                <Flex gap={2} direction={["column", "row"]}>
                  <Text as="span" type="label" color="secondaryFontColor">
                    Leads Submitted last 30 days
                  </Text>
                  <Text as="span" type="labelValue">
                    {leadSubmit30Days}
                  </Text>
                </Flex>
                <Flex gap={2} direction={["column", "row"]}>
                  <Text as="span" type="label" color="secondaryFontColor">
                    New Project Interest
                  </Text>
                  <Text
                    as="span"
                    type="labelValue"
                  >
                    {isInterestedNewProject}
                  </Text>
                </Flex>
              </Stack>
            </Visible>
            <a
              type="text"
              onClick={showMoreHandler}
              className={styles.link}
            >
              <Flex gap={2} alignItem="center">
                <Text as="span" type="label" color="error">
                  {showMore ? "Show Less" : "Show More"}
                </Text>
                <Icon iconName="expand_more" size="xSmall" color="error" className={showMore ? styles.showMoreIcon : styles.showLessIcon}/>
              </Flex>
            </a>
            <hr className={styles.line} />
            <Flex justifyContent="spaceBetween" alignItem="center">
              <Stack gap={2}>
                <Flex gap={1}>
                  <Icon iconName="call" color="secondaryFontColor" size="xSmall" />
                  <a href={`tel:${phoneNumber}`} className={styles.link}>
                    <Text
                      size="xSmall"
                      color="fontColor"
                    >
                      {phoneNumber}
                    </Text>
                  </a>
                </Flex>
                <Flex gap={1}>
                  <Icon iconName="mail" color="secondaryFontColor" size="xSmall" />
                  <a href={`mailto:${email}`} className={styles.link}>
                    <Text
                      size="xSmall"
                      color="fontColor"
                    >
                      {email}
                    </Text>
                  </a>
                </Flex>
              </Stack>
              <a className={styles.link}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#74757f" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
                </svg>
              </a>
            </Flex>
          </Stack>

        </Flex>
      </Flex>
    </Box>
  );
};

export default LeadCard;
