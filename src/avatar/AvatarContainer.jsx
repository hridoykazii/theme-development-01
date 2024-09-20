import CodeIcon from "@mui/icons-material/Code";
import { Box, Typography, useTheme } from "@mui/material";
import Layout from "layouts/Layout";
import { memo, useState } from "react";
import ImageAvatar from "./ImageAvatar";
import LetterAvatars from "./LetterAvatars";
import SizesAvatar from "./SizesAvatar";
import IconAvatars from "./IconAvatars";
import VariantAvatar from "./VariantAvatar";
import BadgeAvatar from "./BadgeAvatar";
import CustomAvatars from "./CustomAvatars";
import GroupedAvatarsWithPullUp from "./GroupedAvatarsWithPullUp";
import TooltipGroupedAvatarsWithPullUp from "./TooltipGroupedAvatarsWithPullUp";
import GroupedAvatarsAlignment from "./GroupedAvatarsAlignment";
// import BasicAlert from "./BasicAlert";

const AvatarContainer = memo(() => {
  const theme = useTheme();
  const [codeBlock, setCodeBlock] = useState("");

  const toggleCodeBlock = (text) => {
    setCodeBlock((prev) => (prev === text ? "" : text));
  };

  return (
    <Layout>
    <Box className="flex flex-col gap-y-2" sx={{
          padding: "19.5px 30px",
          boxSizing: "border-box",
          height: "calc(100vh - 68px)",
          overflowY: "auto",
        }}>
    <Box
        className=" grid grid-cols-1 md:grid-cols-2 gap-4"
        
      >
        {/* --------------------||Image Avatar  section start here---------------------------- */}
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
                Image Avatars
              </Typography>
              <CodeIcon sx={{ color: "var(--icon-color)", cursor: "pointer" }} onClick={() => toggleCodeBlock("imageAvatars")} />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite }}>
              <code>&lt;ImageAvatar /&gt;</code> component for Image Avatar.
            </Typography>
          </Box>
          {/* <BasicTable isOpen={codeBlock === "basicTable"} /> */}
          {/* <SimpleAccordion isOpen={codeBlock === "simpleAccordion"} /> */}
          {/* <BasicAlert isOpen={codeBlock === "basicAlert"} /> */}
          <ImageAvatar isOpen={codeBlock === "imageAvatars"} />
        </Box>
        {/* --------------------//Image Avatar section end here---------------------------- */}

        {/* --------------------||Letter Avatars section start here---------------------------- */}
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
                Letter Avatars
              </Typography>
              <CodeIcon sx={{ color: "var(--icon-color)", cursor: "pointer" }} onClick={() => toggleCodeBlock("imageAvatars")} />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite }}>
              <code>&lt;ImageAvatar /&gt;</code> component for Image Avatar.
            </Typography>
          </Box>
          {/* <BasicAlert isOpen={codeBlock === "basicAlert"} /> */}
          <LetterAvatars isOpen={codeBlock === "imageAvatars"} />
        </Box>
        {/* --------------------//Letter Avatars section end here---------------------------- */}

        {/* --------------------||Sizes Avatars section start here---------------------------- */}
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
                Sizes
              </Typography>
              <CodeIcon sx={{ color: "var(--icon-color)", cursor: "pointer" }} onClick={() => toggleCodeBlock("imageAvatars")} />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite }}>
              <code>&lt;ImageAvatar /&gt;</code> component for Image Avatar.
            </Typography>
          </Box>
          {/* <BasicAlert isOpen={codeBlock === "basicAlert"} /> */}
          <SizesAvatar isOpen={codeBlock === "imageAvatars"} />
        </Box>
        {/* --------------------//Sizes Avatars section end here---------------------------- */}

        {/* --------------------||Icon Avatars section start here---------------------------- */}
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
                Icon Avatars
              </Typography>
              <CodeIcon sx={{ color: "var(--icon-color)", cursor: "pointer" }} onClick={() => toggleCodeBlock("imageAvatars")} />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite }}>
              <code>&lt;ImageAvatar /&gt;</code> component for Image Avatar.
            </Typography>
          </Box>
          {/* <BasicAlert isOpen={codeBlock === "basicAlert"} /> */}
          <IconAvatars isOpen={codeBlock === "imageAvatars"} />
        </Box>
        {/* --------------------//Icon Avatars section end here---------------------------- */}

        {/* --------------------||Variant Avatars section start here---------------------------- */}
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
                Variants
              </Typography>
              <CodeIcon sx={{ color: "var(--icon-color)", cursor: "pointer" }} onClick={() => toggleCodeBlock("imageAvatars")} />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite }}>
              <code>&lt;ImageAvatar /&gt;</code> component for Image Avatar.
            </Typography>
          </Box>
          <VariantAvatar isOpen={codeBlock === "imageAvatars"} />
        </Box>
        {/* --------------------//Variant Avatars section end here---------------------------- */}

        {/* --------------------||Badge Avatars section start here---------------------------- */}
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
                Avatars With Badge
              </Typography>
              <CodeIcon sx={{ color: "var(--icon-color)", cursor: "pointer" }} onClick={() => toggleCodeBlock("imageAvatars")} />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite }}>
              <code>&lt;ImageAvatar /&gt;</code> component for Image Avatar.
            </Typography>
          </Box>
          <BadgeAvatar isOpen={codeBlock === "imageAvatars"} />
        </Box>
        {/* --------------------//Badge Avatars section end here---------------------------- */}

         {/* --------------------||Grouped Avatars With PullUp section start here---------------------------- */}
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
              Grouped Avatars With PullUp
              </Typography>
              <CodeIcon sx={{ color: "var(--icon-color)", cursor: "pointer" }} onClick={() => toggleCodeBlock("imageAvatars")} />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite }}>
              <code>&lt;ImageAvatar /&gt;</code> component for Image Avatar.
            </Typography>
          </Box>
          <GroupedAvatarsWithPullUp isOpen={codeBlock === "imageAvatars"} />
        </Box>
        {/* --------------------//Grouped Avatars With PullUp section end here---------------------------- */}

         {/* --------------------||Grouped Avatars With PullUp & Tooltip section start here---------------------------- */}
         <Box
          className="p-5 flex flex-col gap-y-4"
          sx={{
            border: `2px solid ${theme.palette.primary.border}`,
            borderRadius: "20px",
            bgcolor: theme.palette.primary.cardBg,
          }}
        >
          <Box>
            <Box className="flex justify-between items-center">
              <Typography className="!text-xl pb-3" sx={{ color: theme.palette.text.white }}>
              Grouped Avatars With PullUp & Tooltip
              </Typography>
              <CodeIcon sx={{ color: "var(--icon-color)", cursor: "pointer" }} onClick={() => toggleCodeBlock("imageAvatars")} />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite }}>
              <code>&lt;ImageAvatar /&gt;</code> component for Image Avatar.
            </Typography>
          </Box>
          <TooltipGroupedAvatarsWithPullUp isOpen={codeBlock === "imageAvatars"} />
        </Box>
        {/* --------------------//Grouped Avatars With PullUp & Tooltip section end here---------------------------- */}
      </Box>



      {/* last section  */}
      <Box className="mt-2">
      {/* --------------------||Grouped Avatars With PullUp & Tooltip section start here---------------------------- */}
      <Box
          className="p-5 flex flex-col gap-y-4"
          sx={{
            border: `2px solid ${theme.palette.primary.border}`,
            borderRadius: "20px",
            bgcolor: theme.palette.primary.cardBg,
          }}
        >
          <Box>
            <Box className="flex justify-between items-center">
              <Typography className="!text-xl pb-3" sx={{ color: theme.palette.text.white }}>
              Grouped Avatars Alignment
              </Typography>
              <CodeIcon sx={{ color: "var(--icon-color)", cursor: "pointer" }} onClick={() => toggleCodeBlock("imageAvatars")} />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite }}>
              <code>&lt;ImageAvatar /&gt;</code> component for Image Avatar.
            </Typography>
          </Box>

        <Box className=" w-full">
        <GroupedAvatarsAlignment isOpen={codeBlock === "imageAvatars"} />
         
        </Box>
        </Box>
        {/* --------------------//Grouped Avatars With PullUp & Tooltip section end here---------------------------- */}
      </Box>
    </Box>
    </Layout>
  );
});

export default AvatarContainer;
