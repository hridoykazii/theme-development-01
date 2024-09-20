import { Box } from "@mui/material";
import { controlledAccordion, customizedAccordion } from "common/code/Accordion/accordion";
import CodeBlock from "components/Test/CodeBlock";
import { memo } from "react";
import Accordions from "./Accordions";
import PermIdentityIcon from '@mui/icons-material/PermIdentity'; //That is for your custom icons
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';  //That is for your custom icons
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';


const CustomizedAccordion = memo(({ isOpen }) => {
  console.log("from simple accordian", isOpen);
  const accordionData = [
    { id: 1, title: `Accordion 1`, details: "Lorem ipsum dolor sit amet...", icon: <PermIdentityIcon />},
    { id: 2, title: "Accordion 2", details: "Suspendisse malesuada lacus...", icon: <WorkOutlineIcon /> },
    { id: 3, title: "Accordion 3", details: "Sit amet blandit leo lobortis...", icon: <CardGiftcardIcon /> },
  ];

  return (
    <Box>
      <Box>
        <Accordions items={accordionData} ControlledAccordion={true} customize={true} />
      </Box>
      {isOpen && <CodeBlock code={customizedAccordion} />}
    </Box>
  );
});

export default CustomizedAccordion;
