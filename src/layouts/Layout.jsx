import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import SidebarLg from "components/Dashboard-2/Sidebar/SidebarLg";
import SidebarSm from "components/Dashboard-2/Sidebar/SidebarSm";
import Topbar from "components/Dashboard-2/Topbar/Topbar";
import TopbarSm from "components/Dashboard-2/Topbar/TopbarSm";

export default function Layout({ children }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery("(max-width: 555px)");

  return (
    <Box className={`flex flex-col md:flex-row  text-white box-border`} sx={{ height: "100vh", bgcolor: theme.palette.primary.main }}>
      <Box className={`${isSmallScreen && "hidden"}  md:flex`}>
        <SidebarLg />
      </Box>
      <Box sx={{ display: isSmallScreen ? "block" : "none", }}>
        <SidebarSm />
      </Box>
      <Box component="main" sx={{ flexGrow: 1, width: "100%", maxWidth: "100%", overflow: "hidden" }}>
        {/* Top bar start here */}
        <Box>
          <Box sx={{ display: isSmallScreen ? "none" : "block", padding: '15px 30px' }}>
            <Topbar />
          </Box>
          <Box sx={{ display: isSmallScreen ? "block" : "none" }}>
            <TopbarSm />
          </Box>
          <Box>{children}</Box>
        </Box>
        {/* End top bar here */}
      </Box>
    </Box>
  )};