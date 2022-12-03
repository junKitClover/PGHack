"use client";

import { Box, Text } from "component/atoms";
import Select, { StylesConfig } from 'react-select';
import styles from './TitleAndFilter.module.scss';
import chroma from 'chroma-js';
import { projectInfo } from "../../data/project";
import { Flex, Stack } from "component/organisms";
import { Button } from "component/molecules";
import classNames from "classnames";

export interface LeadOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
}

export const leadOptions: readonly LeadOption[] = [
  { value: 'hot', label: 'Hot', color: '#FF837A' },
  { value: 'warm', label: 'Warm', color: '#FF9869' },
  { value: 'cold', label: 'Cold', color: '#0FB9BF' },
];

export const leadTypeOptions: readonly LeadOption[] = [
  { value: 'new', label: 'New', color: '#0FB9BF' },
  { value: 'shortlisted', label: 'Shortlisted', color: '#FF837A' },
  { value: 'notInterested', label: 'Not Interested', color: '#E2E2E2' },
];

const options = [
  { value: 'kl', label: 'Kuala Lumpur' },
  { value: 'penang', label: 'Penang' },
  { value: 'selangor', label: 'Selangor' },
  { value: 'kuantan', label: 'Kuantan' },
  { value: 'johor', label: 'Johor' }
];

const dot = (color = 'transparent') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 4,
    marginLeft: 4,
    height: 10,
    width: 10,
  },
});


const leadStyles: StylesConfig<LeadOption> = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'white',
    border: 'none',
    minHeight: '48px',
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
          ? data.color
          : isFocused
            ? color.alpha(0.1).css()
            : undefined,
      color: isDisabled
        ? '#ccc'
        : isSelected
          ? chroma.contrast(color, 'white') > 2
            ? 'white'
            : 'black'
          : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    };
  },
  input: (styles) => ({ ...styles }),
  placeholder: (styles) => ({ ...styles, ...dot('#ccc'), color: '#0e2638' }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
  multiValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
  dropdownIndicator: (styles) => ({ ...styles, display: 'none' }),
  indicatorSeparator: (styles) => ({ ...styles, display: 'none' }),
};

const leadTypeStyles: StylesConfig<LeadOption> = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'white',
    border: 'none',
    minHeight: '48px',
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
    };
  },
  input: (styles) => ({ ...styles }),
  placeholder: (styles) => ({ ...styles, ...dot('#ccc'), color: '#0e2638' }),
  singleValue: (styles, { data }) => ({ ...styles }),
  multiValue: (styles, { data }) => ({ ...styles }),
  dropdownIndicator: (styles) => ({ ...styles, display: 'none' }),
  indicatorSeparator: (styles) => ({ ...styles, display: 'none' }),
};

export default function TitleAndFilter() {
  const { name, detailList } = projectInfo["the-light-waterfront-penang"];
  return (
    <Box paddingBlock={4} paddingInline={[2,3,6]} border rounded>
      <Stack gap={4}>
        <Text type="title">{name}</Text>
        <Flex gap={4}>
          <Button type="contained">Direct Lead</Button>
          <Button type="outline">Lookalike Lead</Button>
        </Flex>
        <Box border rounded paddingBlock={3} paddingInline={4}>
          <Stack gap={2}>
            <Text type="tooltips">Filter by</Text>
            <Flex gap={4} direction={['column',,'row']}>
              <Box className={styles.filterBox}>
                <Select options={leadOptions} isMulti={true} placeholder="Select Lead Quality" className={styles.selecter} styles={leadStyles} />
              </Box>
              <Box className={classNames(styles.filterBox, styles.secondBox)}>
                <Select options={leadTypeOptions} isMulti={true} placeholder="Select Lead Type" className={styles.selecter} styles={leadTypeStyles} />
              </Box>
              </Flex>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
