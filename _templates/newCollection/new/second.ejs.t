---
to: client/src/pages/<%= h.inflection.singularize(Name) =%>.js
unless_exists: true
---

import React from 'react'
import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom'
import { Button, Stack, Typography } from "@mui/material";
import { colors } from "../../utils/constants";
import { getDoc, deleteDoc } from '../../services';
import LinkWrapped from '../../components/utils/LinkWrapped';
import ModalUpdate from './components/ModalUpdate';
import { makeSingular } from '../../utils/makeSingular';
import { collection } from './<%= Name =%>';

export default function <%= h.inflection.singularize(Name) =%> {
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
        const doc = await getDoc(id, collection, controller, true)
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
    if (window.confirm("Are you sure you want to delete this?")) {
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
          const success = await deleteDoc(doc.id, collection, controller, true)
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
      <div>
        <Button onClick={() => navigate(-1)}>
          &lt; Back
        </Button>
      </div>

      {(!isFetching && !doc?.first_name) ? `${makeSingular(collection)} not found.  Please try again.` : 
        <>
          <Stack direction="row" gap={2} alignItems="center" sx={{mb: 2}}>
            <Typography variant="h4" component="h1">{doc.id}</Typography>

            <Stack direction="row" gap={2}>
              <Button variant="contained" onClick={() => setUpdateModalOpen(true)}>Edit</Button>
              <Button variant="contained" onClick={handleDelete}>Delete</Button>
            </Stack>
          </Stack>

          <Stack>
            {doc?.entries().map(([key, value]) => 
              <Stack direction="row" gap={2}>
                <Typography>{key.toString()}</Typography>
                <Typography>{value?.toString()}</Typography>
              </Stack>
            )}
          </Stack>
        </>
      }

      {updateModalOpen && <ModalUpdate doc={doc} setDoc={setDoc} open={updateModalOpen} setOpen={setUpdateModalOpen} />}

    </>
  )
}
