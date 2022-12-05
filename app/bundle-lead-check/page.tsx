'use client';

import { Flex, Grid, Stack } from 'component/organisms';
import { Box, Text, Visible } from 'component/atoms';
import { TextBaseProps } from 'component/atoms/Text';
import { FileUploader } from "react-drag-drop-files";
import { useState, useEffect } from 'react';
import { parse } from 'papaparse';
import styles from './page.module.scss';
import { Button } from 'component/molecules';

interface CSVData {
  name: string,
  phoneNumber: string,
  email: string,
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

function Page() {
  const fileTypes = ["CSV"];
  const [uploadedFile, setUploadedFile] = useState<Array<CSV<CSVData>>>([]);
  const handleChange = (fileList: any) => {
    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      if (file.type === 'text/csv') {
        file.text().then((words: string) => {
          const result = parse(words, { header: true }) as unknown as CSV<CSVData>;

          setUploadedFile((prev) => [...prev, result]);
        });

      }
    }
  };

  return (
    <Stack gap={2} paddingBlock={[2, 3, 6]} paddingInline={[2, 3, 5]}>
      <Text type="title">Leads Bulk Validation</Text>
      <Grid col={[1, "1by2"]}>
        <FileUploader
          multiple={true}
          handleChange={handleChange}
          name="file"
          types={fileTypes}
          className={styles.dragNDropSection}
        />
        <Box backgroundColor="greyLighter" rounded padding={[2, 3, 6]}>
          <Stack gap={3}>
            <Flex justifyContent="spaceBetween">
              <Text>{uploadedFile.length > 0 ? 'Preview Top 10 Uploaded Record' : 'No csv upload yet'}</Text>
              <Visible visible={uploadedFile.length > 0}>
                <Button iconName='download' />
              </Visible>
            </Flex>
            <Visible visible={uploadedFile.length > 0}>
              <PreviewTable data={uploadedFile} />
            </Visible>
          </Stack>
        </Box>
      </Grid>
    </Stack>
  );
}

export default Page;

