import { Box } from "@mui/material";
import { simpleAccordion } from "common/code/Accordion/accordion";
import CodeBlock from "components/Test/CodeBlock";
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
      {isOpen && <CodeBlock code={simpleAccordion} />}
    </Box>
  );
});

export default SimpleAccordion;
