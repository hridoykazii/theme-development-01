import { Box, useTheme } from "@mui/material";
import { simpleList } from "common/code/List/list";
import CodeBlock from "components/Test/CodeBlock";
import { memo } from "react";
import Lists from "./Lists";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const SimpleList = memo(({ isOpen }) => {
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
      {isOpen && <CodeBlock code={simpleList} />}
    </Box>
  );
});

export default SimpleList;
