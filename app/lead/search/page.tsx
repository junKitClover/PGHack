"use client";

import { Text } from "component/atoms";
import { Stack } from "component/organisms";
import { LEAD_SEARCH_RESULT, LEAD_SEARCH_LOADING } from "state/leadStated";
import { useAtom } from "jotai";
import TitleAndSearch from "./component/TitleAndSearch/TitleAndSearch";

interface LeadResult {
  country: string,
  pg_user_id: string,
  view_count?: string,
  view_count_origin_property?: string,
  visit_days_distinct_count: null,
  visit_days_range_count: null,
  lead_qualification_category: string,
  contact_email: string,
  contact_mobile: string,
  audit_createdDate?: string,
  audit_lastLogin?: string,
  audit_lastUpdate?: string,
  top_property_name1?: string,
  top_property_id1?: string,
  top_property_name2?: string,
  top_property_id2?: string,
  top_property_name3?: string,
  top_property_id3?: string,
  top_property_name4?: string,
  top_property_id4?: string,
  top_property_name5?: string,
  top_property_id5?: string,
  top_property_name_origin1?: string,
  top_property_id_origin1?: string,
  top_property_name_origin2?: string,
  top_property_id_origin2?: string,
  top_property_name_origin3?: string,
  top_property_id_origin3?: string,
  top_property_name_origin4?: string,
  top_property_id_origin4?: string,
  top_property_name_origin5?: string,
  top_property_id_origin5?: string,
  top_region1?: string,
  top_region_code1?: string,
  top_region2?: string,
  top_region_code2?: string,
  top_region3?: string,
  top_region_code3?: string,
  top_region4?: string,
  top_region_code4?: string,
  top_region5?: string,
  top_region_code5?: string,
  top_district1?: string,
  top_district_code1?: string,
  top_district2?: string,
  top_district_code2?: string,
  top_district3?: string,
  top_district_code3?: string,
  top_district4?: string,
  top_district_code4?: string,
  top_district5?: string,
  top_district_code5?: string,
  new_project_names_enquired1?: string,
  new_project_names_enquired2?: string,
  new_project_names_enquired3?: string,
  new_project_interest?: string,
  pref_price_1?: string,
  pref_price_2?: string,
  pref_price_3?: string,
  pref_config_1?: string,
  pref_config_2?: string,
  pref_config_3?: string,
}

interface Result {
  temp_sam_us_leads360_leads: Array<LeadResult>
}

const Page = () => {
  const [leadSearchResult] = useAtom(LEAD_SEARCH_RESULT);
  const [isLoading] = useAtom(LEAD_SEARCH_LOADING);

  const leadList = leadSearchResult as unknown as Result;

  return (
    <Stack gap={4}>
      <TitleAndSearch />
      {leadList?.temp_sam_us_leads360_leads.length > 0 ? <Text>{JSON.stringify(leadSearchResult)}</Text> : <Text>no result found</Text>}
    </Stack>
  )
};

export default Page;