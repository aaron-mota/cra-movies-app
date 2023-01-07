import React from 'react'
import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { Stack, Typography } from "@mui/material";
import { colors } from "../../utils/constants";
import { getDoc } from '../../services';
import LinkWrapped from '../../components/utils/LinkWrapped';

export default function User() {
  let location = useLocation();
  const params = useParams()
  const id = params.id

  const [isFetching, setIsFetching] = useState(false)
  const [doc, setDoc] = useState({})

  // GET DOC
  useEffect(() => {
    const controller = new AbortController()
    async function fetchDoc() {
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
    fetchDoc()
    return () => {
      controller.abort()
    }
  }, [])


  return (
    <>
      <LinkWrapped to={"/users"} sx={{mb: 2}}>
        &lt; Go to Users
      </LinkWrapped>

      {(!isFetching && !doc?.first_name) ? "User not found.  Please try again." : 
        <>
          <Typography variant="h4" component="h1" sx={{mb: 2}}>{doc.first_name} {doc.last_name}</Typography>

          <Stack
            sx={{
              backgroundColor: doc.gender == "Female" ? colors.pink : colors.blue,
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

    </>
  )
}
