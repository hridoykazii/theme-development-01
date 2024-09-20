import { Box } from "@mui/material";
import { basicAlert, filledAlert } from "common/code/Alert/alerts";
import CodeBlock from "components/Test/CodeBlock";
import { memo } from "react";
import Alerts from "./Alerts";

const FilledAlert = memo(({ isOpen }) => {
 

  return (
    <Box>
      <Box className=" flex flex-col gap-y-2">
        <Alerts variant="filled" severity="error" alertText="This is an error alert — check it out!" sx={{color: "white"}}/>
        <Alerts variant="filled"  severity="warning" alertText="This is an warning alert — check it out!"  sx={{color: "white"}}/>
        <Alerts variant="filled"  severity="info" alertText="This is an info alert — check it out!"  sx={{color: "white"}}/>
        <Alerts variant="filled"  severity="success" alertText="This is an success alert — check it out!"  sx={{color: "white"}}/>
      </Box>
      {isOpen && <CodeBlock code={filledAlert}  />}
    </Box>
  );
});

export default FilledAlert;
