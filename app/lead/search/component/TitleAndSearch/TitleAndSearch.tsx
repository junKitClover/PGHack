"use client";

import { Box, Text } from "component/atoms";
import styles from './TitleAndSearch.module.scss';
import { Flex, Stack } from "component/organisms";
import { Button } from "component/molecules";
import { LEAD_SEARCH_RESULT, LEAD_SEARCH_LOADING, LEAD_USER_NAME } from "state/leadStated";
import { useAtom } from "jotai";
import classNames from "classnames";
import { useEffect, useState, FormEvent } from "react";
import { Result, LeadDisplayData, LeadResult } from '../../LeadType';

const prettyDataSet = (data: Result): Array<LeadDisplayData> => {
  if(data.temp_sam_us_leads360_leads.length > 0) {
    return data.temp_sam_us_leads360_leads.map(({
      country,
      lead_qualification_category,
      contact_email,
      contact_mobile,
      audit_lastLogin,
      top_property_name1,
      top_property_name2,
      top_property_name3,
      top_property_name4,
      top_property_name5,
      top_region1,
      top_region2,
      top_region3,
      top_region4,
      top_region5,
      top_district1,
      top_district2,
      top_district3,
      top_district4,
      top_district5,
      new_project_names_enquired1,
      new_project_names_enquired2,
      new_project_names_enquired3,
      new_project_interest,
      pref_price_1,
      pref_price_2,
      pref_price_3,
      pref_config_1,
      pref_config_2,
      pref_config_3,
    }: LeadResult):LeadDisplayData =>({
      country,
      leadQualification: lead_qualification_category,
      email:contact_email,
      phoneNumber: contact_mobile,
      lastLogin: audit_lastLogin,
      topSearchProperties: [top_property_name1 || '',top_property_name2 ||'',top_property_name3 || '',top_property_name4 || '',top_property_name5||''],
      topSearchRegion: [top_region1 || '',top_region2 ||'',top_region3 || '',top_region4 || '',top_region5 || ''],
      topSearchDistricts: [top_district1 || '',top_district2 ||'',top_district3 || '',top_district4 || '',top_district5 ||''],
      interestNewProject: new_project_interest || '',
      newProject: [new_project_names_enquired1 || '',new_project_names_enquired2 || '',new_project_names_enquired3 || ''],
      prefPrice:[pref_price_1 || '',pref_price_2 || '',pref_price_3 || ''],
      prefConfig: [pref_config_1 || '',pref_config_2 || '',pref_config_3 || ''],
    }));
  }
  return [];
}


export default function TitleAndFilter() {
  const [email, setEmail] = useState('');
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidName, setInvalidName] = useState(false);
  const [, setLeadSearchResult] = useAtom(LEAD_SEARCH_RESULT);
  const [, setLeadSearchLoading] = useAtom(LEAD_SEARCH_LOADING);
  const [, setLeadUserName] = useAtom(LEAD_USER_NAME);

  const validateEmail = (email: string) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) ? true : false;

  useEffect(() => {
    setLeadSearchLoading(true)
    fetch('https://propertyguru.hasura.app/api/rest/getLeads360ByEmail', {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'x-hasura-admin-secret': 'Sfuro9op4sS5tmD98vlqcjEZirCddguhzg4WxNo3415CLsjqdK26jl6AzOAkwbWa',
      },
      body: JSON.stringify({ "emailId": email })
    })
      .then((res) => res.json())
      .then((data: Result) => {
        setLeadSearchResult(prettyDataSet(data));
        setLeadSearchLoading(false);
      })
  }, [email, setLeadSearchLoading, setLeadSearchResult]);

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const [{value: name}, { value: email } , {value: phone}] = e.target as unknown as any;

    if(name){
      setLeadUserName(name);
      setInvalidName(false);
    }
    else{
      setInvalidName(true);
      return;
    }

    if (email && validateEmail(email)) {
      setEmail(email);
      setInvalidEmail(false);
    } else {
      setInvalidEmail(true);
    }

    
  }

  return (
    <Box paddingBlock={4} paddingInline={[4, , 6]} border rounded marginTop={[4, 12]}>
      <Stack gap={4}>
        <Text type="title">Search Lead</Text>
        <Box border rounded paddingBlock={3} paddingInline={4}>
          <form onSubmit={onSubmitHandler} method="post">
            <Stack gap={2}>
              <Text type="tooltips">Search by</Text>
              <Flex gap={4} direction={['column', , 'row']} alignItem="center">
                <Box className={classNames(styles.filterBox)}>
                  <input name="LeadName" type="text" placeholder="Enter Name" className={styles.textInput} />
                  {invalidName && <Text type="tooltips" color="error">** Name is required</Text>}
                </Box>
                <Box className={classNames(styles.filterBox, styles.secondBox)}>
                  <input name="LeadEmail" type="text" placeholder="Enter Email" className={styles.textInput} required />
                  {invalidEmail && <Text type="tooltips" color="error">** Invalid Email</Text>}
                </Box>
                <Box className={classNames(styles.filterBox, styles.secondBox)}>
                  <input name="LeadPhoneNumber" type="number" placeholder="Enter Phone Number" className={styles.textInput} />
                </Box>
                <Box className={classNames(styles.filterBox)}>
                  <Button>Search</Button>
                </Box>
              </Flex>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Box>
  );
}
