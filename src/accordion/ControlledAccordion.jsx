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
