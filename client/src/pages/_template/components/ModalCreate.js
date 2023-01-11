import React, { useEffect, useState } from 'react'
import { Button, Card, CardActions, CardContent, MenuItem, Modal, Select, Stack, TextField } from '@mui/material'
import { createDoc } from '../../../services';
import { collection } from '../Docs';

export default function ModalCreate({
  open,
  setOpen,
}) {

  const initialDoc = {
    id: "",
    // add other fields here
  }
  const [updatedDoc, setUpdatedDoc] = useState({...initialDoc})
  const [isCreating, setIsCreating] = useState(false)
  const [createDocRequestCount, setCreateDocRequestCount] = useState(0)


  function handleSave() {
    setCreateDocRequestCount(prev => prev + 1)
  }
  function handleClose() {
    setUpdatedDoc({...initialDoc})
    setOpen(false)
  }

  function keyPress(e){
    if(e.key == "Enter"){
      handleSave()
    }
  }


  
  // CREATE DOC
  useEffect(() => {
    if (createDocRequestCount === 0) {return}
    else {
      const controller = new AbortController()
      async function createSingle() {
        setIsCreating(true)
        console.log(updatedDoc)
        try {
          const doc = await createDoc(updatedDoc, collection, controller, true)
          setOpen(false)
        } catch(e) {
          console.log("There was a problem or the request was cancelled.", e)
        } finally {
          setIsCreating(false)
        }
      }
      createSingle()
      return () => {
        controller.abort()
      }
    }
  }, [createDocRequestCount])


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
          <Stack
            gap={2}
            onKeyDown={(e) => keyPress(e)}
          >
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
