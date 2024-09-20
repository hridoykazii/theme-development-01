import { Box } from '@mui/material';
import { badgeOverlap } from 'common/code/Badge/badge';
import CodeBlock from 'components/Test/CodeBlock';
import { memo } from 'react';
import Badges from './Badges';

const BadgeOverlap = memo(({ isOpen }) => {
  // Array of badge data to dynamically generate the Badges
  const badgeData = [
 
    { badgeContent: " ", bgcolor: "green", color: "white", src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",  variant:"square" },
    {  bgcolor: "yellow", color: "white", src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", variant:"square", dot:true  },
    { badgeContent: "", bgcolor: "red", color: "white", src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    {  bgcolor: "orange", color: "white", src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", dot:true },
  ];

  return (
    <Box>
      <Box className="flex gap-x-4">
        {badgeData.map((badge, index) => (
          <Badges
            key={index}
            sx={{bgcolor: "red", width: 40, height: 40, }}
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
