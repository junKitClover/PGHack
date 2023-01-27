'use client';
import { PageLayout, Flex } from 'component/organisms';
import { Text } from 'component/atoms';
import { SyntheticEvent } from 'react';

function Page() {
  const onIframeLoad = (event: SyntheticEvent<HTMLIFrameElement, Event>) => {
    event.preventDefault();
    console.log('on loading');
    const nav = document.getElementById('navbar');
    console.log('nav => ', nav);
  }

  return (
    <PageLayout paddingTop={20}>
      <Flex gap={8} alignItem="center" justifyContent="center" direction="column">
        <Text size="medium">Sorry this page only available in desktop version, at this moment</Text>
        <Text size="small" color="secondaryFontColor">Sorry for any inconvenience</Text>
      </Flex>
    </PageLayout>
  );
}

export default Page;
