import { useTheme } from "@emotion/react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Box, IconButton, styled } from '@mui/material';
import MuiDrawer from "@mui/material/Drawer";
import { memo } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { handleDrawer } from "redux/features/drawer/drawerSlice";
import Sidebar from './Sidebar';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create(["width", "opacity", "visibility"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  opacity: 1,
  visibility: 'visible',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create(["width", "opacity", "visibility"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  opacity: 0,
  visibility: 'hidden',
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
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

const SidebarSm = memo(() => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isOpen = useSelector((state) => state.drawer.drawerOpenClose);

  const handleDrawerToggle = () => {
    dispatch(handleDrawer());
  };

  return (
    <Drawer
      variant="permanent"
      open={isOpen}
      PaperProps={{
        sx: {
          display: 'flex',
          flexDirection: "column",
          justifyContent: "space-between",
          bgcolor: theme.palette.primary.main,
          color: "white",
          borderWidth: "2px",
          borderColor: theme.palette.primary.border,
        },
      }}
    >
      <DrawerHeader>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            width: 25,
            height: 25,
            position: "fixed",
            top: "10px",
            left: isOpen ? "228px" : "8px",
            background: "var(--btn-bg-color)",
            color: "var(--icon-color)",
            transition: "left 0.3s",
            "&:hover": {
              backgroundColor: "var(--btn-bg-color)",
            },
          }}
        >
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Box>
        <Sidebar />
      </Box>
    </Drawer>
  );
});

export default SidebarSm;
