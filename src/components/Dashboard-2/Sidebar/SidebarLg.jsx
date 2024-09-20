import { useTheme } from "@emotion/react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton, styled, useMediaQuery } from '@mui/material';
import MuiDrawer from "@mui/material/Drawer";
import { memo } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { handleDrawer } from "redux/features/drawer/drawerSlice";
import Sidebar from './Sidebar';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    ...theme.mixins.toolbar,
  }));
  
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const SidebarLg = memo(() => {
    const dispatch = useDispatch();
    const theme = useTheme();
    const isOpen = useSelector((state) => state.drawer.drawerOpenClose); // Use useSelector to get the drawer state
    const isSmallScreen = useMediaQuery("(max-width: 555px)");

    const handleDrawerToggle = () => {
      dispatch(handleDrawer())
    };

    return (
        <Drawer
          variant="permanent"
          open={isOpen}
          PaperProps={{
            className: "custom-scrollbar",
            sx: {
              display: isSmallScreen ? "none" : "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              bgcolor: theme.palette.primary.main,
              color: "white",
              paddingTop: "2.5pt",
              borderWidth: "2px",
              borderColor: theme.palette.primary.border,
            },
          }}
        >
          <Box>
            <DrawerHeader>
              <IconButton
                onClick={handleDrawerToggle}
                sx={{
                  width: 25,
                  height: 25,
                  position: "fixed",
                  top: "10px",
                  left: isOpen ? "228px" : "20px",
                  background: isOpen ? "var(--btn-bg-color)" : "none",
                  color: "var(--icon-color)",
                  transition: "left 0.3s",
                  "&:hover": {
                    backgroundColor: isOpen ? "var(--btn-bg-color)" : "none",
                  },
                }}
              >
                {isOpen ? <ChevronLeftIcon /> : <MenuIcon />}
              </IconButton>
            </DrawerHeader>
          </Box>
          <Box>
            <Sidebar />
          </Box>
        </Drawer>
    );
});

export default SidebarLg;
