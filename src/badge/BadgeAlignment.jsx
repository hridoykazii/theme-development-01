import { Box } from '@mui/material';
import React, { memo } from 'react';
import CodeBlock from 'components/Test/CodeBlock';
import { badgeAlignment, dotBadges } from 'common/code/Badge/badge';
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
      <Box className="flex gap-x-6">
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
      {isOpen && <CodeBlock code={badgeAlignment} />}
    </Box>
  );
});

export default BadgeAlignment;
