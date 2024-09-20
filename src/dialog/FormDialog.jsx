import { Box } from "@mui/material";
import { transitionsDialog } from "common/code/Dialog/dialog";
import CodeBlock from "components/Test/CodeBlock";
import { memo } from "react";
import CustomDialog from "./CustomDialog";

const FormDialog = memo(({ isOpen }) => {
  return (
    <Box>
      <Box className="flex gap-x-4">
        {/* Pass custom props to make Dialogs reusable */}
        <CustomDialog
          formDialog={true}
          openButtonText="Show Alert"
          dialogTitle="Confirm Action"
          labelText="Email"
        //   dialogContent="Are you sure you want to proceed with this action?"
        //   agreeButtonText="Yes"
        //   disagreeButtonText="No"
          onAgree={() => console.log("Subscribe")}
          onDisagree={() => console.log("Cancel")}
        //   sx={{ color: "blue" }}
        //   className="custom-dialog-class"
          borderColor="#797FFF"
          color="#797FFF"
        />
      </Box>
      {isOpen && <CodeBlock code={transitionsDialog} />}
    </Box>
  );
});

export default FormDialog;
