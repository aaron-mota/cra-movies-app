import { Typography } from '@mui/material'
import React from 'react'
import { Users } from '../components/layout/Users'

export default function Home() {
  return (
    <>
      <Typography variant="h4" component="h1" sx={{mb: 2}}>Home</Typography>

      <Users />
    </>
  )
}
