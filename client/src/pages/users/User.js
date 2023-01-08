import React from 'react'
import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom'
import { Button, Stack, Typography } from "@mui/material";
import { colors } from "../../utils/constants";
import { getDoc, deleteDoc } from '../../services';
import LinkWrapped from '../../components/utils/LinkWrapped';
import ModalUpdateUser from './components/ModalUpdateUser';

export default function User() {
  const navigate = useNavigate()
  const params = useParams()
  const id = params.id

  const [isFetching, setIsFetching] = useState(false)
  const [doc, setDoc] = useState({})

  const [isDeleting, setIsDeleting] = useState(false)
  const [deleteDocRequestCount, setDeleteDocRequestCount] = useState(0)

  const [updateModalOpen, setUpdateModalOpen] = useState(false)

  // GET DOC
  useEffect(() => {
    const controller = new AbortController()
    async function getSingle() {
      setIsFetching(true)
      try {
        const doc = await getDoc(id, controller, true)
        setDoc(doc)
      } catch(e) {
        console.log("There was a problem or the request was cancelled.", e)
      } finally {
        setIsFetching(false)
      }
    }
    getSingle()
    return () => {
      controller.abort()
    }
  }, [])

  // DELETE DOC
  function handleDelete() {
    if (window.confirm("Are you sure you want to delete this note?")) {
      setDeleteDocRequestCount(prev => prev + 1)
    }
  }
  useEffect(() => {
    if (deleteDocRequestCount === 0) {return}
    else {
      const controller = new AbortController()
      async function deleteSingle() {
        setIsDeleting(true)
        try {
          const success = await deleteDoc(doc.id, controller, true)
          if (success) {
            navigate(-1)
          } else {
            throw Error("Unsuccessful")
          }
        } catch(e) {
          console.log("There was a problem or the request was cancelled.", e)
        } finally {
          setIsDeleting(false)
        }
      }
      deleteSingle()
      return () => {
        controller.abort()
      }
    }
  }, [deleteDocRequestCount])




  return (
    <>
      <LinkWrapped to={"/users"} sx={{mb: 2}}>
        &lt; Go to Users
      </LinkWrapped>

      {(!isFetching && !doc?.first_name) ? "User not found.  Please try again." : 
        <>
          <Typography variant="h4" component="h1" sx={{mb: 2}}>{doc.first_name} {doc.last_name}</Typography>

          <Stack direction="row" gap={2}>
            <Button onClick={() => setUpdateModalOpen(true)}>Edit</Button>
            <Button onClick={handleDelete}>Delete</Button>
          </Stack>

          <Stack
            sx={{
              backgroundColor: doc.gender === "Female" ? colors.pink : colors.blue,
              borderRadius: 4,
              px: 2,
              py: 2
            }}
          >
            <Typography>{doc.first_name} {doc.last_name}</Typography>
            <Typography>{doc.email}</Typography>
          </Stack>
        </>
      }

      {updateModalOpen && <ModalUpdateUser doc={doc} setDoc={setDoc} open={updateModalOpen} setOpen={setUpdateModalOpen} />}

    </>
  )
}
