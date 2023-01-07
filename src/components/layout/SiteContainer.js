import { Stack } from '@mui/material'
import SiteDrawer from './SiteDrawer'
import SiteTopNav from './SiteTopNav'

export default function SiteContainer({
  children
}) {
  return (
    <Stack
      id="siteStack"
      direction="row"
      justifyContent="stretch"
      width={1}
      minHeight="100vh"
      sx={{
        backgroundColor: "#fff"
      }}
    >
      {/* APP BAR */}
      <SiteTopNav />

      {/* SIDE DRAWER */}
      <SiteDrawer />

      {/* [PAGE] */}
      {/* - consider Container (centered, horizontal padding... maybe on per-page level)  */}
      <Stack id="pageStack" 
        sx={{
          marginTop: 6,
          paddingLeft: {xs: 4, sm: 12},
          paddingRight: {xs: 4, sm: 12},
          flexGrow: 1,
          overflowX: "auto",
        }}
      >
        {/* <Toolbar /> */} {/* for topnav spacing */}
        {children}        
      </Stack>
    </Stack>
  )
}
