import CodeIcon from "@mui/icons-material/Code";
import { Box, Typography, useTheme } from "@mui/material";
import Layout from "layouts/Layout";
import { memo, useState } from "react";
import ButtonContained from "./ButtonContained";
import ButtonFab from "./ButtonFab";
import ButtonFabSize from "./ButtonFabSize";
import ButtonIcon from "./ButtonIcon";
import ButtonOutlined from "./ButtonOutlined";
import ButtonSizes from "./ButtonSizes";
import ButtonText from "./ButtonText";
import ButtonTonal from "./ButtonTonal";

const ButtonIndex = memo(() => {
  const theme = useTheme();
  const [codeBlock, setCodeBlock] = useState("");

  const toggleCodeBlock = (text) => {
    setCodeBlock((prev) => (prev === text ? "" : text));
  };
  return (
    <Layout>
      <Box
        sx={{
          padding: "19.5px 30px",
          boxSizing: "border-box",
          height: "calc(100vh - 68px)",
          overflowY: "auto",
        }}
        // className="custom-scrollbar"
      >
        {/* --------------------||Container Button section start here---------------------------- */}
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
                Contained
              </Typography>
              <CodeIcon
                sx={{ color: "var(--icon-color)", cursor: "pointer" }}
                onClick={() => toggleCodeBlock("contained")}
              />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite }}>
              Use <code>variant='contained'</code> prop with{" "}
              <code>&lt;Button&gt;</code> component for contained buttons.
            </Typography>
          </Box>

          <ButtonContained isOpen={codeBlock === "contained"} />
        </Box>
        {/* --------------------//Container Button section end here---------------------------- */}

        {/* --------------------||Text Button section start here---------------------------- */}
        <Box
          className="p-5 mt-5"
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
                Text
              </Typography>
              <CodeIcon
                sx={{ color: "var(--icon-color)", cursor: "pointer" }}
                onClick={() => toggleCodeBlock("textBtn")}
              />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite }}>
              Use <code>variant='text'</code> prop with{" "}
              <code>&lt;Button&gt;</code> component for buttons with text only.
            </Typography>
          </Box>
          <ButtonText isOpen={codeBlock === "textBtn"} />
        </Box>
        {/* --------------------//Text Button section end here---------------------------- */}

        {/* --------------------||Outlined Button section start here---------------------------- */}
        <Box
          className="p-5 mt-5"
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
                Outlined
              </Typography>
              <CodeIcon
                sx={{ color: "var(--icon-color)", cursor: "pointer" }}
                onClick={() => toggleCodeBlock("outlined")}
              />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite }}>
              Use <code>variant='outlined'</code> prop with{" "}
              <code>&lt;Button&gt;</code> component for outlined buttons.
            </Typography>
          </Box>
          <ButtonOutlined isOpen={codeBlock === "outlined"} />
        </Box>
        {/* --------------------//Outlined Button section end here---------------------------- */}

        {/* --------------------||Tonal Button section start here---------------------------- */}
        <Box
          className="p-5 mt-5"
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
                Tonal
              </Typography>
              <CodeIcon
                sx={{ color: "var(--icon-color)", cursor: "pointer" }}
                onClick={() => toggleCodeBlock("tonal")}
              />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite }}>
              Use <code>variant='tonal'</code> prop with{" "}
              <code>&lt;Button&gt;</code> component for tonal buttons.
            </Typography>
          </Box>
          <ButtonTonal isOpen={codeBlock === "tonal"} />
        </Box>
        {/* --------------------//Tonal Button section end here---------------------------- */}

        {/* --------------------||Icon Button section start here---------------------------- */}
        <Box
          className="p-5 mt-5"
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
                Buttons with Icon and Label
              </Typography>
              <CodeIcon
                sx={{ color: "var(--icon-color)", cursor: "pointer" }}
                onClick={() => toggleCodeBlock("iconLabel")}
              />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite }}>
              Use <code>variant='iconLabel'</code> prop with{" "}
              <code>&lt;Button&gt;</code> component for icon buttons.
            </Typography>
          </Box>
          <ButtonIcon isOpen={codeBlock === "iconLabel"} />
        </Box>
        {/* --------------------//Icon Button section end here---------------------------- */}

        {/* --------------------||Button size section start here---------------------------- */}
        <Box
          className="p-5 mt-5"
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
                Button Sizes
              </Typography>
              <CodeIcon
                sx={{ color: "var(--icon-color)", cursor: "pointer" }}
                onClick={() => toggleCodeBlock("buttonSize")}
              />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite }}>
              Use <code>size={`{'small' | 'medium' | 'large'}`}</code> prop with{" "}
              <code>&lt;Button&gt;</code> component for different sized buttons.
              To use icon buttons, you need to use{" "}
              <code>size={`{small | large}`}</code> prop with{" "}
              <code>&lt;IconButton&gt;</code> component or you can also use{" "}
              <code>fontSize</code> prop with the icons.
            </Typography>
          </Box>
          <ButtonSizes isOpen={codeBlock === "buttonSize"} />
        </Box>
        {/* --------------------//Button size section end here---------------------------- */}

        {/* --------------------||Fab button section start here---------------------------- */}
        <Box
          className="p-5 mt-5"
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
                Floating Action Button
              </Typography>
              <CodeIcon
                sx={{ color: "var(--icon-color)", cursor: "pointer" }}
                onClick={() => toggleCodeBlock("fabButton")}
              />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite }}>
              Use <code>color</code> prop with <code>&lt;Fab&gt;</code>{" "}
              component for different colored Floating Action Button and{" "}
              <code>variant='extended'</code> prop for extended (not round)
              Floating Action Button.
            </Typography>
          </Box>
          <ButtonFab isOpen={codeBlock === "fabButton"} />
        </Box>
        {/* --------------------//Fab button section end here---------------------------- */}

        {/* --------------------||Fab button size section start here---------------------------- */}
        <Box
          className="p-5 mt-5"
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
                Floating Action Button Size
              </Typography>
              <CodeIcon
                sx={{ color: "var(--icon-color)", cursor: "pointer" }}
                onClick={() => toggleCodeBlock("fabButtonSize")}
              />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite }}>
              Use <code>size={`{'small' | 'medium' | 'large'}`}</code> prop for
              different sizes of Floating Action Buttons.
            </Typography>
          </Box>
          <ButtonFabSize isOpen={codeBlock === "fabButtonSize"} />
        </Box>
        {/* --------------------//Fab button size section end here---------------------------- */}
      </Box>
    </Layout>
  );
});

export default ButtonIndex;
