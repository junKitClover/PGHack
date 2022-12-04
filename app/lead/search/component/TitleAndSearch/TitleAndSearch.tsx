"use client";

import { Box, Text } from "component/atoms";
import styles from './TitleAndSearch.module.scss';
import { Flex, Stack } from "component/organisms";
import { Button } from "component/molecules";
import { LEAD_SEARCH_RESULT, LEAD_SEARCH_LOADING } from "state/leadStated";
import { useAtom } from "jotai";
import classNames from "classnames";
import { useEffect, useState, FormEvent } from "react";


export default function TitleAndFilter() {
  const [email, setEmail] = useState('');
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [, setLeadSearchResult] = useAtom(LEAD_SEARCH_RESULT);
  const [, setLeadSearchLoading] = useAtom(LEAD_SEARCH_LOADING);

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
      .then((data) => {
        setLeadSearchResult(data);
        setLeadSearchLoading(false);
      })
  }, [email, setLeadSearchLoading, setLeadSearchResult]);

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const [{value: name}, { value: email } , {value: phone}] = e.target as unknown as any;

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
