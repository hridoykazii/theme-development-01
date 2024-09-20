import { Box } from "@mui/material";
import { imageAvatars } from "common/code/Avatar/avatar";
import CodeBlock from "components/Test/CodeBlock";
import { memo } from "react";
import Avatars from "./Avatars";

const ImageAvatar = memo(({ isOpen }) => {
 

  return (
    <Box>
      <Box className=" flex  gap-x-4 mt-2">
      {/* */}
     <Avatars alt="Lutfor Rahman" src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
     <Avatars alt="Lutfor Rahman" src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600 " />
     <Avatars alt="Lutfor Rahman" src="https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      </Box>
      {isOpen && <CodeBlock code={imageAvatars}  />}
    </Box>
  );
});

export default ImageAvatar;
