import { Box } from "@mui/material";
import { imageAvatars } from "common/code/Avatar/avatar";
import CodeBlock from "components/Test/CodeBlock";
import { memo } from "react";
import Avatars from "./Avatars";
import FolderIcon from "@mui/icons-material/Folder";
import CachedIcon from '@mui/icons-material/Cached';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const IconAvatars = memo(({ isOpen }) => {
  return (
    <Box>
      <Box className=" flex  gap-x-4 mt-2">
        {/* */}
        <Avatars
          icon={<FolderIcon />} // Pass the icon component as a prop
          alt="Lutfor Rahman"
        />
          <Avatars
          bgcolor="green"
          icon={<CachedIcon />} // Pass the icon component as a prop
          alt="Lutfor Rahman"
        />
         <Avatars
          bgcolor=" #cce6ff"
          color="blue"
          icon={<CheckCircleOutlineIcon />} // Pass the icon component as a prop
          alt="Lutfor Rahman"
        />

      </Box>
      {isOpen && <CodeBlock code={imageAvatars} />}
    </Box>
  );
});

export default IconAvatars;
