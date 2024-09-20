import React from "react";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Avatar, useTheme, styled } from "@mui/material";

// Custom styling for the Switch track
const CustomSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-track": {
    height: "100%",
    width: "100%",
    borderRadius: 7,
    zIndex: -1,
    backgroundColor: theme.palette.primary.active,
  },
  "& .MuiSwitch-switchBase": {
    color: "#797FFF",
  },
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "gray",
  }
}));

const CustomBadge = ({
  src,  // Avatar source
  alt = "Avatar",  // Avatar alt text
  avatarSize = 40,  // Avatar size
  sx,  // Custom styles
  count,  // Count value
  onIncrement,  // Function to increment the count
  onDecrement,  // Function to decrement the count
  invisible,  // Badge visibility
  onSwitchChange,  // Handler for Switch state change
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        "& > *": {
          marginBottom: 2,
        },
        "& .MuiBadge-root": {
          marginRight: 4,
        },
      }}
    >
      <div>
        <Badge
          sx={{
            color: "white",
            "& .MuiBadge-badge": {
              bgcolor: theme.palette.primary.active,
            },
          }}
          badgeContent={count}
        >
          <Avatar
            alt={alt}
            src={src ? src : "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
            variant="square"
            sx={sx ? sx : { width: avatarSize, height: avatarSize }}
          />
        </Badge>
        <ButtonGroup>
          <Button
            sx={{
              color: theme.palette.primary.active,
              borderColor: theme.palette.primary.active,
              ":hover": {
                borderColor: theme.palette.primary.active,
                transition: 0.6,
              },
            }}
            aria-label="reduce"
            onClick={onDecrement}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            sx={{
              color: theme.palette.primary.active,
              borderColor: theme.palette.primary.active,
              ":hover": {
                borderColor: theme.palette.primary.active,
                transition: 0.6,
              },
            }}
            aria-label="increase"
            onClick={onIncrement}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
      <div>
        <Badge
          sx={{
            color: "white",
            "& .MuiBadge-badge": {
              bgcolor: invisible ? theme.palette.grey[400] : theme.palette.primary.active,
            },
          }}
          variant="dot"
          invisible={invisible}
        >
          <Avatar
            alt={alt}
            src={src ? src : "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
            sx={sx ? sx : { width: avatarSize, height: avatarSize }}
          />
        </Badge>
        <FormControlLabel
          sx={{ color: "gray" }}
          control={
            <CustomSwitch
              checked={invisible}
              onChange={onSwitchChange}
            />
          }
          label="Show Badge"
        />
      </div>
    </Box>
  );
};

export default CustomBadge;
