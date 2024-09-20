import { Accordion, AccordionDetails, AccordionSummary, Box, Checkbox, useTheme } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add"; // that is for customize accordion
import RemoveIcon from "@mui/icons-material/Remove"; // that is for after click expand then show
import React from "react";
import { pink } from "@mui/material/colors";

const Accordions = ({ items = [], defaultExpanded, ControlledAccordion = false, customize = false, AdditionalActions = false }) => {
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  console.log("this is item check", items);
  console.log("this is item check", items.id);
  console.log("that is customozie", customize);

  return (
    <Box>
      {items.length > 0 ? (
        items.map((item, index) => {
          const isExpanded = expanded === `panel${index + 1}`;
          const panelId = `panel${index + 1}`;
          console.log("id check", item.id);

          return (
            <Accordion key={item.id} sx={{ bgcolor: theme.palette.background.accordionBgColor}} expanded={ControlledAccordion ? isExpanded : undefined} onChange={ControlledAccordion ? handleChange(panelId) : undefined} defaultExpanded={item.id === defaultExpanded}>
              <AccordionSummary expandIcon={customize ? isExpanded ? <RemoveIcon /> : <AddIcon /> : <ExpandMoreIcon />} aria-controls={`${panelId}-content`} id={`${panelId}-header`}>
                <Box className=" flex items-center">
                  {item.icon && <Box mr={1}>{item.icon}</Box>}
                  {AdditionalActions && (
                    <Box>
                      <Checkbox
                        sx={{
                        //   color: pink[800],
                        color: theme.palette.primary,
                          "&.Mui-checked": {
                            color: theme.palette.primary.active,
                         
                          },
                        }}
                        {...label}
                      />
                    </Box>
                  )}
                  {item.title}
                </Box>
              </AccordionSummary>
              <AccordionDetails>{item.details}</AccordionDetails>
            </Accordion>
          );
        })
      ) : (
        <p>No items available</p>
      )}
    </Box>
  );
};

export default Accordions;
