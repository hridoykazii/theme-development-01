import { Avatar, Badge, Box, Stack, styled, useTheme } from "@mui/material";
import React from "react";

// Function to get initials from a name
const getInitials = (name) => {
  const words = name.split(" ");
  const initials = words.length > 1 ? `${words[0][0]}${words[1][0]}` : words[0][0];
  return initials.toUpperCase();
};

const Avatars = (props) => {
  const theme = useTheme();
  const { alt, src, className, sx, bgcolor, color, width, height, icon,variant, children, SmallAvatarSrc, badgeAvatar, activeImg,  BadgeImgSrc} = props; // Add 'icon' prop

  console.log("That is for check image is ok", badgeAvatar);

  // that is for badge avatar 
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));
  
  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  }));





  return (
    <Stack direction="row" spacing={2}>
      {/* Case where 'icon' is passed */}
      {icon ? (
        <Avatar
        variant={variant}
          sx={{
            ...sx,
            width: width || "46px",
            height: height || "46px",
            bgcolor: bgcolor ? bgcolor : theme.palette.primary.active,
            color: color || "white",
          }}
        >
          {icon} {/* Render the passed icon here */}
        </Avatar>
      ) : !children && (
      <Box>
        {!badgeAvatar && (
          <Avatar
          alt={alt}
          src={src}
         
          className={className}
          sx={{
            ...sx,
            width: width || "46px",
            height: height || "46px",
            bgcolor: bgcolor ? bgcolor : theme.palette.primary.active,
          }}
        />
        )}
      </Box>
      )}
      {/* Case where 'children' is passed */}
      {children && !icon &&  (
        <Avatar
          sx={{
            ...sx,
            width: width || "46px",
            height: height || "46px",
            bgcolor: bgcolor ? bgcolor : theme.palette.primary.active,
            color: color ? color : "white",
            fontSize: "16px",
            letterSpacing: "-1px",
          }}
        >
          {getInitials(children)} {/* Render initials */}
        </Avatar>
      )}

      {/* that if for bagge icon  */}
      {badgeAvatar && (
        <Box className="flex items-center gap-x-4">
          <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="hera Sharp" src={activeImg} />
      </StyledBadge>
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={
          <SmallAvatar alt="Remy Sharp" src={BadgeImgSrc} />
        }
      >
        <Avatar alt="Travis Howard" src={src} />
      </Badge>
        </Box>
      )}
    
    

    </Stack>
  );
};

export default Avatars;
