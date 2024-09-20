import CodeIcon from "@mui/icons-material/Code";
import { Box, Typography, useTheme } from "@mui/material";
import Layout from "layouts/Layout";
import { memo, useState } from "react";
import AlertsDialog from "./AlertsDialog";
import CustomizedDialog from "./CustomizedDialog";
import FormDialog from "./FormDialog";
import FullScreenDialog from "./FullScreenDialog";
import SimpleDialog from "./SimpleDialog";
import TransitionsDialog from "./TransitionsDialog";
import OptionalSizes from "./OptionalSizes";
// import ButtonContained from "./ButtonContained";

const ChipContainer = memo(() => {
  const theme = useTheme();
  const [codeBlock, setCodeBlock] = useState("");

  const toggleCodeBlock = (text) => {
    setCodeBlock((prev) => (prev === text ? "" : text));
  };
  return (
    <Layout>
      <Box
        className=" grid grid-cols-2 gap-4"
        sx={{
          padding: "19.5px 30px",
          boxSizing: "border-box",
            height: "calc(100vh - 68px)",
          overflowY: "auto",
        }}
        // className="custom-scrollbar"
      >
        {/* --------------------||Simple Dialog section start here---------------------------- */}
        <Box
          className="p-5"
          sx={{
            border: `2px solid ${theme.palette.primary.border}`,
            borderRadius: "20px",
            bgcolor: theme.palette.primary.cardBg,
          }}
        >
          <Box>
            <Box className="flex justify-between items-center">
              <Typography className="!text-xl pb-3" sx={{ color: theme.palette.text.white }}>
                Simple Dialog
              </Typography>
              <CodeIcon sx={{ color: "var(--icon-color)", cursor: "pointer" }} onClick={() => toggleCodeBlock("simpleDialog")} />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite, my: "10px" }}>
              Use <code>variant='outlined'</code> prop with <code>&lt;Chip &gt;</code> component for outlined chip.
            </Typography>
          </Box>
          <SimpleDialog isOpen={codeBlock === "simpleDialog"} />
        </Box>
        {/* --------------------//Simple Dialog section end here---------------------------- */}

        {/* --------------------||Alerts Dialog section start here---------------------------- */}
        <Box
          className="p-5"
          sx={{
            border: `2px solid ${theme.palette.primary.border}`,
            borderRadius: "20px",
            bgcolor: theme.palette.primary.cardBg,
          }}
        >
          <Box>
            <Box className="flex justify-between items-center">
              <Typography className="!text-xl pb-3" sx={{ color: theme.palette.text.white }}>
                Alerts
              </Typography>
              <CodeIcon sx={{ color: "var(--icon-color)", cursor: "pointer" }} onClick={() => toggleCodeBlock("alertsDialog")} />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite, my: "10px" }}>Show an alert to the user to convey something or make the user choose from the given options.</Typography>
          </Box>
          <AlertsDialog isOpen={codeBlock === "alertsDialog"} />
        </Box>
        {/* --------------------//Alerts Dialog section end here---------------------------- */}

        {/* --------------------||Transitions Dialog section start here---------------------------- */}
        <Box
          className="p-5"
          sx={{
            border: `2px solid ${theme.palette.primary.border}`,
            borderRadius: "20px",
            bgcolor: theme.palette.primary.cardBg,
          }}
        >
          <Box>
            <Box className="flex justify-between items-center">
              <Typography className="!text-xl pb-3" sx={{ color: theme.palette.text.white }}>
                Transitions
              </Typography>
              <CodeIcon sx={{ color: "var(--icon-color)", cursor: "pointer" }} onClick={() => toggleCodeBlock("transitionsDialog")} />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite, my: "10px" }}>You can also use any of the transitions that you like. Use TransitionComponent prop for the transition.</Typography>
          </Box>
          <TransitionsDialog isOpen={codeBlock === "transitionsDialog"} />
        </Box>
        {/* --------------------//Transitions Dialog section end here---------------------------- */}

        {/* --------------------||Form  Dialog section start here---------------------------- */}
        <Box
          className="p-5"
          sx={{
            border: `2px solid ${theme.palette.primary.border}`,
            borderRadius: "20px",
            bgcolor: theme.palette.primary.cardBg,
          }}
        >
          <Box>
            <Box className="flex justify-between items-center">
              <Typography className="!text-xl pb-3" sx={{ color: theme.palette.text.white }}>
                Form Dialog
              </Typography>
              <CodeIcon sx={{ color: "var(--icon-color)", cursor: "pointer" }} onClick={() => toggleCodeBlock("transitionsDialog")} />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite, my: "10px" }}>Form dialogs allow users to fill out form fields within a dialog.</Typography>
          </Box>
          <FormDialog isOpen={codeBlock === "transitionsDialog"} />
        </Box>
        {/* --------------------//Form Dialog section end here---------------------------- */}

          {/* --------------------||Customized Dialog section start here---------------------------- */}
          <Box
          className="p-5"
          sx={{
            border: `2px solid ${theme.palette.primary.border}`,
            borderRadius: "20px",
            bgcolor: theme.palette.primary.cardBg,
          }}
        >
          <Box>
            <Box className="flex justify-between items-center">
              <Typography className="!text-xl pb-3" sx={{ color: theme.palette.text.white }}>
              Customized Dialog
              </Typography>
              <CodeIcon sx={{ color: "var(--icon-color)", cursor: "pointer" }} onClick={() => toggleCodeBlock("customizedDialog")} />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite, my: "10px" }}>You can customize the component the way you want using styled hook.</Typography>
          </Box>
          <CustomizedDialog isOpen={codeBlock === "customizedDialog"} />
        </Box>
        {/* --------------------//Customized Dialog section end here---------------------------- */}


          {/* --------------------||Customized Dialog section start here---------------------------- */}
          <Box
          className="p-5"
          sx={{
            border: `2px solid ${theme.palette.primary.border}`,
            borderRadius: "20px",
            bgcolor: theme.palette.primary.cardBg,
          }}
        >
          <Box>
            <Box className="flex justify-between items-center">
              <Typography className="!text-xl pb-3" sx={{ color: theme.palette.text.white }}>
              Full Screen Dialog
              </Typography>
              <CodeIcon sx={{ color: "var(--icon-color)", cursor: "pointer" }} onClick={() => toggleCodeBlock("customizedDialog")} />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite, my: "10px" }}>Add fullScreen prop with Dialog component for a full screen dialog.</Typography>
          </Box>
          <FullScreenDialog isOpen={codeBlock === "customizedDialog"} />
        </Box>
        {/* --------------------//Customized Dialog section end here---------------------------- */}


          {/* --------------------||optional sizes section start here---------------------------- */}
          <Box
          className="p-5"
          sx={{
            border: `2px solid ${theme.palette.primary.border}`,
            borderRadius: "20px",
            bgcolor: theme.palette.primary.cardBg,
          }}
        >
          <Box>
            <Box className="flex justify-between items-center">
              <Typography className="!text-xl pb-3" sx={{ color: theme.palette.text.white }}>
              Optional sizes
              </Typography>
              <CodeIcon sx={{ color: "var(--icon-color)", cursor: "pointer" }} onClick={() => toggleCodeBlock("customizedDialog")} />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite, my: "10px" }}>Add fullScreen prop with Dialog component for a full screen dialog.</Typography>
          </Box>
          <OptionalSizes isOpen={codeBlock === "customizedDialog"} />
        </Box>
        {/* --------------------//optional sizes section end here---------------------------- */}
      </Box>
    </Layout>
  );
});

export default ChipContainer;
