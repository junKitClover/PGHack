import React from 'react'
import Select from 'react-select'

const options = [
  { value: 'mah seng', label: 'Mah Seng' },
  { value: 'mh', label: 'Meng Hong' },
  { value: 'platinum', label: 'PV Platinum' },
  { value: 'sunway', label: 'Sunway' },
  { value: 'setia', label: 'Setia' },
  { value: 'ijm', label: 'IJM' },
]

const DeveloperDropDown = () => (
  <Select options={options} placeholder="Developer" isMulti={true} />
)

export default DeveloperDropDown;