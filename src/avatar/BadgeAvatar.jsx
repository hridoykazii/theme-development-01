import { Box } from "@mui/material";
import { imageAvatars } from "common/code/Avatar/avatar";
import CodeBlock from "components/Test/CodeBlock";
import { memo } from "react";
import Avatars from "./Avatars";
import CustomAvatars from "./CustomAvatars";

const BadgeAvatar = memo(({ isOpen }) => {
 

  return (
    <Box>
      <Box className=" flex  gap-x-4 mt-2">
      
     <Avatars badgeAvatar={true} activeImg="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"  BadgeImgSrc="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Lutfor Rahman" src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"  />
 
      </Box>
      {isOpen && <CodeBlock code={imageAvatars}  />}
    </Box>
  );
});

export default BadgeAvatar;
