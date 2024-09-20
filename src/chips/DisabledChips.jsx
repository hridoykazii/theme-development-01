import { Box } from '@mui/material';
import React, { memo } from 'react';
import CodeBlock from 'components/Test/CodeBlock';

import Chip from './Chip';
import { disabledChips } from 'common/code/Chips/chips';

const DisabledChips = memo(({ isOpen }) => {


  return (
    <Box>
      <Box className="flex gap-x-4">
        <Chip disabled>Basic</Chip>
        <Chip variant='outlined' disabled  >Outlined</Chip>
      </Box>
      {isOpen && <CodeBlock code={disabledChips} />}
    </Box>
  );
});

export default DisabledChips;
