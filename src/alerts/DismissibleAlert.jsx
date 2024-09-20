import { Box } from "@mui/material";
import { memo, useState } from "react";
import Alerts from "./Alerts";
import CodeBlock from "components/Test/CodeBlock";
import { dismissibleAlert } from "common/code/Alert/alerts";

const DismissibleAlert = memo(({ isOpen }) => {
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
          sx={{ color: "white", }} 
          showClose={true}
        
        />
          <Alerts 
          Dismissible={open} 
          DismissibleText="Open Alert" 
          onClick={handleAlert} 
          severity="warning" 
          alertText="warning alert with a close icon." 
          sx={{ color: "white" }} 
          showClose={true}
        />
         <Alerts 
          Dismissible={open} 
          DismissibleText="Open Alert" 
          onClick={handleAlert} 
          severity="info" 
          alertText="info alert with a close icon." 
          sx={{ color: "white" }} 
          showClose={true}
        />
      </Box>
      {isOpen && <CodeBlock code={dismissibleAlert}  />}

    </Box>
  );
});

export default DismissibleAlert;
