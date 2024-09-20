import BrightnessIcon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton } from "@mui/material";
import { Fragment, memo } from "react";
import { useDispatch } from "react-redux";
import { handleDrawer } from "redux/features/drawer/drawerSlice";

const TopbarSm = memo(() => {
  const dispatch = useDispatch();

  const handleDrawerToggle = () => {
    dispatch(handleDrawer());
  };
  return (
    <Fragment>
      <Box className="flex justify-between items-center">
        <Box className="flex justify-start items-center gap-2">
          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              width: 25,
              height: 25,
              borderRadius: "none",
              color: "var(--icon-color)",
            }}
          >
            <MenuIcon />
          </IconButton>
          <img src="/assets/images/logo/logo.png" alt="logo" width={"170px"} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 2,
          }}
        >
          <BrightnessIcon sx={{ color: "var(--icon-color)" }} />
          <img src="/assets/images/icon/man.png" alt="user" width="40" />
        </Box>
      </Box>
    </Fragment>
  );
});

export default TopbarSm;
