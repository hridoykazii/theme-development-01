import { Box } from "@mui/material";
import { TextButton } from "common/code/button";
import CodeBlock from "components/Test/CodeBlock";
import { memo } from "react";
import Button from "./Button";

const ButtonText = memo(({isOpen}) => {
  return (
    <Box>
      <Box className="flex justify-start items-center gap-5 mt-3">
        <Button variant="text" color="primary">
          Primary
        </Button>
        <Button variant="text" color="secondary">
          Secondary
        </Button>
        <Button variant="text" color="success">
          Success
        </Button>
        <Button variant="text" color="warning">
          Warning
        </Button>
        <Button variant="text" color="error">
          Danger
        </Button>
        <Button variant="text" color="info">
          Info
        </Button>
        <Button variant="text" disabled>
          Disabled
        </Button>
        <Button variant="text" href="#">
          Link
        </Button>
      </Box>
      {isOpen && (
        <CodeBlock code={TextButton}/>
      )}
    </Box>
  );
});

export default ButtonText;
