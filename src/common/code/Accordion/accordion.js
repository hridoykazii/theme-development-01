export const simpleAccordion = `
import { Box } from "@mui/material";
import React, { memo } from "react";
import Accordions from "./Accordions";

const SimpleAccordion = memo(({ isOpen }) => {
  console.log("from simple accordian", isOpen);
  const accordionData = [
    { id: 1, title: "Accordion 1", details: "Lorem ipsum dolor sit amet..." },
    { id: 2, title: "Accordion 2", details: "Suspendisse malesuada lacus..." },
    { id: 3, title: "Accordion 3", details: "Sit amet blandit leo lobortis..." },
  ];

  return (
    <Box>
      <Box>
        <Accordions items={accordionData}  />
      </Box>
    </Box>
  );
});

export default SimpleAccordion;

`
export const controlledAccordion = `
import { Box } from "@mui/material";
import { controlledAccordion } from "common/code/Accordion/accordion";
import CodeBlock from "components/Test/CodeBlock";
import { memo } from "react";
import Accordions from "./Accordions";

const ControlledAccordion = memo(({ isOpen }) => {
  console.log("from simple accordian", isOpen);
  const accordionData = [
    { id: 1, title: "Accordion 1", details: "Lorem ipsum dolor sit amet..." },
    { id: 2, title: "Accordion 2", details: "Suspendisse malesuada lacus..." },
    { id: 3, title: "Accordion 3", details: "Sit amet blandit leo lobortis..." },
  ];

  return (
    <Box>
      <Box>
        <Accordions items={accordionData} ControlledAccordion={true}  />
      </Box>
      {isOpen && <CodeBlock code={controlledAccordion} />}
    </Box>
  );
});

export default ControlledAccordion;

`
export const customizedAccordion = `
import { Box } from "@mui/material";
import { memo } from "react";
import Accordions from "./Accordions";
import PermIdentityIcon from '@mui/icons-material/PermIdentity'; //That is for your custom icons
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';  //That is for your custom icons
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';


const CustomizedAccordion = memo(({ isOpen }) => {
  console.log("from simple accordian", isOpen);
  const accordionData = [
    { id: 1, title: "Accordion 1', details: "Lorem ipsum dolor sit amet...", icon: <PermIdentityIcon />},
    { id: 2, title: "Accordion 2", details: "Suspendisse malesuada lacus...", icon: <WorkOutlineIcon /> },
    { id: 3, title: "Accordion 3", details: "Sit amet blandit leo lobortis...", icon: <CardGiftcardIcon /> },
  ];

  return (
    <Box>
      <Box>
        <Accordions items={accordionData} ControlledAccordion={true} customize={true} />
      </Box>
    </Box>
  );
});

export default CustomizedAccordion;

`

export const additionalActions = `
import { Box } from "@mui/material";
import { controlledAccordion } from "common/code/Accordion/accordion";
import CodeBlock from "components/Test/CodeBlock";
import { memo } from "react";
import Accordions from "./Accordions";

const AdditionalActions = memo(({ isOpen }) => {
  console.log("from simple accordian", isOpen);
  const accordionData = [
    { id: 1, title: "Accordion 1", details: "Lorem ipsum dolor sit amet..." },
    { id: 2, title: "Accordion 2", details: "Suspendisse malesuada lacus..." },
    { id: 3, title: "Accordion 3", details: "Sit amet blandit leo lobortis..." },
  ];

  return (
    <Box>
      <Box>
        <Accordions items={accordionData} ControlledAccordion={true} AdditionalActions={true} />
      </Box>
      {isOpen && <CodeBlock code={controlledAccordion} />}
    </Box>
  );
});

export default AdditionalActions;

`