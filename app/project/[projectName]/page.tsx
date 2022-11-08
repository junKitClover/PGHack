import { Text } from 'component/atoms';
import { Stack, Grid } from 'component/organisms';
import { LeadCard } from 'component/molecules';

interface ProjectNameProps {
  params:{
    projectName: string
  },
  searchParams: object
}

const Page = ({params: {projectName}}: ProjectNameProps) =>{
  return(
  <Stack gap={4}>
    <Text type="display" as="h1">{projectName}</Text>
    <Grid col={[1, 2, 3]} gap={[3, 5, 6]} paddingBlock={5} paddingInline={3}>
      <LeadCard/>
      <LeadCard/>
      <LeadCard/>
      <LeadCard/>
      <LeadCard/>
      <LeadCard/>
      <LeadCard/>
      <LeadCard/>
    </Grid>
  </Stack>)
};

export default Page;