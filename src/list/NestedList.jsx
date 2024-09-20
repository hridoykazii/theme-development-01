import { Box, useTheme } from "@mui/material";
import { nestedList } from "common/code/List/list";
import CodeBlock from "components/Test/CodeBlock";
import { memo } from "react";
import Lists from "./Lists";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import StarBorder from '@mui/icons-material/StarBorder';

const NestedList = memo(({ isOpen }) => {
  const theme = useTheme();

  const items = [
    {
      label: 'Inbox',
      icon: <InboxIcon />,
      collapsible: true,
      subItems: [
        { label: 'Starred', icon: <StarBorder /> }
      ],
    },
    {
      label: 'Inbox',
      icon: <InboxIcon />,
    },
    {
      divider: true,
    },
    {
      label: 'Sent mail',
      icon: <SendIcon />,
    },
    {
      label: 'Drafts',
      icon: <DraftsIcon />,
    }
  ];

  return (
    <Box>
      <Box className="flex gap-x-4">
        {/* Pass items and other props to make Lists reusable */}
        <Lists 
        nestedList={true}
          items={items}
          hoverColor="rgba(121, 128, 255, 0.21)"
          iconColor={theme.palette.primary.active}
          textColor={theme.palette.primary.semiWhite}
        />
      </Box>
      {isOpen && <CodeBlock code={nestedList} />}
    </Box>
  );
});

export default NestedList;
