export const simpleDialog =
`//code will be here`

export const alertsDialog = 
`import { Box } from "@mui/material";
import React, { memo } from "react";
import Dialogs from "./Dialogs";

const AlertsDialog = memo(() => {
  // Example options to pass to the reusable Dialogs component
  const emailOptions = ["user01@example.com", "user02@example.com", "user03@example.com"];

  return (
    <Box>
      <Box className="flex gap-x-4">
        {/* Pass custom props to make Dialogs reusable */}
        <Dialogs
          alert={true}
          options={emailOptions} // Custom email options
          dialogTitle="Use Google's location service?" // Custom dialog title
          dialogDescription="Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."
          buttonText="Open Dialog" // Custom button text
        />
      </Box>
    </Box>
  );
});

export default AlertsDialog;
`

export const transitionsDialog =
`//code will be here`


export const customizedDialog =
`//code will be here`