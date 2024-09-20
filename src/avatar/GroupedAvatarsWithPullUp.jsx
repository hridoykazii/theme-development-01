import { AvatarGroup, Box } from "@mui/material";
import { imageAvatars } from "common/code/Avatar/avatar";
import CodeBlock from "components/Test/CodeBlock";
import { memo } from "react";
import CustomAvatars from "./CustomAvatars"; // Using the dynamic CustomAvatars

const GroupedAvatarsWithPullUp = memo(({ isOpen }) => {
  // Create an array of avatar data to pass to CustomAvatars
  const avatars = [
    {
      alt: "Lutfor Rahman",
      src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      alt: "John Doe",
      src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      alt: "Jane Smith",
      src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      alt: "Chris Lee",
      src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      alt: "Sara Connor",
      src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  ];

  return (
    <Box>
      <Box className="flex gap-x-4 mt-2">
        {/* AvatarGroup is handled by the CustomAvatars */}
        <CustomAvatars avatars={avatars} max={4} />
      </Box>
      {isOpen && <CodeBlock code={imageAvatars} />}
    </Box>
  );
});

export default GroupedAvatarsWithPullUp;
