export const chipVariants = 
`import { Box } from '@mui/material';
import React, { memo } from 'react';
import Chip from './Chip';


const ChipVariants = memo(() => {
  return (
    <Box>
      <Box className="flex gap-x-4">
        <Chip>Basic</Chip>
        <Chip variant='outlined'>Outlined</Chip>
      </Box>
    </Box>
  );
});

export default ChipVariants;
`

export const disabledChips =
`//code will be here`