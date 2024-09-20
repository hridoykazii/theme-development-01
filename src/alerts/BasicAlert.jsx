import { Box } from "@mui/material";
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
