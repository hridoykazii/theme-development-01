import { Box } from "@mui/material";
import { ContainedButton } from "common/code/button";
import CodeBlock from "components/Test/CodeBlock";
import { memo } from "react";
import Button from "./Button";

const ButtonContained = memo(({isOpen}) => {
  return (
    <Box>
      <Box className="flex justify-start items-center gap-5 mt-3">
        <Button 
          variant="contained" 
          color='primary'
        >
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="error">
          Danger
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" href="#">
          Link
        </Button>
      </Box>
      {isOpen && (
        <CodeBlock code={ContainedButton} />
      )}
    </Box>
  );
});

export default ButtonContained;
