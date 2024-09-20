import { Box } from '@mui/material';
import React, { memo } from 'react';
import CodeBlock from 'components/Test/CodeBlock';
import { dotBadges, simepleBadge } from 'common/code/Badge/badge';
import Badges from './Badges';

const DotBadges = memo(({ isOpen }) => {

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
        <Badges  variant="dot" bgcolor= "red" sx={{mt:"6px"}}>Typography </Badges>
      </Box>
      {isOpen && <CodeBlock code={dotBadges} />}
    </Box>
  );
});

export default DotBadges;
