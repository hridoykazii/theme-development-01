import CodeIcon from "@mui/icons-material/Code";
import { Box, Typography, useTheme } from "@mui/material";
import Layout from "layouts/Layout";
import { memo, useState } from "react";
import BasicTable from "./BasicTable";
import CollapseTable from "./CollapseTable";
import DenseTable from "./DenseTable";
import SpanningTable from "./SpanningTable";
import StickyHeaderTable from "./StickyHeaderTable";

const tableContainer = memo(() => {
  const theme = useTheme();
  const [codeBlock, setCodeBlock] = useState("");

  const toggleCodeBlock = (text) => {
    setCodeBlock((prev) => (prev === text ? "" : text));
  };

  return (
    <Layout>
      <Box
        className=" flex flex-col gap-y-4"
        sx={{
          padding: "19.5px 30px",
          boxSizing: "border-box",
          height: "calc(100vh - 68px)",
          overflowY: "auto",
        }}
      >
        {/* --------------------||Basic Table section start here---------------------------- */}
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
              <Typography
                className="!text-xl pb-3"
                sx={{ color: theme.palette.text.white }}
              >
                Basic Table
              </Typography>
              <CodeIcon
                sx={{ color: "var(--icon-color)", cursor: "pointer" }}
                onClick={() => toggleCodeBlock("basicTable")}
              />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite }}>
              Use <code>rows={`{rows}`} columns={`{columns}`} </code> prop with{" "}
              <code>&lt;BasicTable&gt;</code> component for basic table.
            </Typography>
          </Box>
          <BasicTable isOpen={codeBlock === "basicTable"} />
        </Box>
        {/* --------------------//Basic Table section end here---------------------------- */}

        {/* --------------------||Dense Table section start here---------------------------- */}
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
              <Typography
                className="!text-xl pb-3"
                sx={{ color: theme.palette.text.white }}
              >
                Dense Table
              </Typography>
              <CodeIcon
                sx={{ color: "var(--icon-color)", cursor: "pointer" }}
                onClick={() => toggleCodeBlock("denseTable")}
              />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite }}>
            Use <code>rows={`{rows}`} columns={`{columns}`} size={`"small"`} </code> prop with{" "}
            <code>&lt;DenseTable /&gt;</code> component for Dense Table.
            </Typography>
          </Box>

          {/* <ButtonContained isOpen={codeBlock === "contained"} /> */}
          <DenseTable isOpen={codeBlock === "denseTable"} />
        </Box>
        {/* --------------------//Dense Table section end here---------------------------- */}

        {/* --------------------||Sticky Header Table section start here---------------------------- */}
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
              <Typography
                className="!text-xl pb-3"
                sx={{ color: theme.palette.text.white }}
              >
                Sticky Header
              </Typography>
              <CodeIcon
                sx={{ color: "var(--icon-color)", cursor: "pointer" }}
                onClick={() => toggleCodeBlock("stickyHeader")}
              />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite }}>
            Use <code>rows={`{rows}`} columns={`{columns}`} stickyHeader={`{true}`} {` `}
            sx={`{{ maxHeight: 440 }}`}</code> prop with{" "}
            <code>&lt;StickyHeaderTable /&gt;</code> component for Sticky Header Table.
            </Typography>
          </Box>
          {/* <DenseTable isOpen={codeBlock === "denseTable"} /> */}
          <StickyHeaderTable isOpen={codeBlock === "stickyHeader"} />
        </Box>
        {/* --------------------//Sticky Header Table section end here---------------------------- */}

        {/* --------------------||Collapse Table section start here---------------------------- */}
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
              <Typography
                className="!text-xl pb-3"
                sx={{ color: theme.palette.text.white }}
              >
                Collapsible Table
              </Typography>
              <CodeIcon
                sx={{ color: "var(--icon-color)", cursor: "pointer" }}
                onClick={() => toggleCodeBlock("collapseTable")}
              />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite }}>
            Use <code>rows={`{rows}`} columns={`{columns}`} collapse={`{true}`} additionalContent="your content"</code> prop with{" "}
            <code>&lt;CollapseTable /&gt;</code> component for Collapsible Table.
            </Typography>
          </Box>
          <CollapseTable isOpen={codeBlock === "collapseTable"} />
        </Box>
        {/* --------------------//Collapse Table section end here---------------------------- */}


        {/* --------------------||Spanning Table section start here---------------------------- */}
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
              <Typography
                className="!text-xl pb-3"
                sx={{ color: theme.palette.text.white }}
              >
                Spanning Table
              </Typography>
              <CodeIcon
                sx={{ color: "var(--icon-color)", cursor: "pointer" }}
                onClick={() => toggleCodeBlock("spanningTable")}
              />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite }}>
            Use <code>rows={`{rows}`} columns={`{columns}`} spanningData={`{spanningData}`} </code> prop with{" "}
            <code>&lt;SpanningTable /&gt;</code> component for Spanning Table.
            </Typography>
          </Box>
          <SpanningTable isOpen={codeBlock === "spanningTable"} />
        </Box>
        {/* --------------------//Spanning Table section end here---------------------------- */}
      </Box>
    </Layout>
  );
});

export default tableContainer;
