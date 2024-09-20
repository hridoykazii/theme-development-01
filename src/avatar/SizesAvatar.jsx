import { Box } from "@mui/material";
import { imageAvatars } from "common/code/Avatar/avatar";
import CodeBlock from "components/Test/CodeBlock";
import { memo } from "react";
import Avatar from "./Avatars";
import Avatars from "./Avatars";

const SizesAvatar = memo(({ isOpen }) => {
 

  return (
    <Box>
      <Box className=" flex items-center  gap-x-4 mt-2">
      {/* */}
     <Avatars width="40px" height="40px" alt="Lutfor Rahman" src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
     <Avatars width="48px" height="48px" alt="Lutfor Rahman" src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
     <Avatars width="58px" height="58px" alt="Lutfor Rahman" src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      </Box>
      {isOpen && <CodeBlock code={imageAvatars}  />}
    </Box>
  );
});

export default SizesAvatar;
