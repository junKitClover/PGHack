"use client";
import { Flex, Grid, Stack } from "component/organisms";
import { Box, Text } from "component/atoms";
import { Button } from "component/molecules";
import { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import { SUPER_USER, NORMAL_USER } from "./user";

const Page = () => {
  const [submitStatus, setSubmitStatus] = useState("");
  const router = useRouter();

  const onSubmit = (props: any) => {
    if (props.target[0].value === props.target[1].value) {
      if (
        SUPER_USER.indexOf(props.target[0].value) >= 0 ||
        NORMAL_USER.indexOf(props.target[0].value) >= 0
      ) {
        localStorage.setItem("userName", props.target[0].value);
        setSubmitStatus("success");
      }
    } else {
      setSubmitStatus("error");
    }
  };

  useEffect(() => {
    if (submitStatus === "success") {
      window.location.href = "/project/direct/the-light-waterfront-penang";
      Router.push("/project/direct/the-light-waterfront-penang");
    }
  });

  return (
    <form onSubmit={onSubmit} method="post">
      <Flex justifyContent="center" alignItem="center" padding={10}>
        <Box padding={3} border rounded>
          <Stack gap={4}>
            <Flex gap={3}>
              <Text as="label">Username:</Text>
              <input name="username" type="text" placeholder="User Name" />
            </Flex>
            <Flex gap={3}>
              <Text as="label">Password:</Text>
              <input name="password" type="password" placeholder="Password" />
            </Flex>
            {submitStatus === "error" ? (
              <Text color="errorDarker">Incorrect username or password</Text>
            ) : null}
            <Flex gap={3}>
              <Button>Sign In</Button>
              <Button type="text">Forget password</Button>
            </Flex>
          </Stack>
        </Box>
      </Flex>
    </form>
  );
};

export default Page;
