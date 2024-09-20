export const simepleBadge = 
`import { Box } from '@mui/material';
import React, { memo } from 'react';
import Badges from './Badges';

const SimpleBadges = memo(() => {
  // Array of badge data to dynamically generate the Badges
  const badgeData = [
    { src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    { badgeContent: 6, bgcolor: "green", color: "white", src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    { badgeContent: 3, bgcolor: "gray", color: "white", src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    { badgeContent: 4, bgcolor: "red", color: "white", src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    { badgeContent: 1, bgcolor: "orange", color: "white", src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    { badgeContent: 6, bgcolor: "skyblue", color: "white", src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
  ];

  return (
    <Box>
      <Box className="flex gap-x-2">
        {badgeData.map((badge, index) => (
          <Badges
            key={index}
            badgeContent={badge.badgeContent}
            bgcolor={badge.bgcolor}
            color={badge.color}
            src={badge.src}
          />
        ))}
      </Box>
    </Box>
  );
});

export default SimpleBadges;

`


export const dotBadges = 
`import { Box } from '@mui/material';
import React, { memo } from 'react';
import CodeBlock from 'components/Test/CodeBlock';
import { dotBadges, simepleBadge } from 'common/code/Badge/badge';
import Badges from './Badges';

const DotBadges = memo(() => {
  // Array of badge data to dynamically generate the Badges
  const badgeData = [
    { badgeContent: 6, bgcolor: "skyblue", color: "white", src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    { badgeContent: 3, bgcolor: "gray", color: "white", src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },


  ];

  return (
    <Box>
      <Box className="flex gap-x-4">
        {badgeData.map((badge, index) => (
          <Badges
            key={index}
            badgeContent={badge.badgeContent}
            bgcolor={badge.bgcolor}
            color={badge.color}
            src={badge.src}
            variant="dot"
          />
        ))}

        {/* For Typography Text  */}
        <Badges  variant="dot" bgcolor= "red">Typography </Badges>
      </Box>
      {isOpen && <CodeBlock code={dotBadges} />}
    </Box>
  );
});

export default DotBadges;
`

export const badgeAlignment = 
`import { Box } from '@mui/material';
import React, { memo } from 'react';
import Badges from './Badges';

const BadgeAlignment = memo(({ isOpen }) => {
  // Array of badge data to dynamically generate the Badges
  const badgeData = [
    { badgeContent: 6, bgcolor: "green", color: "white", src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", badgePosition: "top-right" },
    { badgeContent: 3, bgcolor: "gray", color: "white", src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", badgePosition: "bottom-right" },
    { badgeContent: 3, bgcolor: "red", color: "white", src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", badgePosition: "bottom-left" },
    { badgeContent: 3, bgcolor: "red", color: "white", src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", badgePosition: "top-left" },
  ];

  return (
    <Box>
      <Box className="flex gap-x-4">
        {badgeData.map((badge, index) => (
          <Badges
            key={index}
            badgeContent={badge.badgeContent}
            bgcolor={badge.bgcolor}
            color={badge.color}
            src={badge.src}
            variant="dot"
            badgePosition={badge.badgePosition}  // Pass the badgePosition like "top-right"
          />
        ))}
      </Box>
    </Box>
  );
});

export default BadgeAlignment;
`

export const maximumValue = 
`import { Box } from '@mui/material';
import React, { memo } from 'react';
import Badges from './Badges';

const MaximumValue = memo(() => {
  // Array of badge data to dynamically generate the Badges
  const badgeData = [
    { badgeContent: 99, bgcolor: "green", color: "white", src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    { badgeContent: 100, bgcolor: "gray", color: "white", src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    { badgeContent: 1000, bgcolor: "red", color: "white", src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
  ];

  return (
    <Box>
      <Box className="flex gap-x-2">
        {badgeData.map((badge, index) => (
          <Badges
            key={index}
            badgeContent={badge.badgeContent}
            bgcolor={badge.bgcolor}
            color={badge.color}
            src={badge.src}
          />
        ))}
      </Box>
    </Box>
  );
});

export default MaximumValue;`


export const badgeOverlap = 
`import { Box } from '@mui/material';
import CodeBlock from 'components/Test/CodeBlock';
import { memo } from 'react';
import Badges from './Badges';

const BadgeOverlap = memo(({ isOpen }) => {
  // Array of badge data to dynamically generate the Badges
  const badgeData = [
    { badgeContent: " ", bgcolor: "green", color: "white", src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", variant: "square" },
    { bgcolor: "yellow", color: "white", src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", variant: "square", dot: true },
    { badgeContent: "", bgcolor: "red", color: "white", src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    { bgcolor: "orange", color: "white", src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", dot: true },
  ];

  return (
    <Box>
      <Box className="flex gap-x-4">
        {badgeData.map((badge, index) => (
          <Badges
            key={index}
            sx={{ bgcolor: "red", width: 40, height: 40 }}
            badgeContent={badge.badgeContent}
            variant={badge.variant}
            dot={badge.dot}
            max={4}
            bgcolor={badge.bgcolor}
            color={badge.color}
            src={badge.src}
          />
        ))}
      </Box>
      {isOpen && <CodeBlock code={badgeOverlap} />}
    </Box>
  );
});

export default BadgeOverlap;
`;


export const badgeVisibility =
`import { Box } from "@mui/material";
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
    </Box>
  );
});

export default BadgeVisibility;
`

export const customLightBadges = 
``
