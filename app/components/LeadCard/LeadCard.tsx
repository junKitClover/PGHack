"use client";

import { Box, Text, Icon, Visible } from "component/atoms";
import { useState, useEffect } from "react";
import { Stack, Flex } from "component/organisms";
import { TColor, TTextColor } from "styles/Color";
import styles from "./LeadCard.module.scss";
import classnames from "classnames";
import { LeadDisplayData } from "../../type/LeadType";

type TLeadScore = "Hot" | "Warm" | "Cold";

interface ColorProps {
  background: TColor;
  color: TTextColor;
}

interface LeadCardProps extends LeadDisplayData{
  name: string
}

const LeadCard = ({
  name,
  country,
  leadQualification,
  email,
  phoneNumber,
  lastLogin,
  prefConfig,
  prefPrice,
  topSearchDistricts,
  topSearchProperties,
  topSearchRegion,
  interestNewProject
}: LeadCardProps) => {
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
                {lastLogin}
              </Text>
            </Flex>
          </Stack>
          <div
            className={classnames(styles.interestedNewProject, {
              [styles.interestedNewProject_strong]: interestNewProject === "Strong",
              [styles.interestedNewProject_normal]: interestNewProject === "Normal",
              [styles.interestedNewProject_weak]: interestNewProject === "Weak",
            })}
          >
            <Text color="white" size="xSmall">
              Interest new project  <Text color="white" size="xSmall" weight="bold">{interestNewProject}</Text>
            </Text>
          </div>
          <div
            className={classnames(styles.leadScore, {
              [styles.leadScore_hot]: leadQualification === "Hot",
              [styles.leadScore_warm]: leadQualification === "Warm",
              [styles.leadScore_cold]: leadQualification === "Cold",
            })}
          >
            <Text color="white" size="xSmall">
              {leadQualification}
            </Text>
          </div>
        </Flex>
      </div>
      <Flex direction={"column"} paddingTop={5} backgroundColor="white" className={styles.borderBottomRound}>
        <Flex direction={"column"} gap={2}>
          <Stack gap={4}>
            <Flex gap={2} direction={["column", , "row"]}>
              <Text as="span" type="label" color="secondaryFontColor">
                From
              </Text>
              <Text as="span" type="labelValue">
                {country}
              </Text>
            </Flex>
            <Flex gap={2} direction={"column"}>
              <Text as="span" type="label" color="secondaryFontColor">
                Top search property
              </Text>
              <Text as="span" type="labelValue">
                {topSearchProperties.filter(str => str !== '').join(', ')}
              </Text>
            </Flex>
            <Flex gap={2} direction={"column"}>
              <Text as="span" type="label" color="secondaryFontColor">
                Top search districts
              </Text>
              <Text as="span" type="labelValue">
                {topSearchDistricts.filter(str => str !== '').join(', ')}
              </Text>
            </Flex>
            <Flex gap={2} direction={"column"}>
              <Text as="span" type="label" color="secondaryFontColor">
                Top search regions
              </Text>
              <Text as="span" type="labelValue">
                {topSearchRegion.filter(str => str !== '').join(', ')}
              </Text>
            </Flex>
            <Flex gap={2} direction={"column"}>
              <Text as="span" type="label" color="secondaryFontColor">
                Configuration Preferences
              </Text>
              <Text as="span" type="labelValue">
                {prefConfig.filter(str => str !== '').join(', ')}
              </Text>
            </Flex>
            <Flex gap={2} direction={"column"}>
              <Text as="span" type="label" color="secondaryFontColor">
                Preferences budget range
              </Text>
              <Text as="span" type="labelValue">
                {prefPrice.filter(str => str !== '').join(', ')}
              </Text>
            </Flex>
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
                <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_1_7142)">
                    <path d="M2.18359 21.3522L3.526 16.4735C2.6981 15.0455 2.26253 13.4257 2.263 11.7666C2.26535 6.57549 6.50919 2.35217 11.7233 2.35217C14.254 2.35311 16.6296 3.33398 18.4151 5.1133C20.2016 6.89262 21.1845 9.25803 21.1836 11.7736C21.1812 16.9647 16.9374 21.1885 11.7233 21.1885C11.7238 21.1885 11.7228 21.1885 11.7233 21.1885H11.7191C10.1356 21.188 8.57989 20.7923 7.19848 20.0425L2.18359 21.3522Z" fill="url(#paint0_linear_1_7142)" />
                  </g>
                  <path d="M1.83252 22L3.24534 16.8647C2.37396 15.3617 1.9156 13.6567 1.91608 11.9099C1.91846 6.44566 6.38514 2 11.8745 2C14.5383 2.00095 17.0383 3.03334 18.9186 4.90658C20.7983 6.77981 21.8335 9.27001 21.8325 11.918C21.8301 17.3818 17.3625 21.8284 11.8745 21.8284C11.8741 21.8284 11.875 21.8284 11.8745 21.8284H11.8702C10.2039 21.8279 8.56619 21.4116 7.11184 20.6221L1.83252 22ZM7.3563 18.8277L7.65853 19.006C8.92906 19.7565 10.3858 20.1534 11.8712 20.1543H11.8745C16.4362 20.1543 20.1495 16.4592 20.1514 11.9171C20.1518 9.71585 19.2919 7.64631 17.7292 6.08964C16.1665 4.53297 14.0885 3.67502 11.8774 3.67407C7.31189 3.67407 3.59914 7.36873 3.59723 11.9104C3.59675 13.4666 4.03411 14.9824 4.86251 16.2938L5.0597 16.6056L4.22318 19.6453L7.3563 18.8277Z" fill="url(#paint1_linear_1_7142)" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.42362 7.83703C9.2395 7.43936 9.04546 7.43157 8.86984 7.4247C8.72632 7.41874 8.5625 7.4192 8.39821 7.4192C8.23439 7.4192 7.96765 7.47921 7.74198 7.71791C7.51631 7.9566 6.88086 8.53432 6.88086 9.70901C6.88086 10.8837 7.76275 12.019 7.8855 12.1784C8.00872 12.3374 9.58744 14.8251 12.0882 15.7822C14.1664 16.5775 14.5894 16.4195 15.0407 16.3796C15.4921 16.3398 16.4962 15.8024 16.7016 15.2448C16.9065 14.6872 16.9065 14.2094 16.8451 14.1095C16.7837 14.0101 16.6195 13.9505 16.3735 13.831C16.1275 13.7114 14.918 13.1337 14.6923 13.0544C14.4667 12.9751 14.3028 12.9348 14.1385 13.174C13.9747 13.4127 13.5031 13.9505 13.3596 14.1095C13.216 14.2689 13.0725 14.2891 12.8266 14.1695C12.5806 14.0499 11.7879 13.798 10.848 12.9848C10.1167 12.3521 9.62285 11.5705 9.47933 11.3313C9.33581 11.0926 9.46375 10.963 9.58744 10.8443C9.69791 10.7376 9.83341 10.5657 9.95663 10.426C10.0794 10.2867 10.1204 10.1873 10.2026 10.0279C10.2847 9.86845 10.2437 9.72917 10.1823 9.60959C10.1209 9.49002 9.64268 8.30892 9.42362 7.83703Z" fill="white" />
                  <defs>
                    <filter id="filter0_d_1_7142" x="0.183594" y="0.352173" width="23" height="23" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="1" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_7142" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_7142" result="shape" />
                    </filter>
                    <linearGradient id="paint0_linear_1_7142" x1="11.6835" y1="21.3522" x2="11.6835" y2="2.35251" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#20B038" />
                      <stop offset="1" stop-color="#60D66A" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_1_7142" x1="11.8328" y1="22.0001" x2="11.8328" y2="2.00055" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#F9F9F9" />
                      <stop offset="1" stop-color="white" />
                    </linearGradient>
                  </defs>
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
