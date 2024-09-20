import { useTheme } from "@emotion/react";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton, Tab, Tabs, useMediaQuery } from "@mui/material";
import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { handleDrawer } from "redux/features/drawer/drawerSlice";

const AdminTab = memo(() => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const isSmallScreen = useMediaQuery("(max-width: 555px)");
  
    const handleDrawerToggle = () => {
      dispatch(handleDrawer());
    };
    const [value, setValue] = useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <Box>
    {isSmallScreen && 
      <IconButton
          onClick={handleDrawerToggle}
        sx={{
            width: 25,
            height: 25,
            borderRadius: 'none',
            position: 'fixed',
            top: 5,
            color: "var(--icon-color)",
        }}
        >
          <MenuIcon />
      </IconButton>
    }
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        variant="scrollable"
        sx={{
          "& .MuiTabs-indicator": {
            backgroundColor: "var(--active-color)",
          },
          "& .MuiTab-root": {
            textTransform: "none",
            fontWeight: "bold",
            color: "var(--text-color)",
            "&.Mui-selected": {
              color: `${theme.palette.text.activeTab}`,
              borderBottom: "2px solid",
              borderColor: "var(--color-white)",
            },
          },
        }}
      >
       <Tab
        label="Overview"
        className="w-[25%] !text-[18px]"
        sx={{
          ...(isSmallScreen && {
            fontSize: '16px !important',
            paddingBottom: '0px !important',
          }),
          textTransform: "none",
          fontWeight: "bold",
        }}
      />
        <Tab
          label="Clients"
          className="w-[25%] !text-[18px]"
          sx={{
            ...(isSmallScreen && {
              fontSize: '16px !important',
              paddingBottom: '0px !important',
            }),
            textTransform: "none",
            fontWeight: "bold",
          }}
        />
        <Tab
          label="Account"
          className="w-[25%] !text-[18px]"
          sx={{
            ...(isSmallScreen && {
              fontSize: '16px !important',
              paddingBottom: '0px !important',
            }),
            textTransform: "none",
            fontWeight: "bold",
          }}
        />
        <Tab
          label="Payments"
          className="w-[25%] !text-[18px]"
          sx={{
            ...(isSmallScreen && {
              fontSize: '16px !important',
              paddingBottom: '0px !important',
            }),
            textTransform: "none",
            fontWeight: "bold",
          }}
        />
      </Tabs>
    </Box>
  );
});

export default AdminTab;
