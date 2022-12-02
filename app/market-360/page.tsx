'use client';

import { Grid, Stack } from 'component/organisms';
import { Box, Text } from 'component/atoms';
import { Button } from 'component/molecules';
import { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';

function Page() {

  return (
    <Stack gap={2} paddingBlock={[2,3,6]} paddingInline={[2,3,5]}>
      <Text type="title">Market 360</Text>
      <Grid col={[1,2]}>
        <div>form entry</div>
        <Box>result</Box>
      </Grid>
    </Stack>
  );
}

export default Page;
