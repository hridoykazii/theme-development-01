import CodeIcon from "@mui/icons-material/Code";
import { Box, Typography, useTheme } from "@mui/material";
import Layout from "layouts/Layout";
import { memo, useState } from "react";
import ControlledAccordion from "./ControlledAccordion";
import SimpleAccordion from "./SimpleAccordion";
import CustomizedAccordion from "./CustomizedAccordion";
import AdditionalActions from "./AdditionalActions";

const accordionContainer = memo(() => {
  const theme = useTheme();
  const [codeBlock, setCodeBlock] = useState("");

  const toggleCodeBlock = (text) => {
    setCodeBlock((prev) => (prev === text ? "" : text));
  };

  return (
    <Layout>
      <Box
        className=" grid grid-cols-1 md:grid-cols-2 gap-4"
        sx={{
          padding: "19.5px 30px",
          boxSizing: "border-box",
          overflowY: "auto",
        }}
      >
        {/* --------------------||Simple Accordion section start here---------------------------- */}
        <Box
          className="p-5 flex flex-col gap-y-2"
          sx={{
            border: `2px solid ${theme.palette.primary.border}`,
            borderRadius: "20px",
            bgcolor: theme.palette.primary.cardBg,
          }}
        >
          <Box>
            <Box className="flex justify-between items-center">
              <Typography className="!text-xl pb-3" sx={{ color: theme.palette.text.white }}>
                Simple Accordion
              </Typography>
              <CodeIcon sx={{ color: "var(--icon-color)", cursor: "pointer" }} onClick={() => toggleCodeBlock("simpleAccordion")} />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite }}>
              Use <code>accordionData={`{[your data]}`} </code> prop with <code>&lt;SimpleAccordion items={`{accordionData}`} &gt;</code> component for Simple Accordion.
            </Typography>
          </Box>
          {/* <BasicTable isOpen={codeBlock === "basicTable"} /> */}
          <SimpleAccordion isOpen={codeBlock === "simpleAccordion"} />
        </Box>
        {/* --------------------//Simple Accordion section end here---------------------------- */}

        {/* --------------------||Controlled Accordion section start here---------------------------- */}
        <Box
          className="p-5 flex flex-col gap-y-2"
          sx={{
            border: `2px solid ${theme.palette.primary.border}`,
            borderRadius: "20px",
            bgcolor: theme.palette.primary.cardBg,
          }}
        >
          <Box>
            <Box className="flex justify-between items-center">
              <Typography className="!text-xl pb-3" sx={{ color: theme.palette.text.white }}>
                Controlled Accordion
              </Typography>
              <CodeIcon sx={{ color: "var(--icon-color)", cursor: "pointer" }} onClick={() => toggleCodeBlock("controlledAccordion")} />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite }}>
              Use <code>accordionData={`{[your data]}`} </code> prop with <code>&lt;ControlledAccordion items={`{accordionData}`} ControlledAccordion={`{true}`} &gt;</code> component for Controlled Accordion.
            </Typography>
          </Box>
          {/* <BasicTable isOpen={codeBlock === "basicTable"} /> */}
          <ControlledAccordion isOpen={codeBlock === "controlledAccordion"} />
        </Box>
        {/* --------------------//Controlled Accordion section end here---------------------------- */}

        {/* --------------------||Customized Accordion section start here---------------------------- */}
        <Box
          className="p-5 flex flex-col gap-y-2"
          sx={{
            border: `2px solid ${theme.palette.primary.border}`,
            borderRadius: "20px",
            bgcolor: theme.palette.primary.cardBg,
          }}
        >
          <Box>
            <Box className="flex justify-between items-center">
              <Typography className="!text-xl pb-3" sx={{ color: theme.palette.text.white }}>
                Customized Accordion
              </Typography>
              <CodeIcon sx={{ color: "var(--icon-color)", cursor: "pointer" }} onClick={() => toggleCodeBlock("customizedAccordion")} />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite }}>
              Use <code>accordionData={`{[your data]}`} </code> prop with <code>&lt;SimpleAccordion items={`{accordionData}`} &gt;</code> component for Simple Accordion.
            </Typography>
          </Box>
          {/* <BasicTable isOpen={codeBlock === "basicTable"} /> */}
          <CustomizedAccordion isOpen={codeBlock === "customizedAccordion"} />
        </Box>
        {/* --------------------//Customized Accordion section end here---------------------------- */}

        {/* --------------------||Additional Actions section start here---------------------------- */}
        <Box
          className="p-5 flex flex-col gap-y-2"
          sx={{
            border: `2px solid ${theme.palette.primary.border}`,
            borderRadius: "20px",
            bgcolor: theme.palette.primary.cardBg,
          }}
        >
          <Box>
            <Box className="flex justify-between items-center">
              <Typography className="!text-xl pb-3" sx={{ color: theme.palette.text.white }}>
              Additional Actions
              </Typography>
              <CodeIcon sx={{ color: "var(--icon-color)", cursor: "pointer" }} onClick={() => toggleCodeBlock("additionalActions")} />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite }}>
              Use <code>accordionData={`{[your data]}`} </code> prop with <code>&lt;SimpleAccordion items={`{accordionData}`} &gt;</code> component for Simple Accordion.
            </Typography>
          </Box>
          <AdditionalActions isOpen={codeBlock === "additionalActions"} />
        </Box>
        {/* --------------------//Additional Actions section end here---------------------------- */}
      </Box>
    </Layout>
  );
});

export default accordionContainer;
