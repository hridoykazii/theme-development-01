import CodeIcon from "@mui/icons-material/Code";
import { Box, Typography, useTheme } from "@mui/material";
import Layout from "layouts/Layout";
import { memo, useState } from "react";
import SimpleList from "./SimpleList";
import NestedList from "./NestedList";
import DenseList from "./DenseList";
import ListWithSecondaryText from "./ListWithSecondaryText";
import SelectedListItem from "./SelectedListItem";
import ListWithCheckbox from "./ListWithCheckbox";
import ListWithSwitch from "./ListWithSwitch";
import StickySubheader from "./StickySubheader";
import UsersList from "./UsersList";
import ProgressList from "./ProgressList";
// import ButtonContained from "./ButtonContained";

const ListContainer = memo(() => {
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
        // className="custom-scrollbar"
      >
        {/* --------------------||Simple List section start here---------------------------- */}
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
              Simple List
              </Typography>
              <CodeIcon sx={{ color: "var(--icon-color)", cursor: "pointer" }} onClick={() => toggleCodeBlock("simpleList")} />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite, my: "10px" }}>
              Use <code>variant='outlined'</code> prop with <code>&lt;Chip &gt;</code> component for outlined chip.
            </Typography>
          </Box>
          {/* <SimpleDialog isOpen={codeBlock === "simpleDialog"} /> */}
          <SimpleList isOpen={codeBlock === "simpleList"} />
        </Box>
        {/* --------------------//Simple List section end here---------------------------- */}


            {/* --------------------||Nested List section start here---------------------------- */}
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
              Nested List
              </Typography>
              <CodeIcon sx={{ color: "var(--icon-color)", cursor: "pointer" }} onClick={() => toggleCodeBlock("nestedList")} />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite, my: "10px" }}>
              Use <code>variant='outlined'</code> prop with <code>&lt;Chip &gt;</code> component for outlined chip.
            </Typography>
          </Box>
          {/* <SimpleDialog isOpen={codeBlock === "simpleDialog"} /> */}
          <NestedList isOpen={codeBlock === "nestedList"} />
        </Box>
        {/* --------------------//Nested List section end here---------------------------- */}



         {/* --------------------||Dense List section start here---------------------------- */}
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
              Dense List
              </Typography>
              <CodeIcon sx={{ color: "var(--icon-color)", cursor: "pointer" }} onClick={() => toggleCodeBlock("denseList")} />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite, my: "10px" }}>
              Use <code>variant='outlined'</code> prop with <code>&lt;Chip &gt;</code> component for outlined chip.
            </Typography>
          </Box>
          {/* <SimpleDialog isOpen={codeBlock === "simpleDialog"} /> */}
          <DenseList isOpen={codeBlock === "denseList"} />
        </Box>
        {/* --------------------//Dense List section end here---------------------------- */}


         {/* --------------------||List with Secondary Text section start here---------------------------- */}
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
              List with Secondary Text
              </Typography>
              <CodeIcon sx={{ color: "var(--icon-color)", cursor: "pointer" }} onClick={() => toggleCodeBlock("denseList")} />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite, my: "10px" }}>
              Use <code>variant='outlined'</code> prop with <code>&lt;Chip &gt;</code> component for outlined chip.
            </Typography>
          </Box>
          {/* <SimpleDialog isOpen={codeBlock === "simpleDialog"} /> */}
          <ListWithSecondaryText isOpen={codeBlock === "denseList"} />
        </Box>
        {/* --------------------//List with Secondary Text section end here---------------------------- */}





          {/* --------------------||Nested List section start here---------------------------- */}
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
              Selected List Item
              </Typography>
              <CodeIcon sx={{ color: "var(--icon-color)", cursor: "pointer" }} onClick={() => toggleCodeBlock("denseList")} />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite, my: "10px" }}>
              Use <code>'selected '</code> prop with the help of a state.
            </Typography>
          </Box>
          {/* <SimpleDialog isOpen={codeBlock === "simpleDialog"} /> */}
          <SelectedListItem isOpen={codeBlock === "denseList"} />
        </Box>
        {/* --------------------//Nested List section end here---------------------------- */}



         {/* --------------------||List with Checkbox section start here---------------------------- */}
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
              List with Checkbox
              </Typography>
              <CodeIcon sx={{ color: "var(--icon-color)", cursor: "pointer" }} onClick={() => toggleCodeBlock("denseList")} />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite, my: "10px" }}>
              Use <code>'selected '</code> prop with the help of a state.
            </Typography>
          </Box>
          {/* <SimpleDialog isOpen={codeBlock === "simpleDialog"} /> */}
          <ListWithCheckbox isOpen={codeBlock === "denseList"} />
        </Box>
        {/* --------------------//List with Checkbox section end here---------------------------- */}




          {/* --------------------||List with Switch section start here---------------------------- */}
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
              List with Switch
              </Typography>
              <CodeIcon sx={{ color: "var(--icon-color)", cursor: "pointer" }} onClick={() => toggleCodeBlock("listWithSwitch")} />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite, my: "10px" }}>
              Use <code>'selected '</code> prop with the help of a state.
            </Typography>
          </Box>
          {/* <SimpleDialog isOpen={codeBlock === "simpleDialog"} /> */}
          <ListWithSwitch isOpen={codeBlock === "listWithSwitch"} />
        </Box>
        {/* --------------------//List with Switchsection end here---------------------------- */}


         {/* --------------------||List with Switch section start here---------------------------- */}
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
              Sticky Subheader
              </Typography>
              <CodeIcon sx={{ color: "var(--icon-color)", cursor: "pointer" }} onClick={() => toggleCodeBlock("stickySubheader")} />
            </Box>
            <Typography sx={{ color: theme.palette.text.semiWhite, my: "10px" }}>
            is by default sticky.
            </Typography>
          </Box>
          {/* <SimpleDialog isOpen={codeBlock === "simpleDialog"} /> */}
          <StickySubheader isOpen={codeBlock === "stickySubheader"} />
        </Box>
        {/* --------------------//List with Switchsection end here---------------------------- */}


         {/* --------------------||List with UsersList start here---------------------------- */}
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
              Users List
              </Typography>
              <CodeIcon sx={{ color: "var(--icon-color)", cursor: "pointer" }} onClick={() => toggleCodeBlock("usersList")} />
            </Box>
            {/* <Typography sx={{ color: theme.palette.text.semiWhite, my: "10px" }}>
            is by default sticky.
            </Typography> */}
          </Box>
          {/* <SimpleDialog isOpen={codeBlock === "simpleDialog"} /> */}
          <UsersList isOpen={codeBlock === "usersList"} />
        </Box>
        {/* --------------------//List with UsersList end here---------------------------- */}





         {/* --------------------||Progress List start here---------------------------- */}
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
              Users List
              </Typography>
              <CodeIcon sx={{ color: "var(--icon-color)", cursor: "pointer" }} onClick={() => toggleCodeBlock("progressList")} />
            </Box>
            {/* <Typography sx={{ color: theme.palette.text.semiWhite, my: "10px" }}>
            is by default sticky.
            </Typography> */}
          </Box>
          {/* <SimpleDialog isOpen={codeBlock === "simpleDialog"} /> */}
          <ProgressList isOpen={codeBlock === "progressList"} />
        </Box>
        {/* --------------------//Progress List end here---------------------------- */}




       
      </Box>
    </Layout>
  );
});

export default ListContainer;
