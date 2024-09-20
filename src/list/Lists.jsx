import AddIcon from "@mui/icons-material/Add";
import CommentIcon from "@mui/icons-material/Comment";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Avatar, Badge, Button, Checkbox, LinearProgress, linearProgressClasses, ListItemAvatar, styled, Switch, Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import React, { useState } from "react";
import JavascriptIcon from "@mui/icons-material/Javascript";
// import { InboxIcon } from '@mui/icons-material/Inbox';

const Lists = (props) => {
  const {
    items,
    bgColor,
    hoverColor,
    iconColor,
    avatarAltText,
    iconButtonAction,
    textColor,
    dense,
    activeStatus,
    data,
    progressData,
    statusTime,
    avatarUrl,
    name,
    buttonText,
    usersData,
    sections,
    itemsPerSection,
    simpleList,
    nestedList,
    denseList,
    listWithSecondaryText,
    selectedListItem,
    listWithCheckbox,
    listWithSwitch,
    stickySubheader,
    usersList,
    progressList,
    customStyles,
    icon: IconComponent, progressValue, progressBg, text,
  } = props;
  const theme = useTheme();

  const [open, setOpen] = React.useState(true);
  const [checked, setChecked] = React.useState(["wifi", "location"]);

  const handleClick = () => {
    setOpen(!open);
  };

  // State to track the selected item, default to the first item
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Function to handle item selection
  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  //That is for mobile view list function
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  // that is for user list item section
  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "green";
      case "offline":
        return "gray";
      case "away":
        return "orange";
      case "in-meeting":
        return "red";
      default:
        return undefined;
    }
  };

  // that is for user list item section
  const getStatusText = (status) => {
    switch (status) {
      case "active":
        return "Online";
      case "offline":
        return "Offline";
      case "away":
        return "Away";
      case "in-meeting":
        return "In Meeting";
      default:
        return "";
    }
  };

  // that is for progress bar section
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 5,
    maxWidth: 1000,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[200],
      ...theme.applyStyles("dark", {
        backgroundColor: theme.palette.grey[800],
      }),
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
    maxWidth: 1000,
      backgroundColor: iconColor,
      ...theme.applyStyles("dark", {
        backgroundColor: iconColor,
      }),
    },
  }));

  console.log("that is user data by array ", progressData);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className="w-full">
      {/* that is for simple list copmponent  */}
      {simpleList && (
        <Box sx={{ width: "100%", maxWidth: 1000, bgcolor: bgColor }}>
          {items.map((section, index) => (
            <React.Fragment key={index}>
              <nav aria-label={`section-${index}`}>
                <List sx={{ backgroundColor: bgColor }}>
                  {section.map((item, idx) => (
                    <ListItem key={idx} disablePadding sx={{ marginBottom: "10px" }}>
                      <ListItemButton sx={{ "&:hover": { backgroundColor: hoverColor, transition: 0.4 } }}>
                        <ListItemIcon sx={{ color: iconColor }}>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} sx={{ color: textColor }} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </nav>
              {index < items.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </Box>
      )}

      {/* That is for nestedList component  */}
      {nestedList && (
        <div>
          <List
            sx={{
              width: "100%",
              maxWidth: 1000,
              bgcolor: bgColor ? bgColor : theme.palette.primary.main,
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            {items.map((item, index) => (
              <React.Fragment key={index}>
                <ListItemButton onClick={item.collapsible ? handleClick : null} sx={{ "&:hover": { backgroundColor: hoverColor, transition: 0.4 } }}>
                  <ListItemIcon>{item.icon ? React.cloneElement(item.icon, { sx: { color: iconColor || theme.palette.primary.active } }) : null}</ListItemIcon>
                  <ListItemText primary={item.label} sx={{ color: textColor || theme.palette.primary.semiWhite }} />
                  {item.collapsible && (open ? <ExpandLess /> : <ExpandMore />)}
                </ListItemButton>

                {item.collapsible && (
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {item.subItems.map((subItem, subIndex) => (
                        <ListItemButton key={subIndex} sx={{ pl: 4, "&:hover": { backgroundColor: hoverColor, transition: 0.4 } }}>
                          <ListItemIcon>{subItem.icon ? React.cloneElement(subItem.icon, { sx: { color: iconColor || theme.palette.primary.active } }) : null}</ListItemIcon>
                          <ListItemText primary={subItem.label} sx={{ color: textColor || theme.palette.primary.semiWhite }} />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                )}

                {item.divider && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </div>
      )}

      {/* that is for Dense List component  */}
      {denseList && (
        <div>
          <List
            sx={{
              width: "100%",
              maxWidth: 1000,
              bgcolor: bgColor ? bgColor : theme.palette.primary.main,
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            dense={dense} // Adding dense prop
          >
            {items.map((item, index) => (
              <React.Fragment key={index}>
                <ListItemButton
                  dense={dense} // Apply dense to ListItemButton
                  onClick={item.collapsible ? handleClick : null}
                  sx={{ "&:hover": { backgroundColor: hoverColor, transition: 0.4 } }}
                >
                  <ListItemIcon>{item.icon ? React.cloneElement(item.icon, { sx: { color: iconColor || theme.palette.primary.active } }) : null}</ListItemIcon>
                  <ListItemText primary={item.label} sx={{ color: textColor || theme.palette.primary.semiWhite }} />
                  {item.collapsible && (open ? <ExpandLess /> : <ExpandMore />)}
                </ListItemButton>

                {item.collapsible && (
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding dense={dense}>
                      {item.subItems.map((subItem, subIndex) => (
                        <ListItemButton
                          key={subIndex}
                          sx={{ pl: 4, "&:hover": { backgroundColor: hoverColor, transition: 0.4 } }}
                          dense={dense} // Apply dense to sub-items
                        >
                          <ListItemIcon>{subItem.icon ? React.cloneElement(subItem.icon, { sx: { color: iconColor || theme.palette.primary.active } }) : null}</ListItemIcon>
                          <ListItemText primary={subItem.label} sx={{ color: textColor || theme.palette.primary.semiWhite }} />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                )}

                {item.divider && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </div>
      )}

      {/* that if for list of secondary text list component  */}
      {listWithSecondaryText && (
        <div className="w-full">
          <List sx={{ width: "100%", maxWidth: 1000, bgcolor: bgColor || theme.palette.primary.main }}>
            {items.map((item, index) => (
              <ListItem key={index} alignItems="flex-start" sx={{ bgcolor: "" }}>
                <Box className="flex items-center justify-between w-full">
                  <Box className="flex">
                    <ListItemAvatar>
                      <Avatar alt={item.avatarAltText || avatarAltText} src={item.avatarSrc} />
                    </ListItemAvatar>
                    <ListItemText
                      sx={{ color: textColor || theme.palette.primary.semiWhite }}
                      primary={item.primaryText}
                      secondary={
                        <React.Fragment>
                          <Typography component="span" variant="body2" sx={{ color: textColor || theme.palette.primary.semiWhite, display: "inline" }}>
                            {item.secondaryText}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </Box>
                  <Box>
                    <Button sx={{ color: textColor || theme.palette.primary.semiWhite, fontSize: "15px", "&:hover": {} }} onClick={() => iconButtonAction(item)}>
                      <AddIcon />
                    </Button>
                  </Box>
                </Box>
              </ListItem>
            ))}
          </List>
        </div>
      )}

      {/* that is for selected list item component  */}
      {selectedListItem && (
        <div className="w-full">
          <List sx={{ width: "100%", maxWidth: 1000, bgcolor: bgColor || theme.palette.primary.main }}>
            {items.map((item, index) => (
              <ListItem
                key={index}
                alignItems="flex-start"
                onClick={() => handleListItemClick(index)} // Set the selected item
                sx={{ bgcolor: "" }}
              >
                <Box
                  className="flex items-center justify-between w-full px-2 py-1.5 rounded-md cursor-pointer"
                  sx={{
                    bgcolor: selectedIndex === index ? theme.palette.primary.active : theme.palette.primary.main,
                    color: "whitesmoke",
                    "&:hover": {
                      backgroundColor: "rgba(121, 128, 255, 0.21)",
                      transition: 0.3,
                    },
                  }}
                >
                  <Box className="flex items-center gap-x-2 w-full">
                    <Avatar alt={item.avatarAltText || avatarAltText} src={item.avatarSrc} />
                    <ListItemText sx={{ color: textColor || theme.palette.primary.semiWhite }} primary={item.primaryText} />
                  </Box>
                  <Box>
                    <Button
                      sx={{ color: textColor || theme.palette.primary.semiWhite, fontSize: "15px", "&:hover": {} }}
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent the parent onClick from triggering
                        iconButtonAction(item);
                      }}
                    >
                      <CommentIcon />
                    </Button>
                  </Box>
                </Box>
              </ListItem>
            ))}
          </List>
        </div>
      )}

      {/* that is for list With Checkbox item component  */}
      {listWithCheckbox && (
        <div className="w-full">
          <List sx={{ width: "100%", maxWidth: 1000, bgcolor: bgColor || theme.palette.primary.main }}>
            {items.map((item, index) => (
              <ListItem key={index} alignItems="flex-start" sx={{ bgcolor: "", "&:hover": { bgcolor: hoverColor, transition: 0.3, cursor: "pointer" } }}>
                <Box className="flex items-center justify-between w-full">
                  {/* Avatar and Text Section */}
                  <Box className="flex items-center gap-x-2">
                    <Avatar alt={item.avatarAltText || avatarAltText} src={item.avatarSrc} />

                    <ListItemText sx={{ color: textColor || theme.palette.primary.semiWhite }} primary={item.primaryText} />
                  </Box>

                  {/* Checkbox Section */}
                  <Box>
                    <Button
                      sx={{
                        color: textColor || theme.palette.primary.semiWhite,
                        fontSize: "15px",
                        "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" }, // Example hover effect
                      }}
                      onClick={() => iconButtonAction(item)}
                    >
                      <Checkbox
                        {...label}
                        defaultChecked={index === 0 ? true : false} // Only check the first element
                        sx={{
                          color: theme.palette.primary.semiWhite, // Change the color of the checkbox
                          "&.Mui-checked": {
                            color: "rgba(121, 128, 255, 0.7)", // Custom color for checked state
                          },
                          "&:hover": {
                            backgroundColor: "rgba(255, 255, 255, 0.2)", // Hover background color
                          },
                          transform: "scale(0.9)", // Make checkbox slightly larger
                        }}
                      />
                    </Button>
                  </Box>
                </Box>
              </ListItem>
            ))}
          </List>
        </div>
      )}

      {/* that is for List with Switch item component  */}
      {listWithSwitch && (
        <div>
          <List
            sx={{
              width: "100%",
              maxWidth: 1000,
              bgcolor: bgColor || theme.palette.primary.main,
              ...customStyles, // Applying custom CSS styles
            }}
            subheader={<ListSubheader sx={{ bgcolor: bgColor ? bgColor : theme.palette.primary.main }}>Settings</ListSubheader>}
          >
            {items.map((item, index) => (
              <ListItem key={index}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText id={`switch-list-label-${item.id}`} primary={item.label} />
                <Switch
                  edge="end"
                  onChange={handleToggle(item.id)}
                  checked={checked.includes(item.id)}
                  inputProps={{
                    "aria-labelledby": `switch-list-label-${item.id}`,
                  }}
                  sx={{
                    "&.Mui-checked": {
                      color: customStyles?.switchColor || theme.palette.primary.main, // Thumb color when checked (active)
                    },
                    "&.MuiSwitch-track": {
                      backgroundColor: customStyles?.trackColor || theme.palette.secondary.main,
                    },
                    "& .MuiSwitch-thumb": {
                      backgroundColor: checked.includes(item.id) ? theme.palette.primary.active : "gray", // Thumb color logic
                    },
                    "& .MuiSwitch-track": {
                      backgroundColor: checked.includes(item.id) ? "purple" : "gray", // Track color logic
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </div>
      )}

      {/* that is for sticky Subheader list item section   */}
      {stickySubheader && (
        <div className="w-full">
          <List
            sx={{
              width: "100%",
              maxWidth: 1000,
              bgcolor: bgColor ? bgColor : theme.palette.primary.main,
              position: "relative",
              overflow: "auto",
              maxHeight: 300,
              "& ul": { padding: 0 },
            }}
            subheader={<li />}
          >
            {data.map((section, sectionIndex) => (
              <li key={`section-${sectionIndex}`}>
                <ul>
                  <ListSubheader sx={{ bgcolor: bgColor ? bgColor : theme.palette.primary.main }}>{section.subheader}</ListSubheader>
                  {section.items.map((item, itemIndex) => (
                    <ListItem key={`item-${sectionIndex}-${itemIndex}`}>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </ul>
              </li>
            ))}
          </List>
        </div>
      )}

      {/* that is for user list item section  */}
      {usersList && (
        <>
          {usersData.map((data) => (
            <Box
              key={data.id}
              sx={{
                p: 2,
              }}
            >
              <Box className="flex items-center justify-between mb-2">
                {/* Avatar, Name, Status, Time section */}
                <Box className="flex items-center gap-x-4">
                  <Avatar alt={name} src={data.avatarUrl} />
                  <Box>
                    {/* Name */}
                    <Typography
                      sx={{
                        color: theme.palette.primary.semiWhite,
                        fontWeight: 400,
                        fontSize: "16px",
                      }}
                    >
                      {data.name}
                    </Typography>

                    {/* Status */}
                    <Box className="flex items-center gap-x-2">
                      <Badge
                        variant="dot"
                        sx={{
                          p: "5px",
                          bgcolor: getStatusColor(data.activeStatus),
                          borderRadius: "50px",
                        }}
                      />
                      <Typography sx={{ color: theme.palette.primary.semiWhite, fontSize: "12px" }}>{getStatusText(data.activeStatus)}</Typography>
                      <Typography sx={{ color: theme.palette.primary.semiWhite, fontSize: "12px" }}>{`${data.statusTime} minutes ago`}</Typography>
                    </Box>
                  </Box>
                </Box>

                {/* Button section */}
                <Button
                  sx={{
                    bgcolor: theme.palette.primary.active,
                    "&:hover": { bgcolor: theme.palette.primary.active },
                    p: "2px 3px",
                    color: "whitesmoke",
                    fontWeight: 400,
                    fontSize: "12px",
                  }}
                >
                  {data.buttonText}
                </Button>
              </Box>
              <Divider />
            </Box>
          ))}
        </>
      )}

      {/* that is for progress list item section  */}
      {progressList && (
        <Box className=" mb-4">
           <Box className="flex items-center gap-x-4 gap-y-2" maxWidth={1000}  >
         {/* Icon */}
         <Box
           className="flex items-center justify-center rounded-md"
           maxWidth={40}
           maxHeight={10}
           sx={{ bgcolor: progressBg || "rgba(245, 194, 39, 0.19)", p: 2 }}
         >
           <IconComponent sx={{ color: iconColor || "orange", fontSize: "60px" }} />
         </Box>
   
         {/* Text and Progress Bar */}
         <Box className="flex flex-col gap-y-2 mb-2">
           <Typography color={theme.palette.primary.semiWhite}>
             {text}
           </Typography>
           <BorderLinearProgress variant="determinate" value={progressValue} sx={{maxWidth:1000}} />
         </Box>
       </Box>
       <Divider/>
        </Box>
      )}
    </div>
  );
};

export default Lists;
