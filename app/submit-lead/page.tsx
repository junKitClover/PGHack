'use client';

import { Grid, Stack, Flex } from 'component/organisms';
import { Box, Text, Visible } from 'component/atoms';
import { Button } from 'component/molecules';
import { FormEvent, useEffect, useState } from 'react';
import Router, { useRouter } from 'next/router';
import Link from 'next/link';

interface FirstFormProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const FirstForm = ({ onSubmit }: FirstFormProps) => {
  return (
    <Stack gap={5} paddingBlock={[2, 3, 6]} paddingInline={[2, 3, 5]}>
      <Flex justifyContent="center" alignItem="center" gap={10} direction="column">
        <Text type="title">Leads Submission Form</Text>
        <form onSubmit={onSubmit} method="post">
          <Grid col={[1, 2]} gap={[2, 3, 4]} padding={[2, 3, 5]}>
            <Text as="label">Name:</Text>
            <input name="name" type="text" placeholder="Name" />
            <Text as="label">Phone Number:</Text>
            <input name="phoneNumber" type="text" placeholder="Phone Number" />
            <Text as="label">Email:</Text>
            <input name="email" type="text" placeholder="Email" />
            <Text as="label">Budget:</Text>
            <input name="email" type="text" placeholder="Budget" />
            <Text as="label">Looking for:</Text>
            <input name="email" type="text" placeholder="Looking for" />
          </Grid>
          <Flex justifyContent="spaceBetween" alignItem="center" marginBlock={4}>
            <Button type='text'>Clear</Button>
            <Button>Next</Button>
          </Flex>
        </form>
      </Flex>
    </Stack>
  )
};

const SecondForm = ({ onSubmit }: FirstFormProps) => {
  return (
    <Stack gap={5} paddingBlock={[2, 3, 6]} paddingInline={[2, 3, 5]}>
      <Flex justifyContent="center" alignItem="center" gap={10} direction="column">
        <Text type="title">OTP Verification</Text>
        <form onSubmit={onSubmit} method="post">
          <Grid col={4} gap={10} padding={[2, 3, 5]}>
            <input name="1" type="number" placeholder="" />
            <input name="2" type="number" placeholder="" />
            <input name="3" type="number" placeholder="" />
            <input name="4" type="number" placeholder="" />
          </Grid>
          <Flex justifyContent="spaceBetween" alignItem="center" marginBlock={4}>
            <Button type='text'>Clear</Button>
            <Button>Next</Button>
          </Flex>
        </form>
      </Flex>
    </Stack>
  )
};


const Done = () => {
  return (
    <Stack gap={5} paddingBlock={[2, 3, 6]} paddingInline={[2, 3, 5]}>
      <Flex justifyContent="center" alignItem="center" gap={10} direction="column">
        <Text type="title">Done</Text>
        <Text type="subtitle">Submission success</Text>

        <Link href="/">Back to Homepage</Link>
      </Flex>
    </Stack>
  )
};

type TStatus = 'INIT' | 'OTP' | 'FINAL';
type TStep = 1 | 2 | 3;

function Page() {
  const [status, setStatus] = useState<TStatus>('INIT');
  const [step, setStep] = useState<TStep>(1);
  const onSubmit = (event: FormEvent<HTMLFormElement>) => { 
    event.preventDefault(); 
    setStatus('OTP'); 
    setStep(2); 
    return false; 
  };
  const onSubmitOTP = (event: FormEvent<HTMLFormElement>) => { 
    event.preventDefault(); 
    setStatus('FINAL'); 
    setStep(3);
    return false; 
  };

  return (
    <Stack gap={10}>
      <Flex paddingBlock={5} backgroundColor="white" justifyContent="center" alignItem="center" gap={8} >
        <Button type="contained" >1</Button>
        <Button type={step >= 2 ? "contained" : "outline"}  disabled={step < 2}>2</Button>
        <Button type={step >= 3 ? "contained" : "outline"}  disabled={step < 3}>3</Button>
      </Flex>
      <Visible visible={status === 'INIT'}>
        <FirstForm onSubmit={onSubmit}/>
      </Visible>
      <Visible visible={status === 'OTP'}>
        <SecondForm onSubmit={onSubmitOTP}/>
      </Visible>
      <Visible visible={status === 'FINAL'}>
        <Done />
      </Visible>
    </Stack>
  );
}

export default Page;
