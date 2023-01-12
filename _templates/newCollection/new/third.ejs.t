---
to: client/src/pages/components/DocsList.js
unless_exists: true
---

import React from 'react'
import { useEffect, useState } from "react";
import { getDocs } from "../../../services";
import { Skeleton, Stack, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom'
import { collection } from '../<=% Name =%>';

export function DocsList() {
  const navigate = useNavigate()

  const [isFetching, setIsFetching] = useState(false)
  const [docs, setDocs] = useState([])

  // GET DOCS
  useEffect(() => {
    const controller = new AbortController()
    async function fetchDocs() {
      setIsFetching(true)
      try {
        const docs = await getDocs(collection, controller, true)
        setDocs(docs)
      } catch(e) {
        console.log("There was a problem or the request was cancelled.", e)
      } finally {
        setIsFetching(false)
      }
    }
    fetchDocs()
    return () => {
      controller.abort()
    }
  }, [])


  return (
    isFetching ? <Skeleton width={210} height={118} /> : 
      <Stack gap={1}>
        {docs.map(doc => 
          <Stack
            key={doc.id}
            onClick={() => navigate(`/${collection}/${doc.id}`)}
            sx={{
              backgroundColor: "#00000010",
              px: 2,
              py: 2,
              '&:hover': {
                cursor: "pointer"
              }
            }}
          >
            {doc.entries().map(([key, value]) => 
              <Stack direction="row" gap={2}>
                <Typography>{key.toString()}</Typography>
                <Typography>{value?.toString()}</Typography>
              </Stack>
            )}
          </Stack>
        )}
      </Stack>
  )
}
