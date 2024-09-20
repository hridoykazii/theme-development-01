import { Box } from "@mui/material";
import { spanningTable } from "common/code/Table/table";
import CodeBlock from "components/Test/CodeBlock";
import { memo } from "react";
import Tabels from "./Tabels";

// Prepare the spanning data
const spanningData = [
  { desc: 'Total Items', price: '$115.12' },
  { desc: 'Discount', price: '-$10.00' },
  { desc: 'Grand Total', price: '$105.12' }
];

// Sample columns and rows data
const columns = [
    {id: "name", label: "Dessert (100g serving)"},
    {id: "qty", label: "qty"},
    { id: "unit", label: "unit"},
    { id: "sum", label: "sum" },
  ]
  
  
  
  
  const rows = [
    { name: "Ice cream sandwich", qty: 5, unit: 2, sum: 10.00, },
    { name: "sandwich", qty: 3, unit: 2, sum: 6.00, },
  ];

const SpanningTable = memo(({ isOpen }) => {
  return (
    <Box>
      <Box>
        <Tabels
          rows={rows}
          columns={columns}
          spanningData={spanningData} // Pass spanning data as props
          
        />
      </Box>
      {isOpen && <CodeBlock code={spanningTable} />}
    </Box>
  );
});

export default SpanningTable;
