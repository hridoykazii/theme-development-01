import { Box } from '@mui/material';
import React, { memo } from 'react';
import Dialogs from './Dialogs';
import { simpleDialog } from 'common/code/Dialog/dialog';
import CodeBlock from 'components/Test/CodeBlock';

const SimpleDialog = memo(({ isOpen }) => {

  // Example options to pass to the reusable Dialogs component
  const emailOptions = ['user01@example.com', 'user02@example.com', 'user03@example.com'];

  return (
    <Box>
      <Box className="flex gap-x-4">
        {/* Pass custom props to make Dialogs reusable */}
        <Dialogs
          options={emailOptions} // Custom email options
          dialogTitle="Select an email account" // Custom dialog title
          buttonText="Open Email Dialog" // Custom button text
          addAccountText="Add new account" // Custom "add account" text
        />
      </Box>
      {isOpen && <CodeBlock code={simpleDialog} />}
    </Box>
  );
});

export default SimpleDialog;
