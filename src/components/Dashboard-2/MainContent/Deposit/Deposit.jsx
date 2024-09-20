import { useTheme } from "@emotion/react";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import ImagePreviewer from "components/Common/ImagePreviewer";
import { memo, useState } from "react";

const Deposit = memo(() => {
  const theme = useTheme();
  const [method, setMethod] = useState("");
  const [amount, setAmount] = useState("");

  const handleChange = (event) => {
    setMethod(event.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const clearAmount = () => {
    setAmount("");
  };

  return (
    <Box>
      <FormControl
        fullWidth
        sx={{
          marginTop: "1rem",
          "& .MuiSelect-select": {
            color: method ? `${theme.palette.text.white}` : "",
          },
          "& .MuiOutlinedInput-root": {
            height: "50px",
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
        <Typography className="!mb-2" sx={{color: theme.palette.text.white}}>Method</Typography>
        <Select
          value={method}
          onChange={handleChange}
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
      <FormControl
        id="amount"
        fullWidth
        className="relative"
        sx={{
          marginBottom: "1rem",
          marginTop: "1rem",
          "& .MuiOutlinedInput-root": {
            height: "50px",
            width: "100%",
            color: `${theme.palette.text.white}`,
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
        }}
      >
        <Typography className="!mb-2" sx={{color: theme.palette.text.white}}>Amount</Typography>
        <TextField
          type="text"
          placeholder="0.00"
          variant="outlined"
          value={amount}
          onChange={handleAmount}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img
                  src="/assets/images/icon/ETH.png"
                  alt="img"
                  width={"25px"}
                  height={"25px"}
                  className="bg-[#886EEC] p-1 rounded-[30px]"
                />
              </InputAdornment>
            ),
          }}
        />
        <Typography className="absolute right-3 top-11">
          <CloseIcon
            sx={{
              color: "var(--icon-color)",
              cursor: "pointer",
              "&:hover": {
                color: theme.palette.text.white,
              },
            }}
            onClick={clearAmount}
          />
        </Typography>
      </FormControl>
      <FormControl fullWidth>
        <Typography className="!mb-2" sx={{color: `${theme.palette.text.white}`}}>Document</Typography>
        <ImagePreviewer />
      </FormControl>
      <Button
        variant="contained"
        fullWidth
        className="!mt-5 h-[50px] !rounded-[50px]"
        sx={{
          background: "linear-gradient(45deg, #886EEC 30%, #6553D8 90%)",
          boxShadow: "0 3px 5px 2px rgba(101, 83, 216, 0.3)",
          color: "white",
          fontWeight: "bold",
        }}
      >
        Submit
      </Button>
    </Box>
  );
});

export default Deposit;
