import CodeIcon from "@mui/icons-material/Code";
import { Box, Typography, useTheme } from "@mui/material";
import Layout from "layouts/Layout";
import { memo, useState } from "react";
import SimpleBadges from "./SimpleBadges";
import DotBadges from "./DotBadges";
import BadgeAlignment from "./BadgeAlignment";
import MaximumValue from "./MaximumValue";
import BadgeOverlap from "./BadgeOverlap";
import BadgeVisibility from "./BadgeVisibility";
import CustomLightBadges from "./CustomLightBadges";

const badgeContainer = memo(() => {
  const theme = useTheme();
  const [codeBlock, setCodeBlock] = useState("");

  const toggleCodeBlock = (text) => {
    setCodeBlock((prev) => (prev === text ? "" : text));
  };

  return (
    <Layout>
      <Box className=" flex flex-col gap-y-4"  sx={{
          padding: "19.5px 30px",
          boxSizing: "border-box",
            height: "calc(100vh - 68px)",
          overflowY: "auto",
        }}>
      <Box
        className=" grid grid-cols-1 md:grid-cols-2 gap-4"
       
      >
        {/* --------------------||Simple Badge section start here---------------------------- */}
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
                Simple Badges
              </Typography>
              <CodeIcon sx={{ color: "var(--icon-color)", cursor: "pointer" }} onClick={() => toggleCodeBlock("filledAlert")} />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite, mb: "10px" }}>
              <code>&lt;FilledAlert /&gt;</code> component for Filled Alert.
            </Typography>
          </Box>
          {/* <FilledAlert isOpen={codeBlock === "filledAlert"} /> */}
          <SimpleBadges isOpen={codeBlock === "filledAlert"} />
        </Box>
        {/* --------------------//Simple Badge section end here---------------------------- */}

        {/* --------------------||Dot Badge section start here---------------------------- */}
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
                Dot Badges
              </Typography>
              <CodeIcon sx={{ color: "var(--icon-color)", cursor: "pointer" }} onClick={() => toggleCodeBlock("dotBadges")} />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite, mb: "10px" }}>
              <code>&lt;FilledAlert /&gt;</code> component for Filled Alert.
            </Typography>
          </Box>
          {/* <FilledAlert isOpen={codeBlock === "filledAlert"} /> */}
          <DotBadges isOpen={codeBlock === "dotBadges"} />
        </Box>
        {/* --------------------//Dot Badges section end here---------------------------- */}

        {/* --------------------||Badge Alignment section start here---------------------------- */}
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
              Badge Alignment
              </Typography>
              <CodeIcon sx={{ color: "var(--icon-color)", cursor: "pointer" }} onClick={() => toggleCodeBlock("badgeAlignment")} />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite, mb: "10px" }}>
              <code>&lt;FilledAlert /&gt;</code> component for Filled Alert.
            </Typography>
          </Box>
          {/* <FilledAlert isOpen={codeBlock === "filledAlert"} /> */}
          <BadgeAlignment isOpen={codeBlock === "badgeAlignment"} />
        </Box>
        {/* --------------------//Badge Alignment section end here---------------------------- */}

        {/* --------------------||Maximum Value section start here---------------------------- */}
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
                Maximum Value
              </Typography>
              <CodeIcon sx={{ color: "var(--icon-color)", cursor: "pointer" }} onClick={() => toggleCodeBlock("maximumValue")} />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite, mb: "10px" }}>
              <code>&lt;FilledAlert /&gt;</code> component for Filled Alert.
            </Typography>
          </Box>
          {/* <FilledAlert isOpen={codeBlock === "filledAlert"} /> */}
          <MaximumValue isOpen={codeBlock === "maximumValue"} />
        </Box>
        {/* --------------------//Maximum Value section end here---------------------------- */}

        {/* --------------------||Badge Overlap section start here---------------------------- */}
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
              Badge Overlap
              </Typography>
              <CodeIcon sx={{ color: "var(--icon-color)", cursor: "pointer" }} onClick={() => toggleCodeBlock("badgeOverlap")} />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite, mb: "10px" }}>
              <code>&lt;FilledAlert /&gt;</code> component for Filled Alert.
            </Typography>
          </Box>
          {/* <FilledAlert isOpen={codeBlock === "filledAlert"} /> */}
          <BadgeOverlap isOpen={codeBlock === "badgeOverlap"} />
        </Box>
        {/* --------------------//Badge Overlap section end here---------------------------- */}


         {/* --------------------||Badge visibility section start here---------------------------- */}
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
              Badge visibility
              </Typography>
              <CodeIcon sx={{ color: "var(--icon-color)", cursor: "pointer" }} onClick={() => toggleCodeBlock("badgeVisibility")} />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite, mb: "10px" }}>
              <code>&lt;FilledAlert /&gt;</code> component for Filled Alert.
            </Typography>
          </Box>
          {/* <FilledAlert isOpen={codeBlock === "filledAlert"} /> */}
          <BadgeVisibility isOpen={codeBlock === "badgeVisibility"} />
        </Box>
        {/* --------------------//Badge visibility section end here---------------------------- */}
      </Box>

      {/* that is the last section of design  */}
      <Box>
       {/* --------------------||Badge visibility section start here---------------------------- */}
       {/* <Box
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
              custom Light Badges
              </Typography>
              <CodeIcon sx={{ color: "var(--icon-color)", cursor: "pointer" }} onClick={() => toggleCodeBlock("customLightBadges")} />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite, mb: "10px" }}>
              <code>&lt;FilledAlert /&gt;</code> component for Filled Alert.
            </Typography>
          </Box>
      
          <CustomLightBadges isOpen={codeBlock === "customLightBadges"} />
        </Box> */}
        {/* --------------------//Badge visibility section end here---------------------------- */}
      </Box>
      </Box>
    </Layout>
  );
});

export default badgeContainer;
