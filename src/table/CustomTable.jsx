import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Box,
  Button,
  Collapse,
  IconButton,
  Menu,
  MenuItem,
  TablePagination,
  useTheme,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import * as XLSX from "xlsx";

const CustomTable = ({
  rows = [],
  columns = [],
  size,
  stickyHeader,
  sx,
  collapse,
  additionalContent,
  spanningData = [], // New prop for spanning data
}) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [openRows, setOpenRows] = useState({});

  const handleRowToggle = (rowIndex) => {
    setOpenRows((prevState) => ({
      ...prevState,
      [rowIndex]: !prevState[rowIndex],
    }));
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const downloadCSV = () => {
    const csvData = [];
    const headers = columns.map((col) => col.label).join(",");
    csvData.push(headers);

    rows.forEach((row) => {
      const rowData = columns.map((col) => row[col.id]).join(",");
      csvData.push(rowData);
    });

    const csvString = csvData.join("\n");
    const blob = new Blob([csvString], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "table_data.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    XLSX.writeFile(workbook, "table_data.xlsx");
  };

  const printTable = () => {
    const printContent = document.getElementById("printTable").outerHTML;
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
    window.location.reload();
  };

  // Render spanning rows
  const renderSpanningRows = () => {
    return spanningData.map((spanningRow, index) => (
      <TableRow key={`spanning-${index}`} sx={{}}>
        <TableCell colSpan={columns.length} align="right">
          {spanningRow.desc}
        </TableCell>
        <TableCell  align="right">{spanningRow.price}</TableCell>
      </TableRow>
    ));
  };

  return (
    <Box>
      <Box className="flex justify-end py-2">
        <Button
          variant="contained"
          sx={{ color: theme.palette.primary.white, fontSize: "12px" }}
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Export
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={() => {
              downloadCSV();
              handleClose();
            }}
          >
            Download as CSV
          </MenuItem>
          <MenuItem
            onClick={() => {
              downloadExcel();
              handleClose();
            }}
          >
            Download as Excel
          </MenuItem>
          <MenuItem
            onClick={() => {
              printTable();
              handleClose();
            }}
          >
            Print
          </MenuItem>
        </Menu>
      </Box>
      <TableContainer sx={sx} component={Paper} id="printTable">
        <Table
          sx={{ minWidth: 650 }}
          stickyHeader={stickyHeader}
          size={size ? size : ""}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              {collapse && (
                <TableCell sx={{ borderBottom: `0.5px solid ${theme.palette.table.borderColor}` }} />
              )}
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align || "left"}
                  sx={{
                    color: "#797FFF",
                    fontWeight: "1000",
                    borderBottom: `0.5px solid ${theme.palette.table.borderColor}`,
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, rowIndex) => (
                <React.Fragment key={rowIndex}>
                  <TableRow>
                    {collapse && (
                      <TableCell>
                        <IconButton
                          aria-label="expand row"
                          size="small"
                          onClick={() => handleRowToggle(rowIndex)}
                        >
                          {openRows[rowIndex] ? (
                            <KeyboardArrowUpIcon />
                          ) : (
                            <KeyboardArrowDownIcon />
                          )}
                        </IconButton>
                      </TableCell>
                    )}
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align || "left"}
                      >
                        {row[column.id]}
                      </TableCell>
                    ))}
                  </TableRow>
                  {collapse && (
                    <>
                    <TableRow>
                      <TableCell
                        style={{ paddingBottom: 0, paddingTop: 0 }}
                        colSpan={columns.length + (collapse ? 1 : 0)} // Adjust colSpan for collapse icon
                      >
                        <Collapse
                          in={openRows[rowIndex]}
                          timeout="auto"
                          unmountOnExit
                        >
                          <Box margin={1}>
                            {additionalContent}
                          </Box>
                        </Collapse>
                      </TableCell>
                    </TableRow>
                    </>
                  )}
                  {/* {spanningData.length > 0 && renderSpanningRows()} */}
                </React.Fragment>
              ))}
          </TableBody>
         
        </Table>
        <Box className=" flex items-center justify-end w-full px-12 ">
          <Box className=" w-full flex flex-col items-end  justify-end ">
          {spanningData.length > 0 && renderSpanningRows()}
          </Box>
          </Box>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default CustomTable;
