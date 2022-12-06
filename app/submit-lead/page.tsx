'use client';

import { Grid, Stack, Flex, PageLayout } from 'component/organisms';
import { Text, Visible, Box } from 'component/atoms';
import { PROJECT_LEAD_INFO, TPropertyName, PROJECT_LEAD_EMAIL_WITH_NAME } from 'state/projectState';
import Select, { StylesConfig } from 'react-select';
import { FormEvent, useState } from 'react';
import { useAtom } from 'jotai';
import Link from 'next/link';
import styles from './page.module.scss';

export interface LeadProjectOption {
  readonly value: string;
  readonly label: string;
}

const leadTypeStyles: StylesConfig<LeadProjectOption> = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'white',
    border: '1px solid #CCC',
    borderRadius: '8px',
    minHeight: '48px',
    paddingBlock: '12px',
    paddingInline: '4px'
  }),
  option: (styles) => {
    return {
      ...styles,
    };
  },
  input: (styles) => ({ ...styles }),
  placeholder: (styles) => ({ ...styles }),
  singleValue: (styles) => ({ ...styles }),
  multiValue: (styles) => ({ ...styles }),
  dropdownIndicator: (styles) => ({ ...styles, display: 'none' }),
  indicatorSeparator: (styles) => ({ ...styles, display: 'none' }),
};

const leadTypeOptions: readonly LeadProjectOption[] = [
  { value: 'parc-esta', label: 'Parc Esta' },
  { value: 'archipelago', label: 'Archipelago' },
  { value: 'the-mezzo', label: 'The Mezzo' },
  { value: 'viva-vista', label: 'Viva Vista' },
  { value: 'river-place', label: 'River Place' },
  { value: 'shelford-23', label: 'Shelford 23' },
];

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
  const [emailWithName, setLeadEmailWithName] = useAtom(PROJECT_LEAD_EMAIL_WITH_NAME);
  const [project, setProject] = useState<TPropertyName | null>(null);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const [{ value: name }, { value: email }] = event.target as unknown as any;
    if (project) {
      setLeadRegister({ ...leadRegister, [project]: [...leadRegister[project], { name, email }] });
      setLeadEmailWithName({ ...emailWithName, [email]: name })
    }
    setStatus('FINAL');
    return false;
  };

  return (
    <PageLayout>
      <Stack gap={10}>
        <Visible visible={status === 'INIT'}>
          <Box backgroundColor="white" border rounded marginTop={10} paddingBlock={[2, 3, 8]} paddingInline={[2, 3, 6]}>
            <Stack gap={5} >
              <Flex justifyContent="center" alignItem="center" gap={10} direction="column">
                <Text type="title">Leads Submission Form</Text>
                <form onSubmit={onSubmit} method="post">
                  <Grid col={[1, 2]} gap={[2, 3, 4]} padding={[2, 3, 5]}>
                    <Flex alignItem="center"><Text as="label">Name:</Text></Flex>
                    <input name="name" type="text" placeholder="Name" className={styles.inputField} required />
                    <Flex alignItem="center"><Text as="label">Email:</Text></Flex>
                    <input name="email" type="text" placeholder="Email" className={styles.inputField} required />
                    <Flex alignItem="center"><Text as="label">Interested Project:</Text></Flex>
                    <Select
                      options={leadTypeOptions}
                      isMulti={false}
                      onChange={(props) => { if (props) { setProject(props?.value as unknown as TPropertyName); } }}
                      placeholder="Select Project"
                      className={styles.selecter}
                      styles={leadTypeStyles} />
                  </Grid>
                  <Flex justifyContent="spaceBetween" alignItem="center" marginBlock={4}>
                    <button type='reset' className={styles.resetBtn}>Clear</button>
                    <button type='submit' className={styles.submitBtn}>Submit</button>
                  </Flex>
                </form>
              </Flex>
            </Stack>
          </Box>
        </Visible>
        <Visible visible={status === 'FINAL'}>
          <Done />
        </Visible>
      </Stack>
    </PageLayout>
  );
}

export default Page;
