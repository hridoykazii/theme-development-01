import { Box, useTheme } from "@mui/material";
import { listWithCheckbox} from "common/code/List/list";
import CodeBlock from "components/Test/CodeBlock";
import { memo } from "react";
import Lists from "./Lists";

const ListWithCheckbox = memo(({ isOpen }) => {
  const theme = useTheme();

  const items = [
    {
      avatarSrc: "https://shorturl.at/hOzNH",
      primaryText: "Summer BBQ",
      secondaryText: "to Scott, Alex, Jennifer",
    },
    {
      avatarSrc: "https://shorturl.at/hOzNH",
      primaryText: "Meeting",
      secondaryText: "to John, Sarah, Mike",
    },
    {
      avatarSrc: "https://shorturl.at/hOzNH",
      primaryText: "Party Invitation",
      secondaryText: "to Emma, Noah, Liam",
    },
  ];

  const handleAddClick = (item) => {
    console.log("Add button clicked for:", item);
  };

  return (
    <Box>
      <Box className="flex gap-x-4">
        {/* Pass items and other props to make Lists reusable */}
        <Lists 
        listWithCheckbox={true}
        items={items}
        iconButtonAction={handleAddClick}
        hoverColor="rgba(121, 128, 255, 0.21)"

        // textColor="white"
        // avatarAltText="Avatar Image"
        />
      </Box>
      {isOpen && <CodeBlock code={listWithCheckbox} />}
    </Box>
  );
});

export default ListWithCheckbox;
