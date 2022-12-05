
import { Result, LeadDisplayData, LeadResult } from '../LeadType';

export const prettyDataSet = (data: Result): Array<LeadDisplayData> => {
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