import { Box } from "@mui/material";
import { OutlinedButton } from "common/code/button";
import CodeBlock from "components/Test/CodeBlock";
import { memo } from "react";
import Button from "./Button";

const ButtonOutlined = memo(({isOpen}) => {
  return (
    <Box>
      <Box className="flex justify-start items-center gap-5 mt-3">
        <Button variant="outlined" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" color="success">
          Success
        </Button>
        <Button variant="outlined" color="warning">
          Warning
        </Button>
        <Button variant="outlined" color="error">
          Danger
        </Button>
        <Button variant="outlined" color="info">
          Info
        </Button>
        <Button variant="outlined" disabled>
          Disabled
        </Button>
        <Button variant="outlined" href="#">
          Link
        </Button>
      </Box>
      {isOpen && (
        <CodeBlock code={OutlinedButton}/>
      )}
    </Box>
  );
});

export default ButtonOutlined;
