import { Typography } from '@mui/material'
import React from 'react'
import { Users as UsersComponent } from '../../components/Users'

export default function Users() {
  return (
    <>
      <Typography variant="h4" component="h1" sx={{mb: 2}}>Users</Typography>

      <UsersComponent />
    </>
  )
}
