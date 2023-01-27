"use client";

import { Box, Text, Icon } from "component/atoms";
import styles from './TitleAndSearch.module.scss';
import LeadCard from "app/components/LeadCard/LeadCard";
import { Flex, Stack } from "component/organisms";
import Select, { StylesConfig } from 'react-select';
import { Button } from "component/molecules";
import { LEAD_PAGE } from "state/leadStated";
import { TPropertyName, PROJECT_LEAD_INFO, PROJECT_LEAD_EMAIL_WITH_NAME } from 'state/projectState';
import { useAtom } from "jotai";
import classNames from "classnames";
import { useState, FormEvent, useEffect } from "react";
import { Result, LeadDisplayData, LeadResult } from '../../../../type/LeadType';
import Link from 'next/link';

const prettyDataSet = (data: Result): Array<LeadDisplayData> => {
  if (data.temp_sam_us_leads360_leads.length > 0) {
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
    }: LeadResult): LeadDisplayData => ({
      country,
      leadQualification: lead_qualification_category,
      email: contact_email,
      phoneNumber: contact_mobile,
      lastLogin: audit_lastLogin,
      topSearchProperties: [top_property_name1 || '', top_property_name2 || '', top_property_name3 || '', top_property_name4 || '', top_property_name5 || ''],
      topSearchRegion: [top_region1 || '', top_region2 || '', top_region3 || '', top_region4 || '', top_region5 || ''],
      topSearchDistricts: [top_district1 || '', top_district2 || '', top_district3 || '', top_district4 || '', top_district5 || ''],
      interestNewProject: new_project_interest || '',
      newProject: [new_project_names_enquired1 || '', new_project_names_enquired2 || '', new_project_names_enquired3 || ''],
      prefPrice: [pref_price_1 || '', pref_price_2 || '', pref_price_3 || ''],
      prefConfig: [pref_config_1 || '', pref_config_2 || '', pref_config_3 || ''],
    }));
  }
  return [];
}


interface StatusProps{
  name: string;
  leadSearchResult: Array<LeadDisplayData>;
  isLoading: boolean;
}

const Status = ({isLoading, leadSearchResult,name}: StatusProps) => {
  if(isLoading){
    return (
      <Flex justifyContent="center" alignItem="center" className={styles.fullSize}>
        <Text>Loading ...</Text>
      </Flex>
    );
  }
  if(leadSearchResult.length > 0){
    return (<>{leadSearchResult.map((lead, i) => (<LeadCard key={i} {...lead} name={name} shouldShowAllAtFirst/>))}</>);
  }
  return (
    <Flex justifyContent="center" alignItem="center" className={styles.fullSize}>
    <Text>No result found</Text>
  </Flex>
  )
}

interface LeadProjectOption {
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
  { value: 'parc-clematis', label: 'Parc Clematis' },
  { value: 'parc-esta', label: 'Parc Esta' },
  { value: 'archipelago', label: 'Archipelago' },
  { value: 'the-mezzo', label: 'The Mezzo' },
  { value: 'viva-vista', label: 'Viva Vista' },
  { value: 'river-place', label: 'River Place' },
  { value: 'shelford-23', label: 'Shelford 23' },
];

export default function TitleAndFilter() {
  const [email, setEmail] = useState('');
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidName, setInvalidName] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [project, setProject] = useState<TPropertyName | null>(null);
  const [leadSearchResult, setLeadSearchResult] = useState<Array<LeadDisplayData>>([]);
  const [leadSearchLoading, setLeadSearchLoading] = useState(false);
  const [name, setLeadUserName] = useState('');
  const [leadRegister, setLeadRegister] = useAtom(PROJECT_LEAD_INFO);
  const [leadEmailWithName, setLeadEmailWithName] = useAtom(PROJECT_LEAD_EMAIL_WITH_NAME);
  const [, setLeadPage] = useAtom(LEAD_PAGE);
  setLeadPage('Search Lead');


  const validateEmail = (email: string) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) ? true : false;

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const [{ value: name }, { value: email }, { value: phone }] = e.target as unknown as any;

    if (name) {
      setLeadUserName(name);
      setInvalidName(false);
    }
    else {
      setInvalidName(true);
      return;
    }

    if (email && validateEmail(email)) {
      setEmail(email);
      setLeadSearchLoading(true);
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
      setInvalidEmail(false);
    } else {
      setInvalidEmail(true);
    }
  }

  const onImport = () => {
    if (project) {
      setLeadRegister({ ...leadRegister, [project]: [...leadRegister[project], { name, email }] });
      setLeadEmailWithName({ ...leadEmailWithName, [email]: name });
      setSubmitted(true);
    }
  }

  return (
    <Stack gap={4}>
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
                  <Box className={classNames(styles.filterBox)}>
                    <Button>Search</Button>
                  </Box>
                </Flex>
              </Stack>
            </form>
          </Box>
          {

            (leadSearchResult.length > 0 && !submitted) && <Box border rounded paddingBlock={8} paddingInline={4}>
              <Flex justifyContent="spaceEvenly" alignItem="center" direction="column" gap={8}>
                <Text weight="semiBold">Record found</Text>
                <Select
                  options={leadTypeOptions}
                  isMulti={false}
                  onChange={(props) => { if (props) { setProject(props?.value as unknown as TPropertyName); } }}
                  placeholder="Select Project"
                  className={styles.selecter}
                  styles={leadTypeStyles} />
                <Button onClick={onImport}>Import</Button>
              </Flex>
            </Box>

          }
          {
            submitted && <Box border rounded paddingBlock={8} paddingInline={4}>
              <Flex justifyContent="spaceEvenly" alignItem="center" direction="column" gap={8}>
                <Icon iconName="check_circle" size="xLarge" color="success" />
                <Text weight="semiBold">Imported to project {leadTypeOptions.find(({ value }) => value === project)?.label}</Text>
                <Link href={`/project/${project}`}><Button>Go to project</Button></Link>
              </Flex>
            </Box>
          }
        </Stack>
      </Box>
      <Status isLoading={leadSearchLoading} leadSearchResult={leadSearchResult} name={name}/>
    </Stack>
  );
}
