import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import SidebarLg from "../Sidebar/SidebarLg";
import SidebarSm from "../Sidebar/SidebarSm";
import Topbar from "../Topbar/Topbar";
import TopbarSm from "../Topbar/TopbarSm";
import Transaction from "./Transaction";

export default function TransactionLayout() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery("(max-width: 555px)");

  return (
    <Box className="flex flex-col md:flex-row h-full text-white box-border" sx={{bgcolor: theme.palette.primary.main}}>
      <Box className={`${isSmallScreen && "hidden"}  md:flex`}>
        <SidebarLg/>
      </Box>
      <Box sx={{display: isSmallScreen ? 'block' : 'none'}}>
        <SidebarSm />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: "19.5px 30px",
          boxSizing: "border-box",
          minHeight: "100vh",
        }}
      >
        <Box sx={{display: isSmallScreen ? 'none' : 'block'}}>
          <Topbar />
        </Box>
        <Box sx={{display: isSmallScreen ? 'block' : 'none'}}>
          <TopbarSm />
        </Box>

        <Box className="mt-7">
          <Transaction />
        </Box>
      </Box>
    </Box>
  );
}
