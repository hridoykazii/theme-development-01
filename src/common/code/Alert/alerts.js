export const basicAlert = 
`import { Box } from "@mui/material";
import { basicAlert } from "common/code/Alert/alerts";
import CodeBlock from "components/Test/CodeBlock";
import { memo } from "react";
import Alerts from "./Alerts";

const BasicAlert = memo(({ isOpen }) => {
 

  return (
    <Box>
      <Box className=" flex flex-col gap-y-2">
        <Alerts severity="error" alertText="This is an error alert — check it out!"/>
        <Alerts severity="warning" alertText="This is an warning alert — check it out!"/>
        <Alerts severity="info" alertText="This is an info alert — check it out!"/>
        <Alerts severity="success" alertText="This is an success alert — check it out!"/>
      </Box>
      {isOpen && <CodeBlock code={basicAlert}  />}
    </Box>
  );
});

export default BasicAlert;

`

export const outlinedAlert = 
`import { Box } from "@mui/material";
import { memo } from "react";
import Alerts from "./Alerts";

const OutlinedAlert = memo(({ isOpen }) => {
 

  return (
    <Box>
      <Box className=" flex flex-col gap-y-2">
        <Alerts variant="outlined" severity="error" alertText="This is an error alert — check it out!"/>
        <Alerts variant="outlined" severity="warning" alertText="This is an warning alert — check it out!"/>
        <Alerts variant="outlined" severity="info" alertText="This is an info alert — check it out!"/>
        <Alerts variant="outlined" severity="success" alertText="This is an success alert — check it out!"/>
      </Box>
      {isOpen && <CodeBlock code={basicAlert}  />}
    </Box>
  );
});

export default OutlinedAlert;

`

export const filledAlert = 
`import { Box } from "@mui/material";
import { memo } from "react";
import Alerts from "./Alerts";

const FilledAlert = memo(({ isOpen }) => {
 

  return (
    <Box>
      <Box className=" flex flex-col gap-y-2">
        <Alerts severity="error" alertText="This is an error alert — check it out!"/>
        <Alerts severity="warning" alertText="This is an warning alert — check it out!"/>
        <Alerts severity="info" alertText="This is an info alert — check it out!"/>
        <Alerts severity="success" alertText="This is an success alert — check it out!"/>
      </Box>
    </Box>
  );
});

export default FilledAlert;

`
export const actionAlert = 
`import { Box } from "@mui/material";
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
    </Box>
  );
});

export default ActionAlert;

`


export const descriptionAlert = 
`import { Box } from "@mui/material";
import { memo } from "react";
import Alerts from "./Alerts";

const DescriptionAlert = memo(({ isOpen }) => {
 

  return (
    <Box>
      <Box className=" flex flex-col gap-y-2">
        <Alerts severity="error" alertTitleText="Error" alertText="This is an error alert — check it out!"/>
        <Alerts severity="warning" alertTitleText="Warning"  alertText="This is an warning alert — check it out!"/>
        <Alerts severity="info" alertTitleText="Info"  alertText="This is an info alert — check it out!"/>
        <Alerts severity="success" alertTitleText="Success"  alertText="This is an success alert — check it out!"/>
      </Box>
      {isOpen && <CodeBlock code={descriptionAlert}  />}
    </Box>
  );
});

export default DescriptionAlert;

`


export const dismissibleAlert =
`import { Box } from "@mui/material";
import { memo, useState } from "react";
import Alerts from "./Alerts";


const DismissibleAlert = memo(() => {
  const [open, setOpen] = useState(true);

  const handleAlert = () => {
    setOpen(!open); // Toggle the alert visibility
  };

  return (
    <Box>
      <Box className="flex flex-col gap-4">
        <Alerts 
          Dismissible={open} 
          DismissibleText="Open Alert" 
          onClick={handleAlert} 
          severity="success" 
          alertText="success alert with a close icon." 
          variant="filled" 
          sx={{ color: "white" }} 
          showClose={true}
        
        />
          <Alerts 
          Dismissible={open} 
          DismissibleText="Open Alert" 
          onClick={handleAlert} 
          severity="warning" 
          alertText="warning alert with a close icon." 
          variant="filled" 
          sx={{ color: "white" }} 
          showClose={true}
        
        />
      </Box>
    </Box>
  );
});

export default DismissibleAlert;

`


