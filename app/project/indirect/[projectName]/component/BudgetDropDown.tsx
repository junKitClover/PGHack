import React from 'react'
import Select from 'react-select'

const options = [
  { value: 'low', label: '< RM 200,000' },
  { value: 'lowMid', label: 'RM 200,000 - RM 400,000' },
  { value: 'mid', label: 'RM 400,000 - RM 800,000' },
  { value: 'midLux', label: 'RM 800,000 - RM 1,500,000' },
  { value: 'Lux', label: '> RM 1,500,000' }
]

const BudgetDropDown = () => (
  <Select options={options} placeholder="Target Budget" />
)

export default BudgetDropDown;