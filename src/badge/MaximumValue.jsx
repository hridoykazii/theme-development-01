import { Box } from '@mui/material';
import { maximumValue } from 'common/code/Badge/badge';
import CodeBlock from 'components/Test/CodeBlock';
import { memo } from 'react';
import Badges from './Badges';

const MaximumValue = memo(({ isOpen }) => {
  // Array of badge data to dynamically generate the Badges
  const badgeData = [
    { badgeContent: 99, bgcolor: "green", color: "white", src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    { badgeContent: 100, bgcolor: "gray", color: "white", src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    { badgeContent: 1000, bgcolor: "red", color: "white", src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
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
          />
        ))}
      </Box>
      {isOpen && <CodeBlock code={maximumValue} />}
    </Box>
  );
});

export default MaximumValue;
