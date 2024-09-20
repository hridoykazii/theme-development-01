import { Avatar, AvatarGroup, Box, Tooltip, useTheme } from "@mui/material";
import React from "react";

const CustomAvatars = ({
  avatars = [], // Array of avatar objects: { alt, src, title, icon, borderColor }
  className,
  sx,
  max = 3,
  width = "40px",
  height = "40px",
  bgcolor = "primary.main",
  color = "white",
  hoverEffect = true, // Optional hover effect
}) => {
  const theme = useTheme();

  return (
    <Box className="relative">
      <AvatarGroup
        max={max}
        sx={{
          "& .MuiAvatar-root": {
            border: `2px solid ${theme.palette.primary.main}`, // Default border color
          },
        }}
      >
        {avatars.map((avatar, index) => (
          <Tooltip key={index} title={avatar.title}>
            <Avatar
              alt={avatar.alt}
              src={avatar.src}
              className={className}
              sx={{
                ...sx,
                width: avatar.width || width,
                height: avatar.height || height,
                bgcolor: avatar.bgcolor || bgcolor,
                color: avatar.color || color,
                transition: hoverEffect ? "0.3s ease" : "none",
                "&:hover": hoverEffect
                  ? {
                      transform: "translateY(-6px)", // Hover effect
                      border: `2px solid ${avatar.borderColor || theme.palette.secondary.main}`, // Change border on hover
                    }
                  : null,
              }}
            >
              {avatar.icon || avatar.alt?.[0]} {/* Display icon or initials */}
            </Avatar>
          </Tooltip>
        ))}
      </AvatarGroup>
    </Box>
  );
};

export default CustomAvatars;
