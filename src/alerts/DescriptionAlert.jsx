import { Box } from "@mui/material";
import { descriptionAlert } from "common/code/Alert/alerts";
import CodeBlock from "components/Test/CodeBlock";
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
