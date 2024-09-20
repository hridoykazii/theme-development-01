import { Box } from "@mui/material";
import { actionAlert, basicAlert } from "common/code/Alert/alerts";
import CodeBlock from "components/Test/CodeBlock";
import { memo } from "react";
import Alerts from "./Alerts";

const ActionAlert = memo(({ isOpen }) => {
 

  return (
    <Box>
      <Box className=" flex flex-col gap-y-2">
   {/* Warning Alert with Close Button */}
   <Alerts
        severity="warning"
        alertText="warning alert with a close icon."
        variant="filled"
        sx={{color: "white"}}
        showClose={true}
        onClose={() => console.log("Alert closed")}
      />
      
      {/* Success Alert with Action Button */}
      <Alerts
        severity="success"
        alertText="success alert with an UNDO action."
        actionText="UNDO"
        onActionClick={() => console.log("Undo clicked")}
        variant="outlined"
      />
      {/* Success Alert with Action Button */}
      <Alerts
        severity="success"
        alertText="success alert with an UNDO action."
        actionText="UNDO"
        onActionClick={() => console.log("Undo clicked")}
        sx={{color: "white", }}
        variant="filled"
      />
      </Box>
      {isOpen && <CodeBlock code={actionAlert}  />}
    </Box>
  );
});

export default ActionAlert;
