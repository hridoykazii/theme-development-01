import { useTheme } from "@emotion/react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LayersIcon from "@mui/icons-material/Layers";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SettingsIcon from "@mui/icons-material/Settings";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import SupportIcon from "@mui/icons-material/Support";
import { Box, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const theme = useTheme();

  const [activeMenu, setActiveMenu] = useState("transfer");
  const activeMenuHandler = useCallback((active) => {
    setActiveMenu(active);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeMenu]);

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        height: "75vh",
        bgcolor: theme.palette.primary.main,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginBottom: "20px",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <Box className="">
        <ListItemButton
          disableRipple
          onClick={() => {
            navigate("/");
            activeMenuHandler("dashboard");
          }}
        >
          <ListItemIcon>
            <DashboardIcon sx={{ color: "var(--icon-color)" }} />
          </ListItemIcon>
          <ListItemText
            primary="Dashboard"
            sx={{
              color: "var(--text-color)",
            }}
          />
        </ListItemButton>
        <ListItemButton disableRipple>
          <ListItemIcon>
            <ManageAccountsIcon sx={{ color: "var(--icon-color)" }} />
          </ListItemIcon>
          <ListItemText
            primary="My Account"
            sx={{ color: "var(--text-color)" }}
          />
        </ListItemButton>
        <ListItemButton disableRipple onClick={() => { navigate("/finance"); activeMenuHandler('finance')}}>
          <ListItemIcon>
            <AttachMoneyIcon
              sx={{ color: activeMenu ==="finance" ? "var(--active-color)" :"var(--icon-color)" }}/>
          </ListItemIcon>
          <ListItemText
            primary="Finance"
            className= {activeMenu==="finance" ? "text-[var(--active-color)]":"text-[var(--text-color)]"}
          />
        </ListItemButton>
      </Box>
      <Box>
        <ListItemButton disableRipple onClick={() => { navigate("/admin"); activeMenuHandler('admin')}}>
          <ListItemIcon>
            <LayersIcon sx={{ color: activeMenu ==="admin" ? "var(--active-color)" :"var(--icon-color)" }}/>
          </ListItemIcon>
          <ListItemText
            primary="Reports"
            className= {activeMenu==="admin" ? "text-[var(--active-color)]":"text-[var(--text-color)]"}
          />
        </ListItemButton>
        <ListItemButton disableRipple>
          <ListItemIcon>
            <StarBorderIcon sx={{ color: "var(--icon-color)" }} />
          </ListItemIcon>
          <ListItemText
            primary="Reports"
            className="text-[var(--text-color)]"
          />
        </ListItemButton>
        <ListItemButton disableRipple onClick={() =>{ navigate("/transaction"); activeMenuHandler('transfer')}}>
          <ListItemIcon>
            <RocketLaunchIcon
              sx={{ color: activeMenu ==="transfer" ? "var(--active-color)" :"var(--icon-color)" }}
            />
          </ListItemIcon>
          <ListItemText
            primary="Transfer"
            className= {activeMenu==="transfer" ? "text-[var(--active-color)]":"text-[var(--text-color)]"}
          />
        </ListItemButton>
        <ListItemButton disableRipple>
          <ListItemIcon>
            <SupportIcon sx={{ color: "var(--icon-color)" }} />
          </ListItemIcon>
          <ListItemText
            primary="Support"
            className="text-[var(--text-color)]"
          />
        </ListItemButton>
        <ListItemButton disableRipple>
          <ListItemIcon>
            <SettingsIcon sx={{ color: "var(--icon-color)" }} />
          </ListItemIcon>
          <ListItemText
            primary="Settings"
            className="text-[var(--text-color)]"
          />
        </ListItemButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <img
          src="/assets/images/icon/man.png"
          alt="user"
          width="50"
          style={{ marginLeft: 7 }}
        />
        <Box sx={{ marginLeft: "20px" }} className="text-[var(--text-color)]">
          <Typography className="text-[var(--text-color)]">
            Demo user
          </Typography>
          <Typography>demo_user@fxcrm.net</Typography>
        </Box>
      </Box>
    </List>
  );
}
