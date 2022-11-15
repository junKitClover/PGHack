import React from 'react'
import Select from 'react-select'

const options = [
  { value: 'upgrade', label: 'Upgrade' },
  { value: 'firstHouse', label: 'First House' },
  { value: 'investment', label: 'Investment' },
  { value: 'secondhome', label: 'Second Home' },
]

const PurposeDropDown = () => (
  <Select options={options} placeholder="Purpose" isMulti/>
)

export default PurposeDropDown;