import CodeIcon from "@mui/icons-material/Code";
import { Box, Typography, useTheme } from "@mui/material";
import Layout from "layouts/Layout";
import { memo, useState } from "react";
import ChipVariants from "./ChipVariants";
import DisabledChips from "./DisabledChips";
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
        //   height: "calc(100vh - 68px)",
          overflowY: "auto",
        }}
        // className="custom-scrollbar"
      >
        {/* --------------------||Chip Variants section start here---------------------------- */}
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
              <Typography
                className="!text-xl pb-3"
                sx={{ color: theme.palette.text.white }}
              >
                Chip Variants
              </Typography>
              <CodeIcon
                sx={{ color: "var(--icon-color)", cursor: "pointer" }}
                onClick={() => toggleCodeBlock("chipVariants")}
              />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite, my:"10px" }}>
              Use <code>variant='outlined'</code> prop with{" "}
              <code>&lt;Chip &gt;</code> component for outlined chip.
            </Typography>
          </Box>

          {/* <ButtonContained isOpen={codeBlock === "contained"} /> */}
          <ChipVariants isOpen={codeBlock === "chipVariants"}/>
        </Box>
        {/* --------------------//Chip Variants section end here---------------------------- */}


        {/* --------------------||Disabled Chips section start here---------------------------- */}
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
              <Typography
                className="!text-xl pb-3"
                sx={{ color: theme.palette.text.white }}
              >
                Disabled Chips
              </Typography>
              <CodeIcon
                sx={{ color: "var(--icon-color)", cursor: "pointer" }}
                onClick={() => toggleCodeBlock("disabledChips")}
              />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite, my:"10px" }}>
              Use <code>variant='disabled'</code>  for disabled chip.
            </Typography>
          </Box>

          {/* <ButtonContained isOpen={codeBlock === "contained"} /> */}
          <DisabledChips isOpen={codeBlock === "disabledChips"}/>
        </Box>
        {/* --------------------//Disabled Chips section end here---------------------------- */}

      </Box>
    </Layout>
  );
});

export default ChipContainer;
