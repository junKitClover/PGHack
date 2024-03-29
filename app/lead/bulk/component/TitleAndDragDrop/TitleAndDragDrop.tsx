"use client";

import { Box, Icon, Text, TextBaseProps, Visible } from "component/atoms";
import { Button } from "component/molecules";
import styles from './TitleAndDragDrop.module.scss';
import Select, { StylesConfig } from 'react-select';
import { CSVLink } from "react-csv";
import { Flex, Stack } from "component/organisms";
import { TPropertyName, PROJECT_LEAD_INFO, PROJECT_LEAD_EMAIL_WITH_NAME } from 'state/projectState';
import { useAtom } from "jotai";
import { LeadDisplayData, Result } from 'app/type/LeadType';
import { useState, ChangeEvent } from "react";
import { parse } from 'papaparse';
import { prettyDataSet } from "app/helper/prettyDataSet";
import Link from 'next/link';


interface CSV<T> {
  data: Array<T>;
  meta: {
    delimiter: string,
    linebreak: string,
    aborted: boolean,
    truncated: boolean,
    cursor: number,
    fields: Array<string>,
  }
};
interface PreviewTableProps {
  data: Array<LeadDisplayData>;
  name: Record<string, string>;
}

const TableCell = ({ children, ...restProps }: TextBaseProps) => (<td className={styles.tableCell}><Text {...restProps}>{children}</Text></td>)

const PreviewTable = ({ data, name }: PreviewTableProps) => (
  <table className={styles.table}>
    <tr>
      <TableCell paddingInline={2}>Name</TableCell>
      <TableCell paddingInline={2}>Email</TableCell>
      <TableCell paddingInline={2}>Qualification</TableCell>
      <TableCell paddingInline={2}>Last Login</TableCell>
      <TableCell paddingInline={2}>Top Search Property</TableCell>
      <TableCell paddingInline={2}>Top Search District</TableCell>
      <TableCell paddingInline={2}>Top Search Region</TableCell>
      <TableCell paddingInline={2}>Prefer Price</TableCell>
      <TableCell paddingInline={2}>Prefer Setup</TableCell>
    </tr>
    <tr><td colSpan={9}><hr /></td></tr>
    {
      data.map(({ email, leadQualification, lastLogin, topSearchDistricts, topSearchProperties, topSearchRegion, prefPrice, prefConfig }, index) => (
        (<>
          <tr key={index}>
            <TableCell size="small" paddingInline={2}>{name[email]}</TableCell>
            <TableCell size="small" paddingInline={2}>{email}</TableCell>
            <TableCell size="small" paddingInline={2}>{leadQualification}</TableCell>
            <TableCell size="small" paddingInline={2}>{lastLogin}</TableCell>
            <TableCell size="small" paddingInline={2}>{topSearchProperties}</TableCell>
            <TableCell size="small" paddingInline={2}>{topSearchDistricts}</TableCell>
            <TableCell size="small" paddingInline={2}>{topSearchRegion}</TableCell>
            <TableCell size="small" paddingInline={2}>{prefPrice}</TableCell>
            <TableCell size="small" paddingInline={2}>{prefConfig}</TableCell>
          </tr>
          <tr><td colSpan={9}><hr /></td></tr>
        </>
        )
      )
      )
    }
  </table>
)

interface CSVTable {
  name: string;
  email: string;
}

export default function TitleAndFilter() {

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
  const [csvRecord, setCSVRecord] = useState<Array<CSVTable>>([]);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [uploadedData, setUploadedData] = useState<Array<LeadDisplayData>>([]);
  const [loading, setIsLoading] = useState<boolean>(false);
  const [emailWithName, setEmailWithName] = useState<Record<string, string>>({});
  const [project, setProject] = useState<TPropertyName | null>(null);
  const [leadRegister, setLeadRegister] = useAtom(PROJECT_LEAD_INFO);
  const [leadEmailWithName, setLeadEmailWithName] = useAtom(PROJECT_LEAD_EMAIL_WITH_NAME);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    const fileList = event.target.files || [];

    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      if (file.type === 'text/csv') {
        file.text().then((words: string) => {

          const result = parse(words, { header: true }) as unknown as CSV<CSVTable>;
          const emailRecord: Record<string, string> = {};

          setCSVRecord(result.data);
          const allEmail = result.data.map(({ email, name }) => {
            emailRecord[email] = name;
            return email
          });
          setEmailWithName(emailRecord);
          fetch('https://propertyguru.hasura.app/api/rest/getProfileByEmails', {
            method: 'POST',
            cache: 'no-cache',
            headers: {
              'x-hasura-admin-secret': 'Sfuro9op4sS5tmD98vlqcjEZirCddguhzg4WxNo3415CLsjqdK26jl6AzOAkwbWa',
            },
            body: JSON.stringify({ "emailIds": allEmail })
          })
            .then((res) => res.json())
            .then((data: Result) => {
              setUploadedData(prettyDataSet(data));

              setIsLoading(false);
            });

        });
      }
    }
  };

  const onImport = () => {
    if (project) {
      setLeadRegister({ ...leadRegister, [project]: [...leadRegister[project], ...uploadedData.map(({ email, name }) => ({ email, name }))] });
      setLeadEmailWithName({ ...leadEmailWithName, ...emailWithName });
      setSubmitted(true);
    }
  }

  return (
    <Stack gap={6}>
      <Box paddingBlock={4} paddingInline={[4, , 6]} border rounded marginTop={[4, 12]}>
        <Stack gap={4}>
          <Text type="title">Bulk Lead</Text>
          <Box border rounded paddingBlock={8} paddingInline={4}>
            <Flex justifyContent="center" alignItem="center" direction="column" gap={8}>
              <Text>Please upload a csv file which contains email and name on the header</Text>
              <label className={styles.customFileUpload}>
                <input type="file" className={styles.fileInput} color="white" accept=".csv" onChange={handleChange} />
                <Flex justifyContent="spaceEvenly" alignItem="center" gap={4}>
                  <Icon size="medium" iconName="upload_file" color="white" />
                  <Text color="white">Upload file</Text>
                </Flex>
              </label>
            </Flex>
          </Box>
          {
            (uploadedData.length > 0 && !submitted) && <Box border rounded paddingBlock={8} paddingInline={4}>
              <Flex justifyContent="spaceEvenly" alignItem="center" direction="column" gap={8}>
                <Text weight="semiBold">Total {uploadedData.length} records found</Text>
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
      <Box border rounded className={styles.fullSize} >
        <Visible visible={uploadedData.length > 0}>
          <Text paddingBlock={8} paddingLeft={5}>Preview for the top 5 record</Text>
          <PreviewTable data={uploadedData.slice(0, 5)} name={emailWithName} />
        </Visible>

        <Visible visible={uploadedData.length === 0} isAutoWidth>
          <Flex justifyContent="center">
            <Text color="white">Waiting CSV to upload</Text>
          </Flex>
        </Visible>
      </Box>
      <Flex justifyContent="center" marginBottom={4}>
        <Visible visible={uploadedData.length > 0} isAutoWidth>
          <CSVLink className={styles.download} data={[
            ['Name', 'Email', 'Qualification', 'Last Login', 'Top Search Property', 'Top Search District', 'Top Search Region', 'Prefer Price', 'Prefer Setup'],
            ...uploadedData.map(({ email, leadQualification, lastLogin, topSearchDistricts, topSearchProperties, topSearchRegion, prefPrice, prefConfig }) =>
              ([emailWithName[email], email, leadQualification, lastLogin, topSearchDistricts, topSearchProperties, topSearchRegion, prefPrice, prefConfig]))
          ]}><Button size="large" iconName="download">Download</Button></CSVLink>
        </Visible>
      </Flex>
    </Stack>
  );
}
