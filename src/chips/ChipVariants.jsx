import { Box } from '@mui/material';
import React, { memo } from 'react';
import CodeBlock from 'components/Test/CodeBlock';

import Chip from './Chip';
import { chipVariants } from 'common/code/Chips/chips';

const ChipVariants = memo(({ isOpen }) => {


  return (
    <Box>
      <Box className="flex gap-x-4">
        <Chip>Basic</Chip>
        <Chip variant='outlined'>Outlined</Chip>
      </Box>
      {isOpen && <CodeBlock code={chipVariants} />}
    </Box>
  );
});

export default ChipVariants;
