
import React, { useState } from "react"
import { Stack, AppBar, Toolbar, Button, Link } from "@mui/material"



export default function SiteTopNav({
  drawerWidth = 0
}) {
  const px = 12
  const buttonOpacity = 0.8
  const buttonsMain = [
    {
      label: "home",
      href: "/",
      // bookmark: "",
    },
    {
      label: "users",
      href: "/users",
      // bookmark: "#users",
    },
  ]

  // const router = useRouter()
  // const [url, setUrl] = useState(router.pathname || "")
  const [url, setUrl] = useState("")



  return (
    <AppBar
      position="fixed"
      elevation={0}

      sx={{
        backgroundColor: "transparent",
        color: "#fff",
        paddingTop: {xs: 1, sm: 1.5, md: 4},
        paddingBottom: {xs: 1, sm: 1.5, md: 2},
        px: {xs: (px * 0.2), sm: (px * 0.4), md: px},
        width: {
          // md: `calc(100% - ${width}px)`
        },

        '& .MuiToolbar-root': {
          paddingLeft: 0,
          paddingRight: 0
        },

        '& .MuiButton-root': {
          borderRadius: "400px",
        },
        '& .MuiButton-text': {
          '&:hover': {
            opacity: 1,
            filter: "opacity(100%)",
            // fontWeight: 600,
            background: "none",
          }
        },
        '& .MuiButton-contained': {
          opacity: 1,
          // boxShadow: "4px 4px 12px 0px rgba(0,0,0,0.2)", 
          boxShadow: "4px 4px 12px 0px rgba(0, 123, 255, 0.2)", 
        },
      }}
    >

      <Toolbar variant="dense" sx={{minHeight: {xs: 7, sm: 7 }}} >

        <Stack direction="row" gap={2} display={"block"}>
            {buttonsMain.map(({label, href}) => (
              <Link key={`key-${label}`} to={href}>
                <Button size="large" color="inherit"
                  href={href}
                  sx={{
                  opacity: (url == href) ? 1 : buttonOpacity,
                  // fontWeight: (url == bookmark) && 600,
                }}>
                    {label}
                </Button>
              </Link>
            ))}
        </Stack>

      </Toolbar>

    </AppBar>
  )
}
