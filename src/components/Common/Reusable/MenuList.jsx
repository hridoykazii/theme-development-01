import { Box, FormControl, MenuItem, Select, Typography } from '@mui/material';
import { memo } from 'react';

const MenuList = memo(({method, handler}) => {
    return (
        <Box>
            <FormControl
                fullWidth
                sx={{
                marginTop: "1rem",
                "& .MuiSelect-select": {
                    color: method ? "white" : "",
                },
                "& .MuiOutlinedInput-root": {
                    height: "50px",
                    width: "100%",
                    color: "var(--placeholder-color)",
                    backgroundColor: "var(--input-bg-color)",
                    "& fieldset": {
                    border: "none",
                    },
                    "&:hover fieldset": {
                    border: "none",
                    },
                    "&.Mui-focused fieldset": {
                    border: `1px solid var(--border-color)`,
                    },
                },
                "& .MuiSelect-icon": {
                    color: "var(--icon-color)",
                },
                }}
            >
                <Typography className="!mb-2">Method</Typography>
                <Select
                value={method}
                onChange={handler}
                displayEmpty
                MenuProps={{
                    sx: {
                    "& .Mui-selected": {
                        color: "#fff !important",
                        background: "rgb(128 110 220) !important",
                    },
                    },
                    PaperProps: {
                    sx: {
                        maxHeight: 300,
                        bgcolor: "var(--btn-bg-color)",
                        color: "var(--color-white)",
                    },
                    },
                    MenuListProps: {
                    sx: {
                        padding: "0px",
                        backgroundColor: "var(--input-bg-color)",
                        "& .Mui-disabled": {
                            color: "white",
                            backgroundColor: "transparent !important",
                        },
                    },
                    },
                }}
                >
                <MenuItem
                    value=""
                    disabled
                    sx={{
                    "&:hover": {
                        backgroundColor: "pink",
                    },
                    }}
                >
                    Select Method
                </MenuItem>
                <MenuItem
                    value={"bank"}
                    sx={{
                    color: "var(--placeholder-color)",
                    "&:hover": {
                        color: "#fff !important",
                        backgroundColor: "var(--selectItem-hover)",
                    },
                    }}
                >
                    Bank
                </MenuItem>
                <MenuItem
                    value={"crypto"}
                    sx={{
                    color: "var(--placeholder-color)",
                    "&:hover": {
                        color: "#fff !important",
                        backgroundColor: "var(--selectItem-hover)",
                    },
                    }}
                >
                    Crypto
                </MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
});

export default MenuList;