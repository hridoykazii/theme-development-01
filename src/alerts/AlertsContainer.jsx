import CodeIcon from "@mui/icons-material/Code";
import { Box, Typography, useTheme } from "@mui/material";
import Layout from "layouts/Layout";
import { memo, useState } from "react";
import BasicAlert from "./BasicAlert";
import OutlinedAlert from "./OutlinedAlert";
import FilledAlert from "./FilledAlert";
import ActionAlert from "./ActionAlert";
import DescriptionAlert from "./DescriptionAlert";
import DismissibleAlert from "./DismissibleAlert";

const AlertsContainer = memo(() => {
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
          height: "calc(100vh - 68px)",
          overflowY: "auto",
        }}
      >
        {/* --------------------||Basic Alert section start here---------------------------- */}
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
                Basic
              </Typography>
              <CodeIcon sx={{ color: "var(--icon-color)", cursor: "pointer" }} onClick={() => toggleCodeBlock("basicAlert")} />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite }}>
              Use <code>accordionData={`{[your data]}`} </code> prop with <code>&lt;SimpleAccordion items={`{accordionData}`} &gt;</code> component for Simple Accordion.
            </Typography>
          </Box>
          {/* <BasicTable isOpen={codeBlock === "basicTable"} /> */}
          {/* <SimpleAccordion isOpen={codeBlock === "simpleAccordion"} /> */}
          <BasicAlert isOpen={codeBlock === "basicAlert"} />
        </Box>
        {/* --------------------//Basic Alert section end here---------------------------- */}

        {/* --------------------||Outlined Alert section start here---------------------------- */}
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
                Outlined
              </Typography>
              <CodeIcon sx={{ color: "var(--icon-color)", cursor: "pointer" }} onClick={() => toggleCodeBlock("outlinedAlert")} />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite }}>
            <code>&lt;OutlinedAlert /&gt;</code> component for Outlined Alert.
            </Typography>
          </Box>
          {/* <BasicTable isOpen={codeBlock === "basicTable"} /> */}
          {/* <SimpleAccordion isOpen={codeBlock === "simpleAccordion"} /> */}
          <OutlinedAlert isOpen={codeBlock === "outlinedAlert"} />
        </Box>
        {/* --------------------//Outlined Alert section end here---------------------------- */}

        {/* --------------------||Filled Alert section start here---------------------------- */}
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
                Filled
              </Typography>
              <CodeIcon sx={{ color: "var(--icon-color)", cursor: "pointer" }} onClick={() => toggleCodeBlock("filledAlert")} />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite }}>
            <code>&lt;FilledAlert /&gt;</code> component for Filled Alert.
            </Typography>
          </Box>
          <FilledAlert isOpen={codeBlock === "filledAlert"} />
        </Box>
        {/* --------------------//Filled Alert section end here---------------------------- */}

        {/* --------------------||Action Alert section start here---------------------------- */}
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
                Action
              </Typography>
              <CodeIcon sx={{ color: "var(--icon-color)", cursor: "pointer" }} onClick={() => toggleCodeBlock("actionAlert")} />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite }}>
            <code>&lt;ActionAlert /&gt;</code> component for Action Alert.
            </Typography>
          </Box>
          <ActionAlert isOpen={codeBlock === "actionAlert"} />
        </Box>
        {/* --------------------//Action Alert section end here---------------------------- */}

        {/* --------------------||Description Alert section start here---------------------------- */}
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
              Description
              </Typography>
              <CodeIcon sx={{ color: "var(--icon-color)", cursor: "pointer" }} onClick={() => toggleCodeBlock("descriptionAlert")} />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite }}>
            <code>&lt;DescriptionAlert /&gt;</code> component for Description Alert.
            </Typography>
          </Box>
          <DescriptionAlert isOpen={codeBlock === "descriptionAlert"} />
        </Box>
        {/* --------------------//Description Alert section end here---------------------------- */}

        
        {/* --------------------||Dismissible Alert section start here---------------------------- */}
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
              Dismissible
              </Typography>
              <CodeIcon sx={{ color: "var(--icon-color)", cursor: "pointer" }} onClick={() => toggleCodeBlock("dismissibleAlert")} />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite }}>
         <code>&lt;DismissibleAlert /&gt;</code> component for Dismissible Alert.
            </Typography>
          </Box>
          <DismissibleAlert isOpen={codeBlock === "dismissibleAlert"} />
        </Box>
        {/* --------------------//Dismissible Alert section end here---------------------------- */}


      </Box>
    </Layout>
  );
});

export default AlertsContainer;
