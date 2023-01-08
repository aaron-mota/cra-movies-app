import { Typography } from '@mui/material'
import React from 'react'
import { UsersList } from '../users/components/UsersList'

export default function Home() {
  return (
    <>
      <Typography variant="h4" component="h1" sx={{mb: 2}}>Home</Typography>

      <UsersList />
    </>
  )
}
