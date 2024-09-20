import { Avatar, Box, useTheme } from '@mui/material';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';

const Badges = ({
  src,
  alt = "Avatar",
  badgeContent = 4,
  badgeColor = "success",
  badgeOpacity = 1,  // Default to 1
  bgcolor,
  color,
  avatarSize = 40,
  badgePosition = "top-right", // Accept badgePosition like "top-right"
  children,
  variant,
  dot,
  sx
}) => {
  const theme = useTheme();

  // Split the badgePosition into vertical and horizontal positions
  const [vertical, horizontal] = badgePosition.split('-') || ['top', 'right'];

  // Handle badge content display logic for 99+ and 999+
  const displayBadgeContent = badgeContent >= 1000 
    ? '999+' 
    : badgeContent >= 100 
      ? '99+' 
      : badgeContent;

      const badgeBgColor = bgcolor ? bgcolor : `${bgcolor}, ${badgeOpacity}`

  return (
    <Stack spacing={2} direction="row">
      <Badge
        badgeContent={displayBadgeContent}  // Display modified badge content
        color={badgeColor}
        variant={dot ? "dot" : variant}
        anchorOrigin={{
          vertical: vertical,  // Default to 'top'
          horizontal: horizontal,  // Default to 'right'
        }}
        sx={{
          opacity: badgeOpacity,  // Apply opacity directly without wrapping in {}
          "& .MuiBadge-badge": {
            bgcolor: badgeBgColor || theme.palette.primary.active,
            color: color || "white",
            mt: "8px",
            mb: "8px",
            borderRadius: "50px",
            padding: "5px",
            border: `2px solid ${theme.palette.primary.main}`,
          },
        }}
      >
        {!children && (
          <Avatar
            alt={alt}
            src={src}
            variant={variant}
            sx={sx ? sx : { width: avatarSize, height: avatarSize }}
          />
        )}
        {children && (
          <Box sx={{ mt: "10px" }}>
            {children}
          </Box>
        )}
      </Badge>
    </Stack>
  );
};

export default Badges;
