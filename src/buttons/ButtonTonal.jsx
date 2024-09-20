import { Box } from "@mui/material";
import { TonalButton } from "common/code/button";
import CodeBlock from "components/Test/CodeBlock";
import { memo } from "react";
import Button from "./Button";

const ButtonTonal = memo(({isOpen}) => {
  return (
    <Box>
      <Box className="flex justify-start items-center gap-5 mt-3">
        <Button variant="tonal" color="primary">
          Primary
        </Button>
        <Button variant="tonal" color="secondary">
          Secondary
        </Button>
        <Button variant="tonal" color="success">
          Success
        </Button>
        <Button variant="tonal" color="warning">
          Warning
        </Button>
        <Button variant="tonal" color="error">
          Danger
        </Button>
        <Button variant="tonal" color="info">
          Info
        </Button>
        <Button variant="tonal" disabled>
          Disabled
        </Button>
        <Button variant="tonal" color="primary" href="#">
          Link
        </Button>
      </Box>
      {isOpen && (
        <CodeBlock code={TonalButton}/>
      )}
    </Box>
  );
});

export default ButtonTonal;
