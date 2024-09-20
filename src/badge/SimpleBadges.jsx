import { Box } from '@mui/material';
import React, { memo } from 'react';
import CodeBlock from 'components/Test/CodeBlock';
import { simepleBadge } from 'common/code/Badge/badge';
import Badges from './Badges';

const SimpleBadges = memo(({ isOpen }) => {
  // Array of badge data to dynamically generate the Badges
  const badgeData = [
    { src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    { badgeContent: 6, bgcolor: "green", color: "white", src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    { badgeContent: 3, bgcolor: "gray", color: "white", src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    { badgeContent: 3, bgcolor: "red", color: "white", src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    // { badgeContent: 5, bgcolor: "red", color: "white", src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    { badgeContent: 8, bgcolor: "orange", color: "white", src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    { badgeContent: 7, bgcolor: "skyblue", color: "white", src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
  ];

  return (
    <Box>
      <Box className="flex gap-x-4">
        {badgeData.map((badge, index) => (
          <Badges
            key={index}
            badgeContent={badge.badgeContent}
            max={4}
            bgcolor={badge.bgcolor}
            color={badge.color}
            src={badge.src}
          />
        ))}
      </Box>
      {isOpen && <CodeBlock code={simepleBadge} />}
    </Box>
  );
});

export default SimpleBadges;
