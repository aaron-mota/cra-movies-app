import { Button, Card, CardActions, CardContent, MenuItem, Modal, Select, Stack, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { updateDoc } from '../../../services';

export default function ModalUpdateUser({
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
        console.log("GOT HERE")
        console.log(updatedDoc)
        try {
          const doc = await updateDoc(updatedDoc, controller, true)
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
            <TextField
              autoFocus
              fullWidth
              label="First Name"
              value={updatedDoc.first_name}
              onChange={(e) => {setUpdatedDoc({...updatedDoc, first_name: e.target.value})}}
            />
            <TextField
              fullWidth
              label="Last Name"
              value={updatedDoc.last_name}
              onChange={(e) => {setUpdatedDoc({...updatedDoc, last_name: e.target.value})}}
            />
            <TextField
              fullWidth
              label="Email"
              value={updatedDoc.email}
              onChange={(e) => {setUpdatedDoc({...updatedDoc, email: e.target.value})}}
            />
            <Select
              value={updatedDoc.gender}
              label="Gender"
              onChange={(e) => {setUpdatedDoc({...updatedDoc, gender: e.target.value})}}
            >
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
            </Select>
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
