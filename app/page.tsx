'use client'
import { Flex, Grid, Stack } from "component/organisms";
import { Box, Text } from "component/atoms";
import { Button } from "component/molecules";


const Page = () => (
  <form>
    <Flex justifyContent="center" alignItem="center" padding={10}>
      <Box padding={3} border rounded>
        <Stack gap={4}>
          <Flex gap={3}>
            <Text as="label">Username:</Text><input name="username" type="text" placeholder="User Name" />
          </Flex>
          <Flex gap={3}>
            <Text as="label">Password:</Text><input name="password" type="password" placeholder="Password" />
          </Flex>
          <Flex gap={3}>
            <Button>Sign In</Button>
            <Button type="text">Forget password</Button>
          </Flex>
        </Stack>
      </Box>
    </Flex>
  </form>
);

export default Page;
