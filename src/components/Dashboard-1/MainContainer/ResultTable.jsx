import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function createData(img, name, calories, fat, carbs, vat, protein) {
  return { img, name, calories, fat, carbs,vat, protein };
}

const rows = [
  createData(
    "/assets/images/icon/img-1.png",
    "Pragmatic play",
    159,
    6.0,
    24,
    5,
    4.0
  ),
  createData(
    "/assets/images/icon/img-2.png",
    "Ice cream sandwich",
    237,
    9.0,
    37,
    6,
    4.3
  ),
  createData("/assets/images/icon/img-3.png", "Eclair", 262, 16.0, 24,1, 6.0),
];

export default function ResultTable() {
  const theme = useTheme();
  return (
    <>
      <Typography variant="h6" style={{marginTop: '50px', marginLeft: '15px', color: theme.palette.text.white}}>Latest Transactions</Typography>
      <TableContainer style={{ marginTop: 20 }}>
        <Table
          sx={{ minWidth: 650, backgroundColor: "transparent" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow sx={{ borderBottom: `2px solid ${theme.palette.primary.border}` }}>
              <TableCell sx={{ color: "var(--text-color)", width: '20%' }}>
                Dessert (100g serving)
              </TableCell>
              <TableCell align="center" sx={{ color: "var(--text-color)" }}>
                Calories
              </TableCell>
              <TableCell align="center" sx={{ color: "var(--text-color)" }}>
                Fat&nbsp;(g)
              </TableCell>
              <TableCell align="center" sx={{ color: "var(--text-color)" }}>
                Carbs&nbsp;(g)
              </TableCell>
              <TableCell align="right" sx={{ color: "var(--text-color)" }}>
                Vat
              </TableCell>
              <TableCell align="right" sx={{ color: "var(--text-color)" }}>
                Protein&nbsp;(g)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  "& td": {
                    color: "#ffffff",
                    borderBottom: `1px solid ${theme.palette.primary.border}`,
                  },
                  "& th": {
                    color: "#ffffff",
                    borderBottom: `1px solid ${theme.palette.primary.border}`,
                  },
                }}
              >
                <TableCell
                  style={{ color: "var(--text-color)" }}
                >
                  <Box className="flex items-center gap-3">
                    <img src={row.img} alt="img" height={40} />
                    <Typography variant="p">{row.name}</Typography>
                  </Box>
                </TableCell>
                <TableCell align="center" style={{ color: "var(--text-color)" }}>
                  {row.calories}
                </TableCell>
                <TableCell align="center" style={{ color: "var(--text-color)" }}>
                  {row.fat}
                </TableCell>
                <TableCell align="center" style={{ color: "var(--text-color)" }}>
                  {row.carbs}
                </TableCell>
                <TableCell align="right" style={{ color: "var(--text-color)" }}>
                  {row.vat}%
                </TableCell>
                <TableCell align="right" style={{ color: "var(--text-color)" }}>
                  {row.protein}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
