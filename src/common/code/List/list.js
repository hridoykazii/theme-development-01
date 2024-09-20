export const simpleList =
`import { Box, useTheme } from "@mui/material";
import { memo } from "react";
import Lists from "./Lists";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const SimpleList = memo(() => {
  const theme = useTheme();

  const listItems = [
    [
      { text: "Inbox", icon: <InboxIcon /> },
      { text: "Drafts", icon: <DraftsIcon /> },
    ],
    [
      { text: "Recent", icon: <AccessTimeIcon /> },
      { text: "Spam", icon: <ErrorOutlineIcon /> },
    ],
  ];

  return (
    <Box>
      <Box className="flex gap-x-4">
        {/* Pass custom props to make Dialogs reusable */}
        <Lists simpleList={true} items={listItems} bgColor={theme.palette.primary.main} hoverColor="rgba(121, 128, 255, 0.21)" iconColor={theme.palette.primary.active} textColor={theme.palette.primary.semiWhite} />
      </Box>
    </Box>
  );
});

export default SimpleList;
`


export const nestedList = 
`//code will be here`


export const denseList =
`//code will be here`


export const listWithCheckbox =
`//code will be here`


export const listWithSwitch =
`//code will be here`

export const stickySubheader=
`//code will be here`


export const usersList =
`//code will be here`


export const progressList = 
`//code will be here`