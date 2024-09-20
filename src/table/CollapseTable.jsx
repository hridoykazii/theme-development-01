import { Box } from "@mui/material";
import { basicTable, collapseTable } from "common/code/Table/table";
import CodeBlock from "components/Test/CodeBlock";
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
      {isOpen && <CodeBlock code={collapseTable} />}
    </Box>
  );
});

export default CollapseTable;
