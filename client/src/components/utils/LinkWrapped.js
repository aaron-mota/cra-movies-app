import { Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import React from 'react'

export default function LinkWrapped({
  to,
  sx,
  children
}) {
  return (
    <Link component={RouterLink} to={to} underline="none" sx={sx}>
      {children}
    </Link>
  )
}
