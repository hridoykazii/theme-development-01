import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import MainSection from "./MainContent/MainSection";
import SidebarLg from "./Sidebar/SidebarLg";
import SidebarSm from "./Sidebar/SidebarSm";

export default function AdminLayout() {
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
          padding: "0px",
          boxSizing: "border-box",
          minHeight: "100vh",
        }}
      >
        <MainSection/>
      </Box>
    </Box>
  );
}
