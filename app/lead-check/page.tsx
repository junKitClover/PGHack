'use client';

import { Grid, Stack, Flex } from 'component/organisms';
import { Box, Text } from 'component/atoms';
import { Button } from 'component/molecules';
import { FormEvent } from 'react';
import Router, { useRouter } from 'next/router';

const Result = () => (
  <Box backgroundColor="greyLighter" rounded>
    <Flex alignItem="center" justifyContent="center" backgroundColor="errorDark" paddingBlock={3}>
      <Text color="white">Hot</Text>
    </Flex>
    <Stack gap={4} padding={[3, 6]}>
      <Grid col={[1, 2]} gap={2}>
        <Text weight="semiBold">Name</Text><Text weight="thin">Jane Done</Text>
        <Text weight="semiBold">Phone Number</Text><Text weight="thin">018-278 2433</Text>
        <Text weight="semiBold">Email</Text><Text weight="thin">jane.done@gmail.com</Text>
      </Grid>
      <Stack gap={2}>
        <Flex gap={3}><Text weight="semiBold">Last search on</Text><Text weight="thin">Pavilion</Text></Flex>
        <Text weight="semiBold">Looking on</Text>
        <ul>
          <li><Text weight="thin">Sunway</Text></li>
          <li><Text weight="thin">IJM</Text></li>
          <li><Text weight="thin">Ming hong</Text></li>
        </ul>
      </Stack>
    </Stack>
  </Box>
);

function Page() {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    return true; 
  };

  return (
    <Stack gap={2} paddingBlock={[2, 3, 6]} paddingInline={[2, 3, 5]}>
      <Text type="title">Leads Check</Text>
      <Grid col={[1, 2]}>
        <form onSubmit={onSubmit} method="post">
          <Grid col={[1, 2]} gap={[2, 3, 4]} padding={[2, 3, 5]}>
            <Text as="label">Name:</Text>
            <input name="name" type="text" placeholder="Name" />
            <Text as="label">Phone Number:</Text>
            <input name="phoneNumber" type="text" placeholder="Phone Number" />
            <Text as="label">Email:</Text>
            <input name="email" type="text" placeholder="Email" />
            <Button>Search</Button>
            <Button type='text'>Clear</Button>
          </Grid>
        </form>
        <Result/>
      </Grid>
    </Stack>
  );
}

export default Page;
