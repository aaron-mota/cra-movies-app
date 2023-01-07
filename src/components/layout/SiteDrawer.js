import React, { useState } from "react"
// import Axios from "axios"
// import { useNavigate, useLocation } from "react-router-dom"
import { IconButton, Box, Drawer, ListItemText, ListItem, List, ListItemIcon, ListSubheader, Toolbar, ListItemAvatar, Avatar } from "@mui/material"
import { ExpandMore, ExpandLess, NotificationsTwoTone, OpacityTwoTone, CropSquareTwoTone, DescriptionTwoTone, TextSnippetTwoTone, SearchTwoTone, MapTwoTone, HelpOutlineTwoTone, SpeedTwoTone, BusinessTwoTone, LogoutTwoTone, PrecisionManufacturingTwoTone } from "@mui/icons-material"


export default function SiteDrawer({  
  width,
  onClose = () => {},
  anchor = "left",
  open = true,
  mainNav = true
}) {

  // const Logo = "hello"

  // let navigate = useNavigate()
  // let location = useLocation()
  let navigate = (param) => {}
  let location = {pathname: ""}
  const searchParams = new URLSearchParams(window.location.search)

  // const appState = useContext(StateContext)
  // const appDispatch = useContext(DispatchContext)

  const [notificationsLength, setNotificationsLength] = useState(0)

  const [selectedNavItem, setSelectedNavItem] = useState(location.pathname || "")
  const [isOpenDocuments, setIsOpenDocuments] = useState(false)
  const [isOpenNotes, setIsOpenNotes] = useState(false)


  const active = "primary.main"
  const activeBg = "primary.hover"
  // const hover = "themeDark.textActive"
  // const hoverBg = "themeDark.light"
  // const inactive = "themeDark.textInactive"
  // const inactiveBg = "themeDark.main"
  const hover = ""
  const hoverBg = ""
  const inactive = ""
  const inactiveBg = ""

  const listItemSx = {cursor: "pointer", marginBottom: 0, borderRadius: 2, }
  const listItemNestedSx = {cursor: "pointer", marginBottom: 0, borderRadius: 2 }

  function isCurrentLocation(pathStr) {
    return location.pathname == pathStr
  }

  function handleListItemClick(i, path="", header=false) {
    if (header) {
      if (header == "documents") setIsOpenDocuments(!isOpenDocuments)
      if (header == "notes") setIsOpenNotes(!isOpenNotes)
    }
    setSelectedNavItem(path)
    navigate(path)
  }

  function ListItemContainer({children}) {
    return(
      <ListItem
        sx={{
          paddingLeft: 1.5,
          paddingRight: 1.5,
          paddingTop: 0.2,
          paddingBottom: 0.2,
          // padding: 0
        }}
      >
      {children}
      </ListItem>
    )
  }


  return (
    <Drawer
      variant={mainNav ? "permanent" : "temporary"}
      anchor={anchor}
      open={open}
      onClose={onClose}
      sx={{
        flexShrink: 0,
        display: mainNav ? {xs: "none", md: "block" }: {xs: "block"},
        width: width,

        '& .MuiDrawer-paper': { 
          boxSizing: 'border-box',
          width: width,
          backgroundColor: inactiveBg,
        },
        '& .MuiList-root': { 
          paddingTop: 0,
        },
        '& .MuiListItemText-primary': {
          fontSize: "15px",
          letterSpacing: "0.5px",
        },
        '& .MuiListItemText-secondary': {
          color: inactive,
          opacity: 0.8
        },
        '& .MuiListSubheader-root': {
          // color: inactive,
          color: "#fff",
          backgroundColor: "transparent",
          textTransform: "uppercase",
          fontSize: "small",
          fontWeight: 600,
          lineHeight: "inherit",
          paddingTop: 4,
          paddingBottom: 0.5,
          paddingLeft: 3,
          opacity: 0.8
        },
        '& .MuiCollapse-root': {
          // backgroundColor: "grey.850"
          color: inactive,
        },
        '& #logo': {
          cursor: "pointer",
          color: active,
          backgroundColor: inactiveBg,
        },
        '& #logo:hover': {
          backgroundColor: inactiveBg,
          '& .MuiTypography-root': {
            color: hover
          }
        },
        '& #listItemProfile:hover': {
          color: inactive,
          backgroundColor: activeBg,
        },
        '& #listItemProfileContainer:hover': {
          color: inactive,
          backgroundColor: inactiveBg,
        }
      }}
    >
      {/* <Toolbar /> */} {/* <-- used as spacer when needed */}
      {/* <Toolbar id="logo" onClick={() => handleListItemClick(null, "/")} sx={{marginBottom: 2, marginTop: 2}}>
        <Logo width={"44px"} color={inactive} />
      </Toolbar> */}

      <List
        // https://stackoverflow.com/questions/61486061/how-to-set-selected-and-hover-color-of-listitem-in-mui
        dense
        sx={{
          '& .MuiListItem-root': {
            '& .MuiListItem-root': {
              paddingTop: "6px",
              paddingBottom: "6px",
              
              '&, & .MuiListItemIcon-root': {
                color: inactive,
                minWidth: "40px"
              },
              '& .MuiListItemText-primary': {
                fontSize: "15px",
                letterSpacing: "0.5px",
              },
              '& .MuiListItemText-secondary': {
                // color: "neutral.main"
              },
            },
            '& .MuiListItem-root:hover': {
              backgroundcolor: hoverBg,
              '&, & .MuiListItemIcon-root': {
                color: inactive,
                backgroundColor: hoverBg,
                minWidth: "40px"
              },
            },
            '& .Mui-selected, & .Mui-selected:hover': {
              // borderRight: `2px solid rgba(255,255,255,0.8)`,
              fontWeight: 600,
              color: active,
              backgroundColor: activeBg,
              '&, & .MuiListItemIcon-root': {
                color: active,
              },
              '& .MuiListItemText-primary': {
                fontWeight: 600,
                color: active,
              },
              '& .MuiListItemText-secondary': {
              },
            },
          },

          '& .MuiCollapse-root': {
            '& .MuiListItem-root': {
              '& .MuiListItem-root': {
                '&': {
                  color: inactive,
                },
                '& .MuiListItemIcon-root': {
                  opacity: 0.6,
                  minWidth: "40px"
                },
                '& .MuiListItemText-primary': {
                  fontSize: "15px",
                  letterSpacing: "0.5px",
                },
                '& .MuiListItemText-secondary': {
                  // color: "neutral.main"
                },
              },
              '& .MuiListItem-root:hover': {
                backgroundcolor: hoverBg,
                '&, & .MuiListItemIcon-root': {
                  color: inactive,
                  backgroundColor: hoverBg,
                  minWidth: "40px"
                },
              },
              '& .Mui-selected': {
                fontWeight: 600,
                color: hover,
                backgroundColor: inactiveBg,
                '&, & .MuiListItemIcon-root': {
                  color: active,
                  opacity: 1,
                },
                '& .MuiListItemText-primary': {
                  fontWeight: 600,
                  color: hover,
                },
                '& .MuiListItemText-secondary': {
                },
              },
              ' & .Mui-selected:hover': {
                fontWeight: 600,
                color: hover,
                backgroundColor: hoverBg,
                '&, & .MuiListItemIcon-root': {
                  color: active,
                  opacity: 1,
                },
                '& .MuiListItemText-primary': {
                  fontWeight: 600,
                  color: hover,
                },
                '& .MuiListItemText-secondary': {
                },
              },
          }
          },

          '& .MuiDivider-root': {
            color: inactive,
            borderColor: "rgba(255, 255, 255, 0.8)",
          }
        }}
      >
        {/* USER PROFILE */}
        <ListItem
          id="listItemProfileContainer"
          onClick={() => handleListItemClick(null, "/profile")}
          sx={{
            paddingLeft: 2.5,
            paddingRight: 2.5,
            paddingTop: 0,
            paddingBottom: 1,
            // padding: 0
          }}
        >
          <ListItem
            id="listItemProfile"
            selected={selectedNavItem === "/profile"}
            color="inherit"
            sx={{cursor: "pointer", backgroundColor: hoverBg, marginBottom: 0, borderRadius: 2}}
          >
            <ListItemAvatar onClick={() => handleListItemClick(null, "/profile")}>
              {/* <Avatar src={appState.user.avatar}/> */}
              <Avatar src="" />
            </ListItemAvatar>
            <ListItemText primary={<Box sx={{cursor: "pointer", color: hover}} onClick={() => handleListItemClick(null, "/profile")}>USERNAME</Box>} secondary={<>Basic Plan</>} secondaryTypographyProps={{color: "textSecondary"}} />
          </ListItem>
        </ListItem>

        {/* NOTIFICATIONS */}
        <ListItemContainer>
          <ListItem
            selected={selectedNavItem === "/notifications"}
            onClick={() => handleListItemClick(null, "/notifications")}
            color="inherit"
            sx={listItemSx}
          >
            <ListItemIcon>
              <NotificationsTwoTone />
            </ListItemIcon>
            <ListItemText primary="Notifications"/>
            <Box sx={{borderRadius: "6px", color: "themeDark.textActive70", backgroundColor: "primary.hoverDense", padding: "0px 8px", fontSize: "small", fontWeight: 600}}>
              {/* {true && <>+{17}</>} */}
              {notificationsLength > 0 && <>+{notificationsLength}</>}
              {/* {true && <>{17} new</>} */}
            </Box>
          </ListItem>
        </ListItemContainer>



        <ListSubheader>My Portfolio</ListSubheader>

        {/* DASHBOARD */}
        <ListItemContainer>
          <ListItem
            selected={selectedNavItem === "/dashboard"}
            onClick={() => handleListItemClick(null, "/dashboard")}
            color="inherit"
            sx={listItemSx}
          >
            <ListItemIcon>
              {/* <PieChartOutlineTwoTone /> */}
              <SpeedTwoTone />
            </ListItemIcon>
            <ListItemText primary="Dashboard"/>
          </ListItem>
        </ListItemContainer>

        {/* MYWELLS */}
        <ListItemContainer>
          <ListItem
            selected={selectedNavItem === "/mywells"}
            onClick={() => handleListItemClick(null, "/mywells")}
            color="inherit"
            sx={{cursor: "pointer"}}
          >
            <ListItemIcon>
              <OpacityTwoTone />
            </ListItemIcon>
            <ListItemText primary="MyWells"/>
          </ListItem>
        </ListItemContainer>
        
        {/* MYINTERESTS */}
        <ListItemContainer>
          <ListItem
            selected={selectedNavItem === "/myinterests"}
            onClick={() => handleListItemClick(null, "/myinterests")}
            color="inherit"
            sx={listItemSx}
          >
            <ListItemIcon>
              <CropSquareTwoTone />
            </ListItemIcon>
            <ListItemText primary="MyInterests"/>
          </ListItem>
        </ListItemContainer>



        
        <ListSubheader>Management</ListSubheader>

        <ListItemContainer>
          {/* DOCUMENTS */}        
          <ListItem
            secondaryAction={
              <IconButton edge="end" color="inherit" onClick={() => setIsOpenDocuments(!isOpenDocuments)}>
                {isOpenDocuments ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            }
            selected={selectedNavItem.split("?")?.at(0) === "/documents"}
            // onClick={() => handleListItemClick(null, "/documents", true)}
            color="inherit"
            sx={listItemSx}
          >
            <ListItemIcon onClick={() => handleListItemClick(null, "/documents", "documents")}>
              <DescriptionTwoTone />
            </ListItemIcon>
            <ListItemText
              onClick={() => handleListItemClick(null, "/documents", "documents")}
              primary="Documents"
              // secondary={"Checks, Deeds, Leases, Division Orders, ..."}
              secondaryTypographyProps={{
                noWrap: true,
                fontSize: 12,
                lineHeight: '16px',
                color: "textSecondary",
                opacity: 0.4
              }}
            />
          </ListItem>
        </ListItemContainer>

        {/* NOTES */}        
        <ListItemContainer>
          <ListItem
            secondaryAction={
              <IconButton edge="end" color="inherit" onClick={() => setIsOpenNotes(!isOpenNotes)}>
                {isOpenNotes ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            }
            selected={selectedNavItem.split("?")?.at(0) === "/notes"}
            // onClick={() => handleListItemClick(null, "/notes", true)}
            color="inherit"
            sx={listItemSx}
          >
            <ListItemIcon onClick={() => handleListItemClick(null, "/notes", "notes")}>
              <TextSnippetTwoTone />
            </ListItemIcon>
            <ListItemText
              onClick={() => handleListItemClick(null, "/notes", "notes")}
              primary="Notes"
              secondary=""
              secondaryTypographyProps={{
                noWrap: true,
                fontSize: 12,
                lineHeight: '16px',
              }}
            />
          </ListItem>
        </ListItemContainer>


        
        <ListSubheader>Discover</ListSubheader>
        {/* WELL SEARCH */}
        <ListItemContainer>
          <ListItem
            selected={selectedNavItem === "/wellsearch"}
            onClick={() => handleListItemClick(null, "/wellsearch")}
            color="inherit"
            sx={listItemSx}
          >
            <ListItemIcon>
              <SearchTwoTone />
            </ListItemIcon>
            <ListItemText primary="Well Search"/>
          </ListItem>
        </ListItemContainer>

        {/* MAP */}
        <ListItemContainer>
          <ListItem
            selected={selectedNavItem === "/map"}
            onClick={() => handleListItemClick(null, "/map")}
            color="inherit"
            sx={listItemSx}
          >
            <ListItemIcon>
              <MapTwoTone />
            </ListItemIcon>
            <ListItemText primary="Map"/>
          </ListItem>
        </ListItemContainer>

        {/* OPERATORS */}
        <ListItemContainer>
          <ListItem
            selected={selectedNavItem === "/operators"}
            onClick={() => handleListItemClick(null, "/operators")}
            color="inherit"
            sx={listItemSx}
          >
            <ListItemIcon>
              <BusinessTwoTone />
            </ListItemIcon>
            <ListItemText primary="Operators"/>
          </ListItem>
        </ListItemContainer>

        {/* RIGS */}
        <ListItemContainer>
          <ListItem
            selected={selectedNavItem === "/rigs"}
            onClick={() => handleListItemClick(null, "/rigs")}
            color="inherit"
            sx={listItemSx}
          >
            <ListItemIcon>
              <PrecisionManufacturingTwoTone />
            </ListItemIcon>
            <ListItemText primary="Rigs"/>
          </ListItem>
        </ListItemContainer>


        <ListSubheader>More</ListSubheader>

        {/* HELP */}
        <ListItemContainer>
          <ListItem
            selected={selectedNavItem === "/help"}
            onClick={() => handleListItemClick(null, "/help")}
            color="inherit"
            sx={listItemSx}
          >
            <ListItemIcon>
              <HelpOutlineTwoTone />
            </ListItemIcon>
            <ListItemText primary="Help"/>
          </ListItem>
        </ListItemContainer>

        {/* LOG OUT */}
        <ListItemContainer>
          <ListItem
            // selected={selectedNavItem === "/help"}
            // onClick={() => {appDispatch({type: "logout"}); appDispatch({type: "flashMessage", value: "You have successfully logged out."})}}
            color="inherit"
            sx={listItemSx}
          >
            <ListItemIcon>
              <LogoutTwoTone />
            </ListItemIcon>
            <ListItemText primary="Log out"/>
          </ListItem>
        </ListItemContainer>

      </List>
    </Drawer>
  )
}
