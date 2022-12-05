"use client";

import { Box, Icon, Text, TextBaseProps, Visible } from "component/atoms";
import { Button } from "component/molecules";
import styles from './TitleAndDragDrop.module.scss';
import { CSVLink, CSVDownload } from "react-csv";
import { Flex, Stack } from "component/organisms";
import { useState, ChangeEvent } from "react";
import { parse } from 'papaparse';
import { StringMappingType } from "typescript";

interface CSVData {
  name: string,
  phoneNumber: string,
  email: string,
  status?: string,
}

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
  data: Array<CSV<CSVData>>
}

const TableCell = ({ children, ...restProps }: TextBaseProps) => (<td><Text {...restProps}>{children}</Text></td>)

const PreviewTable = ({ data }: PreviewTableProps) => (
  <table>
    <tr>
      <TableCell paddingInline={2}>Name</TableCell>
      <TableCell paddingInline={2}>Phone Number</TableCell>
      <TableCell paddingInline={2}>Email</TableCell>
      <TableCell paddingInline={2}>Status</TableCell>
    </tr>
    <tr><td colSpan={4}><hr /></td></tr>
    {
      data.map((csvFile) => (
        csvFile.data.map(({ name, phoneNumber, email }, index) =>
        (<>
          <tr key={index}>
            <TableCell size="small" paddingInline={2}>{name}</TableCell>
            <TableCell size="small" paddingInline={2}>{phoneNumber}</TableCell>
            <TableCell size="small" paddingInline={2}>{email}</TableCell>
            <TableCell size="small" paddingInline={2}>Hot</TableCell>
          </tr>
          <tr><td colSpan={4}><hr /></td></tr>
        </>
        )
        )
      )
      )
    }
  </table>
)

interface PreviewTableProps {
  data: Array<CSV<CSVData>>
}

export default function TitleAndFilter() {
  const [uploadedFile, setUploadedFile] = useState<Array<CSV<CSVData>>>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files || [];

    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      console.log('file => ', file);
      if (file.type === 'text/csv') {
        file.text().then((words: string) => {
          const result = parse(words, { header: true }) as unknown as CSV<CSVData>;
          const addStatus: CSV<CSVData> = {
            data: result.data.map((props) => ({ status: 'Hot', ...props})),
            meta:{
              ...result.meta,
              fields:[...result.meta.fields, 'status']
            }
          };
          

        setUploadedFile((prev) => [...prev, addStatus]);
      });
    }
  }
};

return (
  <Stack gap={6}>
    <Box paddingBlock={4} paddingInline={[4, , 6]} border rounded marginTop={[4, 12]}>
      <Stack gap={4}>
        <Text type="title">Bulk Lead</Text>
        <Box border rounded paddingBlock={8} paddingInline={4}>
          <Flex justifyContent="center" alignItem="center" direction="column" gap={8}>
            <Text>Please upload a csv files, contain name, phoneNumber and email on the header</Text>
            <label className={styles.customFileUpload}>
              <input type="file" className={styles.fileInput} color="white" accept=".csv" onChange={handleChange} />
              <Flex justifyContent="spaceEvenly" alignItem="center" gap={4}>
                <Icon size="medium" iconName="upload_file" color="white" />
                <Text color="white">Upload file</Text>
              </Flex>
            </label>
          </Flex>
        </Box>
      </Stack>
    </Box>
    <Box border rounded className={styles.fullSize} paddingBlock={4}>
      <Flex justifyContent="center">
        <Visible visible={uploadedFile.length > 0} isAutoWidth>
          <PreviewTable data={uploadedFile} />
        </Visible>
        <Visible visible={uploadedFile.length === 0} isAutoWidth>
          <Text color="white">Waiting CSV to upload</Text>
        </Visible>
      </Flex>
    </Box>
    <Flex justifyContent="center" marginBottom={4}>
      <Visible visible={uploadedFile.length > 0} isAutoWidth>
        <CSVLink data={[
          ...uploadedFile.map(({ meta: { fields } }) => (fields)),
          ...uploadedFile.map(({ data }) => data.map(({ email, name, phoneNumber, status }) => ([name, phoneNumber, email, status]))).flat()
        ]}><Button size="large" iconName="download">Download</Button></CSVLink>
      </Visible>
    </Flex>
  </Stack>
);
}
