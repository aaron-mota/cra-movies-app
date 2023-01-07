import React from 'react'
import { useEffect, useState } from "react";
import { getDocs } from "../../services";
import { Skeleton, Stack, Typography } from "@mui/material";
import { colors } from "../../utils/variables";

export default function Users() {
  const [isFetching, setIsFetching] = useState(false)
  const [docs, setDocs] = useState([])

  useEffect(() => {
    const controller = new AbortController()
    async function fetchDocs() {
      setIsFetching(true)
      try {
        const docs = await getDocs(controller, true)
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
        {docs.map(({first_name, last_name, email, gender, ...rest}) => 
          <Stack
            sx={{
              backgroundColor: gender == "Female" ? colors.pink : colors.blue,
              borderRadius: 4,
              px: 2,
              py: 2
            }}
          >
            <Typography>{first_name} {last_name}</Typography>
            <Typography>{email}</Typography>
          </Stack>
        )}
      </Stack>
  )
}
