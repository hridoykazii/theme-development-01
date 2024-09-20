import { useTheme } from "@emotion/react";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { memo, useState } from "react";

const Auto = memo(() => {
  const theme = useTheme();
  const [amount, setAmount] = useState("");

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const clearAmount = () => {
    setAmount("");
  };

  return (
    <Box>
      <Box className="flex gap-2">
        <FormControl
          id="amount"
          sx={{
            width: "70%",
            marginBottom: "1rem",
            marginTop: "1rem",
            "& .MuiOutlinedInput-root": {
              height: "50px",
              width: "100%",
              color: `${theme.palette.text.white}`,
              backgroundColor: `${theme.palette.background.inputBg}`,
              borderRadius: "10px",
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
          <Typography className="!mb-2" sx={{color: theme.palette.text.white}}>Bet Amount</Typography>
          <TextField
            type="text"
            placeholder="0.00"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img
                    src="/assets/images/icon/ETH.png"
                    alt="img"
                    width={"25px"}
                    className="bg-[#886EEC] p-1 rounded-[30px]"
                  />
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
        <FormControl
          id="amount"
          sx={{
            width: "15%",
            marginBottom: "1rem",
            marginTop: "3rem",
            "& .MuiOutlinedInput-root": {
              height: "50px",
              width: "100%",
              color: `${theme.palette.text.white}`,
              backgroundColor: `${theme.palette.background.inputBg}`,
              borderRadius: "10px",
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
          <TextField type="text" placeholder="1/2" variant="outlined" />
        </FormControl>
        <FormControl
          id="amount"
          sx={{
            width: "15%",
            marginBottom: "1rem",
            marginTop: "3rem",
            "& .MuiOutlinedInput-root": {
              height: "50px",
              width: "100%",
              color: `${theme.palette.text.white}`,
              backgroundColor: `${theme.palette.background.inputBg}`,
              borderRadius: "10px",
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
          <TextField type="text" placeholder="2x" variant="outlined" />
        </FormControl>
      </Box>
      <FormControl
        id="amount"
        fullWidth
        className="relative"
        sx={{
          marginBottom: "1rem",
          "& .MuiOutlinedInput-root": {
            height: "50px",
            width: "100%",
            color: `${theme.palette.text.white}`,
            backgroundColor: `${theme.palette.background.inputBg}`,
            borderRadius: "10px",
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
        <Typography className="!mb-2" sx={{color: theme.palette.text.white}}>Auto Cash Out</Typography>
        <TextField
          type="text"
          placeholder="0.00"
          variant="outlined"
          value={amount}
          onChange={handleAmount}
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
      <Button
        variant="contained"
        fullWidth
        className="!mt-5 h-[50px] !rounded-[50px]"
        sx={{
          background: "linear-gradient(45deg, #886EEC 30%, #6553D8 90%)",
          boxShadow: "0 3px 5px 2px rgba(101, 83, 216, 0.3)",
          color: "white",
          textTransform: "capitalize",
        }}
      >
        Place Bet
      </Button>
    </Box>
  );
});

export default Auto;
