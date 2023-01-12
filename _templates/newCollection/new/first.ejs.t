---
to: client/src/pages/<%= Name =%>.js
unless_exists: true
---

import React, { useState } from 'react'
import { Button, Stack, Typography } from '@mui/material'
import { DocsList } from './components/DocsList'
import ModalCreate from './components/ModalCreate'
import { makeSingular } from '../../utils/makeSingular'

export const collection = "<%= name =%>"

export default function <%= Name =%>() {
  const [createModalOpen, setCreateModalOpen] = useState(false)

  return (
    <>
      <Stack direction="row" gap={2} alignItems="center" sx={{mb: 2}}>
        <Typography variant="h4" component="h1">Users</Typography>
        <Stack justifyContent={"center"} alignItems="center">
          <Button
            variant="contained"
            onClick={() => setCreateModalOpen(true)}
          >
            Add {makeSingular(collection)}
          </Button>
        </Stack>
      </Stack>

      <DocsList />

      {createModalOpen && <ModalCreate open={createModalOpen} setOpen={setCreateModalOpen} />}
    </>
  )
}