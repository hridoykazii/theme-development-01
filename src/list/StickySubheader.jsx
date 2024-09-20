import { Box } from "@mui/material";
import { stickySubheader } from "common/code/List/list";
import CodeBlock from "components/Test/CodeBlock";
import { memo } from "react";
import Lists from "./Lists";

const StickySubheader = memo(({ isOpen }) => {

    // pass your context here 
    const data = [
        {
          subheader: "I'm sticky 0",
          items: ['Item 0', 'Item 1', 'Item 2'],
        },
        {
          subheader: "I'm sticky 1",
          items: ['Item 0', 'Item 1', 'Item 2'],
        },
        {
          subheader: "I'm sticky 2",
          items: ['Custom Item A', 'Custom Item B', 'Custom Item C'],
        },
      ];


  return (
    <Box>
      <Box className="flex gap-x-4">
        {/* Pass custom props to make Dialogs reusable */}
        <Lists stickySubheader={true}   data={data} bgColor="#1F2336" />
      </Box>
      {isOpen && <CodeBlock code={stickySubheader}  />}
    </Box>
  );
});

export default StickySubheader;
