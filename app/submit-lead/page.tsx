'use client';

import { Grid, Stack, Flex, PageLayout } from 'component/organisms';
import { Text, Visible, Box } from 'component/atoms';
import { Button } from 'component/molecules';
import { PROJECT_LEAD_INFO } from 'state/projectState';
import { FormEvent, useState } from 'react';
import { useAtom } from 'jotai';
import Link from 'next/link';
import styles from './page.module.scss';

interface FirstFormProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const FirstForm = ({ onSubmit }: FirstFormProps) => {
  return (
    <Box backgroundColor="white" border rounded marginTop={10}>
    <Stack gap={5} paddingBlock={[2, 3, 6]} paddingInline={[2, 3, 5]}>
      <Flex justifyContent="center" alignItem="center" gap={10} direction="column">
        <Text type="title">Leads Submission Form</Text>
        <form onSubmit={onSubmit} method="post">
          <Grid col={[1, 2]} gap={[2, 3, 4]} padding={[2, 3, 5]}>
            <Text as="label">Name:</Text>
            <input name="name" type="text" placeholder="Name" className={styles.inputField} />
            <Text as="label">Phone Number:</Text>
            <input name="phoneNumber" type="text" placeholder="Phone Number" className={styles.inputField} />
            <Text as="label">Email:</Text>
            <input name="email" type="text" placeholder="Email" className={styles.inputField} />
            <Text as="label">Interested Project:</Text>
            <input name="interestedProject" type="text" placeholder="Email" className={styles.inputField} />
            <Text as="label">Budget:</Text>
            <input name="budget" type="text" placeholder="Budget" className={styles.inputField} />
            <Text as="label">Looking for:</Text>
            <input name="lookingfor" type="text" placeholder="Looking for" className={styles.inputField} />
          </Grid>
          <Flex justifyContent="spaceBetween" alignItem="center" marginBlock={4}>
            <button type='reset' className={styles.resetBtn}>Clear</button>
            <button type='submit' className={styles.submitBtn}>Submit</button>
          </Flex>
        </form>
      </Flex>
    </Stack>
    </Box>
  )
};
const Done = () => {
  return (
    <Stack gap={5} paddingBlock={[2, 3, 6]} paddingInline={[2, 3, 5]}>
      <Flex justifyContent="center" alignItem="center" gap={10} direction="column">
        <Text type="title">Done</Text>
        <Text type="subtitle">Submission success</Text>

        <Link href="/">Back to Homepage</Link>
      </Flex>
    </Stack>
  )
};

type TStatus = 'INIT' | 'FINAL';

function Page() {
  const [status, setStatus] = useState<TStatus>('INIT');
  const [leadRegister, setLeadRegister] = useAtom(PROJECT_LEAD_INFO);
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const [{ value: name }, , { value: email }, { value: projectName }] = event.target as unknown as any;
    setLeadRegister([...leadRegister, { name, email, projectName }])
    setStatus('FINAL');
    return false;
  };

  return (
    <PageLayout>
      <Stack gap={10}>
        <Visible visible={status === 'INIT'}>
          <FirstForm onSubmit={onSubmit} />
        </Visible>
        <Visible visible={status === 'FINAL'}>
          <Done />
        </Visible>
      </Stack>
    </PageLayout>
  );
}

export default Page;
