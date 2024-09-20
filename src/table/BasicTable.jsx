import { Box } from "@mui/material";
import React, { memo } from "react";
import Tabels from "./Tabels";
import CodeBlock from "components/Test/CodeBlock";
import { basicTable } from "common/code/Table/table";

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

const BasicTable = memo(({ isOpen }) => {
  return (
    <Box>
      <Box>
        <Tabels rows={rows} columns={columns} />
      </Box>
      {isOpen && <CodeBlock code={basicTable} />}
    </Box>
  );
});

export default BasicTable;
