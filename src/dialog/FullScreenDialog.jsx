import { Box } from "@mui/material";
import { customizedDialog } from "common/code/Dialog/dialog";
import CodeBlock from "components/Test/CodeBlock";
import { memo } from "react";
import CustomDialog from "./CustomDialog";

const FullScreenDialog = memo(({ isOpen }) => {
  return (
    <Box>
      <Box className="flex gap-x-4">
        {/* Pass custom props to make Dialogs reusable */}
        <CustomDialog
        fullScreenDialog={true}
        // customizedDialog = {true}
        //   formDialog={true}
        //   openButtonText="Show Alert"
          dialogTitle="Modal title"
          TypographyText="Chupa chups jelly-o candy sweet roll wafer cake chocolate bar. Brownie sweet roll topping cake chocolate cake cheesecake tiramisu chocolate cake. Jujubes liquorice chocolate bar pastry. Chocolate jujubes caramels pastry."
          dialogContent="Are you sure you want to proceed with this action?"
        //   agreeButtonText="Yes"
        //   disagreeButtonText="No"
        //   onAgree={() => console.log("Subscribe")}
        //   onDisagree={() => console.log("Cancel")}
        //   sx={{ color: "blue" }}
        //   className="custom-dialog-class"
          borderColor="#797FFF"
          color="#797FFF"
        />
      </Box>
      {isOpen && <CodeBlock code={customizedDialog} />}
    </Box>
  );
});

export default FullScreenDialog;
