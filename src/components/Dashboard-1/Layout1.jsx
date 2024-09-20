import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import HeroSection from "./MainContainer/HeroSection";
import ResultTable from "./MainContainer/ResultTable";
import SidebarLg from "./Sidebar/SidebarLg";
import SidebarSm from "./Sidebar/SidebarSm";
import Topbar from "./Topbar/Topbar";
import TopbarSm from "./Topbar/TopbarSm";

export default function Layouts_1() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery('(max-width: 555px)')

  return (
    <Box className={`flex flex-col md:flex-row  text-white box-border`} sx={{minHeight: '100vh', bgcolor: theme.palette.primary.main}}>
      <Box className={`${isSmallScreen && "hidden"}  md:flex`}>
        <SidebarLg/>
      </Box>
      <Box sx={{display: isSmallScreen ? 'block' : 'none'}}>
        <SidebarSm />
      </Box>
      <Box component="main" sx={{ flexGrow: 1, padding: '19.5px 30px',boxSizing: 'border-box' }}>
        {/* Top bar start here */}
        <Box>
          <Box sx={{display: isSmallScreen ? 'none' : 'block'}}>
            <Topbar />
          </Box>
          <Box sx={{display: isSmallScreen ? 'block' : 'none'}}>
            <TopbarSm />
          </Box>
          <Box className="!mt-[30px]">
            <HeroSection />
          </Box>
          <ResultTable />
        </Box>
        {/* End top bar here */}
      </Box>
    </Box>
  );
}
