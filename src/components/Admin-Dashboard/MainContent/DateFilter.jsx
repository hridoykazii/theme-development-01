import { useTheme } from '@emotion/react';
import { Box, FormControl, MenuItem, Select } from '@mui/material';
import { memo, useState } from 'react';

const DateFilter = memo(() => {
    const theme = useTheme();
    const [date, setDate] = useState("");

    const handleDate = (event) => {
        setDate(event.target.value);
    };

    return (
        <Box>
            <FormControl
                fullWidth
                sx={{
                marginTop: "1rem",
                "& .MuiSelect-select": {
                    color: date ? `${theme.palette.text.white}` : "",
                },
                "& .MuiOutlinedInput-root": {
                    height: "40px",
                    width: "100%",
                    color: "var(--placeholder-color)",
                    backgroundColor: `${theme.palette.background.inputBg}`,
                    "& fieldset": {
                    border: "none",
                    },
                    "&:hover fieldset": {
                    border: "none",
                    },
                    "&.Mui-focused fieldset": {
                    border: `1px solid ${theme.palette.primary.border}`,
                    },
                },
                "& .MuiSelect-icon": {
                    color: "var(--icon-color)",
                },
                }}
            >
                <Select
                value={date}
                onChange={handleDate}
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
                        bgcolor: `${theme.palette.background.listItemBg}`,
                        color: "var(--color-white)",
                    },
                    },
                    MenuListProps: {
                    sx: {
                        padding: "0px",
                        bgcolor: `${theme.palette.background.listItemBg}`,
                        "&& .Mui-disabled": {
                        color: `${theme.palette.text.white} !important`,
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
                    10.7 - 16.7
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
                    17.7 - 20.7
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
                    21.7 - 30.7
                </MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
});

export default DateFilter;