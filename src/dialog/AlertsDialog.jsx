import { Box } from "@mui/material";
import React, { memo } from "react";
import Dialogs from "./Dialogs";
import { alertsDialog } from "common/code/Dialog/dialog";
import CodeBlock from "components/Test/CodeBlock";

const AlertsDialog = memo(({ isOpen }) => {

 

  return (
    <Box>
      <Box className="flex gap-x-4">
        {/* Pass custom props to make Dialogs reusable */}
        <Dialogs
          alert={true}
          dialogTitle="Use Google's location service?" // Custom dialog title
          dialogDescription="Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."
          buttonText="Open Dialog" // Custom button text
        />
      </Box>
      {isOpen && <CodeBlock code={alertsDialog} />}
    </Box>
  );
});

export default AlertsDialog;
