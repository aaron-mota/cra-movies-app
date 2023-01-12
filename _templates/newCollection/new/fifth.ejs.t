---
to: client/src/pages/components/ModalUpdate.js
unless_exists: true
---

import React, { useEffect, useState } from 'react'
import { Button, Card, CardActions, CardContent, MenuItem, Modal, Select, Stack, TextField } from '@mui/material'
import { updateDoc } from '../../../services';
import { collection } from '../<%= Name =%>';

export default function ModalUpdate({
  open,
  setOpen,
  doc,
  setDoc,
}) {
  const [updatedDoc, setUpdatedDoc] = useState(doc)
  const [isUpdating, setIsUpdating] = useState(false)
  const [updateDocRequestCount, setUpdateDocRequestCount] = useState(0)


  function handleSave() {
    setUpdateDocRequestCount(prev => prev + 1)
  }
  function handleClose() {
    setUpdatedDoc(doc)
    setOpen(false)
  }

  
  // UPDATE DOC
  useEffect(() => {
    if (updateDocRequestCount === 0) {return}
    else {
      const controller = new AbortController()
      async function updateSingle() {
        setIsUpdating(true)
        console.log(updatedDoc)
        try {
          const doc = await updateDoc(updatedDoc, collection, controller, true)
          setDoc(doc)
          setOpen(false)
        } catch(e) {
          console.log("There was a problem or the request was cancelled.", e)
        } finally {
          setIsUpdating(false)
        }
      }
      updateSingle()
      return () => {
        controller.abort()
      }
    }
  }, [updateDocRequestCount])


  return (
    <Modal
      open={open}
      onClose={handleClose}
    >
      <Card
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          borderRadius: 4,
          pt: 3,
          px: 3,
          pb: 1,
        }}
      >
        <CardContent>
          <Stack gap={2}>
            {updatedDoc.keys().map((key, i) => 
              <TextField
                autoFocus={i === 0 ? true : false}
                fullWidth
                label={key}
                value={updatedDoc[key]}
                onChange={(e) => {setUpdatedDoc({...updatedDoc, [key]: e.target.value})}}
              />
            )}
            {/* <Select
              label="SelectField"
              // value={updatedDoc[key]}
              // onChange={(e) => {setUpdatedDoc({...updatedDoc,[key]: e.target.value})}}
            >
              <MenuItem value={"Option1"}>Option1</MenuItem>
              <MenuItem value={"Option2"}>Option2</MenuItem>
            </Select> */}
          </Stack>
        </CardContent>
        <CardActions>
          <Button onClick={handleSave}>Save</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </CardActions>
      </Card>
    </Modal>
  )
}
