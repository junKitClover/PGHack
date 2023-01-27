'use client';

import { Flex, Grid, PageLayout, Stack } from 'component/organisms';
import { Box, Text } from 'component/atoms';
import Image from 'next/image';

function Page() {
  return (
    <PageLayout paddingTop={20}>
      <Stack gap={[8, 20]}>
        <Flex direction={["column", "row"]} justifyContent="spaceBetween">
          <Flex justifyContent="center" alignItem="center" padding={6} gap={20} direction="column">
            <Text color="primary" size="xxLarge" weight="thin">Lead 360 </Text>
            <Text type="subtitle">Connect to your favourite CRM with just one click away </Text>
          </Flex>
          <Box backgroundColor="white" border rounded>
            <Flex justifyContent="center" alignItem="center" >
              <Grid col={[2, 4]} gap={8} padding={[4, 8]}>
                <Image alt="Saleforce" width={140} height={100} src="/Salesforce.png" style={{ objectFit: "scale-down", objectPosition: '50% 50%' }} />
                <Image alt="Sale Candy" width={140} height={100} src="/candy.png" style={{ objectFit: "scale-down", objectPosition: '50% 50%' }} />
                <Image alt="Nex CRM" width={140} height={100} src="/nexcrmcrm_logo.png" style={{ objectFit: "scale-down", objectPosition: '50% 50%' }} />
                <Image alt="Nex Platform" width={140} height={100} src="/nexPlatform.png" style={{ objectFit: "scale-down", objectPosition: '50% 50%' }} />
                <Image alt="M hub" width={140} height={100} src="/mhub.png" style={{ objectFit: "scale-down", objectPosition: '50% 50%' }} />
                <Image alt="Fast Key" width={140} height={100} src="/fast-key.png" style={{ objectFit: "scale-down", objectPosition: '50% 50%' }} />
                <Image alt="Fresh Sales" width={140} height={100} src="/freshsales.png" style={{ objectFit: "scale-down", objectPosition: '50% 50%' }} />
                <Image alt="ZOHO" width={140} height={100} src="/zoho.png" style={{ objectFit: "scale-down", objectPosition: '50% 50%' }} />
              </Grid>
            </Flex>
          </Box>
        </Flex>
        <Flex direction={["columnReverse", "row"]} justifyContent="spaceBetween">
          <Box backgroundColor="white" border rounded>
            <Text>
              <pre style={{ overflow: "auto", maxWidth: "80vw" }}>
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
          </Box>
          <Flex justifyContent="center" alignItem="center" padding={6} gap={12} direction="column">
            <Text color="informationDarker" size="xxLarge" weight="thin">Sample of JSON response </Text>
            <Text type="subtitle">Sample of result retrun when API been called </Text>
          </Flex>
        </Flex>
      </Stack>
    </PageLayout>
  );
}

export default Page;
