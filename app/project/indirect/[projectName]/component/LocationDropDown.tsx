import React from 'react'
import Select from 'react-select'

const options = [
  { value: 'kl', label: 'Kuala Lumpur' },
  { value: 'penang', label: 'Penang' },
  { value: 'selangor', label: 'Selangor' },
  { value: 'kuantan', label: 'Kuantan' },
  { value: 'johor', label: 'Johor' }
]

const LocationDropDown = () => (
  <Select options={options} isMulti={true} placeholder="Location" />
)

export default LocationDropDown;