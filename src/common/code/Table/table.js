export const basicTable = `
import { Box } from "@mui/material";
import React, { memo } from "react";
import Tabels from "./Tabels";

//here set your specific columns
const columns = [
  { id: "name", label: "Dessert (100g serving)" },
  { id: "calories", label: "Calories", align: "right" },
  { id: "fat", label: "Fat (g)", align: "right" },
  { id: "carbs", label: "Carbs (g)", align: "right" },
  { id: "protein", label: "Protein (g)", align: "right" },
];

//here set your specific rows
const rows = [
  {
    name: "Lutfor Rahman Hira",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
  },
  { name: "Eclair", calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
  { name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  { name: "Gingerbread", calories: 356, fat: 16.0, carbs: 49, protein: 3.9 },
];

const BasicTable = memo(({ isOpen }) => {
  return (
    <Box>
      <Box>
        <Tabels rows={rows} columns={columns} />
      </Box>
    </Box>
  );
});

export default BasicTable;
`;

export const denseTable = `
import { Box } from "@mui/material";
import { memo } from "react";
import Tabels from "./Tabels";

const columns = [
  { id: "name", label: "Dessert (100g serving)" },
  { id: "calories", label: "Calories", align: "right" },
  { id: "fat", label: "Fat (g)", align: "right" },
  { id: "carbs", label: "Carbs (g)", align: "right" },
  { id: "protein", label: "Protein (g)", align: "right" },
];

const rows = [
  {
    name: "Lutfor Rahman Hira",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
  },
  { name: "Eclair", calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
  { name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  { name: "Gingerbread", calories: 356, fat: 16.0, carbs: 49, protein: 3.9 },
];

const DenseTable = memo(({ isOpen }) => {
  return (
    <Box>
      <Box>
        <Tabels rows={rows} columns={columns} size="small" />
      </Box>
    </Box>
  );
});

export default DenseTable;

`;

export const stickyHeader = `
import { Box } from "@mui/material";
import { memo } from "react";
import Tabels from "./Tabels";

const columns = [
  { id: "name", label: "Dessert (100g serving)" },
  { id: "calories", label: "Calories", align: "right" },
  { id: "fat", label: "Fat (g)", align: "right" },
  { id: "carbs", label: "Carbs (g)", align: "right" },
  { id: "protein", label: "Protein (g)", align: "right" },
];

const rows = [
  {
    name: "Lutfor Rahman Hira",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
  },
  { name: "Eclair", calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
  { name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  { name: "Gingerbread", calories: 356, fat: 16.0, carbs: 49, protein: 3.9 },
  { name: "Gangerbread", calories: 356, fat: 16.0, carbs: 49, protein: 3.9 },
  { name: "Gbngerbread", calories: 356, fat: 16.0, carbs: 49, protein: 3.9 },
  { name: "Gcngerbread", calories: 356, fat: 16.0, carbs: 49, protein: 3.9 },
  { name: "Gdngerbread", calories: 356, fat: 16.0, carbs: 49, protein: 3.9 },
  { name: "Gengerbread", calories: 356, fat: 16.0, carbs: 49, protein: 3.9 },
  { name: "Gfngerbread", calories: 356, fat: 16.0, carbs: 49, protein: 3.9 },
  { name: "Ggngerbread", calories: 356, fat: 16.0, carbs: 49, protein: 3.9 },
  { name: "Ghngerbread", calories: 356, fat: 16.0, carbs: 49, protein: 3.9 },
];

const StickyHeaderTable = memo(({ isOpen }) => {
  return (
    <Box>
      <Box>
        <Tabels
          rows={rows}
          columns={columns}
          stickyHeader={true}
          sx={{ maxHeight: 440 }}
        />
      </Box>
    </Box>
  );
});

export default StickyHeaderTable;

`;

export const collapseTable = `
import { Box } from "@mui/material";
import { memo } from "react";
import Tabels from "./Tabels";




const columns = [
  {id: "name", label: "Dessert (100g serving)"},
  {id: "calories", label: "calories"},
  { id: "fat", label: "Fat (g)"},
  { id: "carbs", label: "Carbs (g)" },
  { id: "protein", label: "Protein (g)"},
]




const rows = [
  { name: "Ice cream sandwich", calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
  { name: "Chocolate chip cookie", calories: 200, fat: 9.0, carbs: 25, protein: 3.0 },
  { name: "Apple pie", calories: 250, fat: 12.0, carbs: 30, protein: 2.5 },
  { name: "Brownie", calories: 280, fat: 15.0, carbs: 30, protein: 4.0 },
  { name: "Donut", calories: 180, fat: 8.0, carbs: 22, protein: 3.0 },
  { name: "Cheesecake", calories: 320, fat: 18.0, carbs: 25, protein: 6.0 },
  { name: "Cupcake", calories: 150, fat: 6.0, carbs: 22, protein: 2.0 },
  { name: "Muffin", calories: 190, fat: 7.0, carbs: 26, protein: 3.5 },
  { name: "Tiramisu", calories: 290, fat: 14.0, carbs: 28, protein: 5.0 },
  { name: "Pancake", calories: 200, fat: 8.0, carbs: 27, protein: 4.0 }
];




const CollapseTable = memo(({ isOpen }) => {
  return (
    <Box>
      <Box>
        <Tabels columns={columns} rows={rows} collapse={true} additionalContent="you can pass your data or component here"  />
      </Box>
    </Box>
  );
});

export default CollapseTable;

`

export const spanningTable = `
import { Box } from "@mui/material";
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
          collapse={false}
        />
      </Box>
    </Box>
  );
});

export default SpanningTable;
`
