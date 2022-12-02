'use client';

import { Flex, Grid, Stack } from 'component/organisms';
import { Box, Text } from 'component/atoms';
import Image from 'next/image';
import { Button } from 'component/molecules';
import Link from 'next/link';

function Page() {
  return (
    <Grid gap={[4, 8]} col={1}>
      <Flex justifyContent="center" alignItem="center" padding={6} gap={12} direction="column">
        <Text color="informationDarker" size="xxLarge" weight="thin">Lead 360 </Text>
        <Text type="subtitle">Connect to your favourite CRM with just one click away </Text>
      </Flex>
      <Flex justifyContent="center" alignItem="center" backgroundColor="white">
        <Grid col={[1, 2, 4]} gap={4} padding={[4, 8]}>
          <Image alt="CRM" width={140} height={100} src="/crm-1.webp" />
          <Image alt="Crm-cloud" width={140} height={100} src="/crm-cloud.png" />
          <Image alt="Hubspot" width={140} height={100} src="/hubspot.webp" />
          <Image alt="Insightly" width={140} height={100} src="/insightly.webp" />
          <Image alt="Nutshell" width={140} height={100} src="/nutshell.jpeg" />
          <Image alt="Pipedrive" width={140} height={100} src="/Pipedrive.png" />
          <Image alt="Salesforce" width={140} height={100} src="/Salesforce.png" />
          <Image alt="Salezshark" width={140} height={100} src="/salezshark.png" />
        </Grid>
      </Flex>
      <Grid col={[1, 2]} gap={4} padding={[2,4,6]}>
        <Flex justifyContent="center" alignItem="center" padding={6} gap={12} direction="column">
          <Text color="informationDarker" size="xxLarge" weight="thin">Sample of JSON response </Text>
          <Text type="subtitle">Sample of result retrun when API been called </Text>
        </Flex>
        <Flex justifyContent="center" alignItem="center" backgroundColor="greyLighter">
          <Text>
            <pre>
              <code>{
                JSON.stringify(
                  {
                    "country": "sg",
                    "lead_qualification_category": "Hot",
                    "contact_email": "shirleyliu12@yahoo.co.uk",
                    "contact_mobile": "90819964",
                    "audit_lastLogin": "2022-11-29",
                    "audit_lastUpdate": "2022-11-28",
                    "top_property_name1": "Stirling Residences",
                    "top_property_name2": "Alex Residences",
                    "top_property_name3": "Artra",
                    "top_region1": "City South West (D01-08)",
                    "top_region2": "Orchard / Holland (D09-10)",
                    "top_region3": "Newton / Bt. Timah (D11, 21)",
                    "top_district1": "Alexandra / Commonwealth",
                    "top_district_code1": "D03",
                    "top_district2": "Tanglin / Holland / Bukit Timah",
                    "top_district_code2": "D10",
                    "top_district3": "Newton / Novena",
                    "new_project_names_enquired1": "Kopar At Newton",
                    "new_project_names_enquired2": "Peak Residence",
                    "new_project_names_enquired3": "Stirling Residences",
                    "new_project_interest": "Strong",
                    "pref_price_1": "$1.5M-2M",
                    "pref_price_2": "$1M-1.5M",
                    "pref_price_3": "$2M-2.5M",
                    "pref_config_1": "2 Bed - 2 Bath",
                    "pref_config_2": "3 Bed - 2 Bath",
                    "pref_config_3": "2 Bed - 1 Bath"
                  }, null, 2
                )
              }
              </code>
            </pre>
          </Text>
        </Flex>
      </Grid>
      <Flex justifyContent="center" alignItem="center" padding={6} gap={12} direction="column" backgroundColor="white">
        <Text color="informationDarker" size="xxLarge" weight="thin">Submit Lead </Text>
        <Text type="subtitle">Update your lead database </Text>
        <Link href="/submit-lead"><Button>Add lead</Button></Link>
      </Flex>
    </Grid>
  );
}

export default Page;
