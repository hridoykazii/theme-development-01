import { Box } from "@mui/material";
import { imageAvatars } from "common/code/Avatar/avatar";
import CodeBlock from "components/Test/CodeBlock";
import { memo } from "react";
import Avatars from "./Avatars";

const LetterAvatars = memo(({ isOpen }) => {
  return (
    <Box>
      <Box className=" flex  gap-x-4 mt-2">
        {/* */}
        <Avatars>Lutfor</Avatars>
        <Avatars bgcolor="#ffe6e6" color="red">Sijan Mohanto</Avatars>
        <Avatars bgcolor="#757575" color="#25293C">Gmail</Avatars>

      </Box>
      {isOpen && <CodeBlock code={imageAvatars} />}
    </Box>
  );
});

export default LetterAvatars;
