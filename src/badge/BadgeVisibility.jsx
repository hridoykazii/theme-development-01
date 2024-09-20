import { Box } from "@mui/material";
import { badgeVisibility } from "common/code/Badge/badge";
import CodeBlock from "components/Test/CodeBlock";
import React, { memo, useState } from "react";
import CustomBadge from "./CustomBadge";

const BadgeVisibility = memo(({ isOpen }) => {
   // State to manage the badge count
   const [count, setCount] = useState(1);
  
   // State to manage the badge visibility
   const [isBadgeVisible, setIsBadgeVisible] = useState(true);
 
   // Function to increment the badge count
   const handleIncrement = () => setCount(count + 1);
 
   // Function to decrement the badge count
   const handleDecrement = () => setCount(Math.max(0, count - 1));
 
   // Function to toggle badge visibility
   const handleBadgeVisibilityChange = () => setIsBadgeVisible(!isBadgeVisible);
 
  return (
    <Box>
      <Box>
      <CustomBadge
        src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="Example Avatar"
        avatarSize={40} // You can adjust the avatar size
        count={count}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        invisible={!isBadgeVisible} // Control visibility of the badge
        onSwitchChange={handleBadgeVisibilityChange} // Handle switch toggle
      />
      </Box>

      {isOpen && <CodeBlock code={badgeVisibility} />}
    </Box>
  );
});

export default BadgeVisibility;
