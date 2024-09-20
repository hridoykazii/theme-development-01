import { useTheme } from '@emotion/react';
import WalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DarkMode from "@mui/icons-material/Brightness7";
import PersonIcon from '@mui/icons-material/Person';
import InboxIcon from '@mui/icons-material/QuestionAnswer';
import SearchIcon from "@mui/icons-material/Search";
import LightMode from '@mui/icons-material/WbSunny';
import { Box, Button, InputBase, Typography, styled, useMediaQuery } from "@mui/material";
import { memo } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setThemeMode } from 'redux/features/theme/themeSlice';

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "transparent",
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    right: 0,
    top: '5px',
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
    "&::placeholder": {
      color: `${theme.palette.text.placeholder}`,
      opacity: 1,
    },
  },
}));


const Topbar = memo(() => {
  const isSmallScreen = useMediaQuery('(max-width: 575px)');
  const dispatch = useDispatch();
  const theme = useTheme();
  const themeMode = useSelector((state) => state.themeSlice.themeMode);

  const changeTheme = (mode) => {
    if (mode === 'dark') {
      dispatch(setThemeMode('dark'))
    }else {
      dispatch(setThemeMode('light'))
    }
  }
  return (
    <Box className='flex justify-between items-center'>
        <Box>
            <img src="/assets/images/logo/logo.png" alt="logo" />
        </Box>
        <Search sx={{display: isSmallScreen ? 'none' : 'block'}}>
            <StyledInputBase
                placeholder="Search"
                inputProps={{ "aria-label": "search" }}
            />
            <SearchIconWrapper>
                <SearchIcon sx={{ color: "var(--icon-color)" }} className="!text-4xl"/>
            </SearchIconWrapper>
        </Search>
        <Box className="flex items-center justify-end gap-5">
            <Box className='flex items-center gap-2'>
                <Typography sx={{color: theme.palette.text.default}}>8963.12</Typography>
                <WalletIcon className='text-[var(--icon-color)]'/>
            </Box>
            <InboxIcon className='text-[var(--icon-color)]' sx={{display: isSmallScreen ? 'none' : 'block'}}/>
            {themeMode === 'dark' ? (
            <Button 
              onClick={() => changeTheme('light')}
              sx={{
                '&:hover' : {
                  background: 'transparent'
                }
              }}
            >
              <LightMode sx={{ color: "var(--icon-color)" }} />
              </Button>
            ) : (
            <Button 
              onClick={() => changeTheme('dark')}
              sx={{
                '&:hover' : {
                  background: 'transparent'
                }
              }}
            >
              <DarkMode sx={{ color: "var(--icon-color)" }} />
            </Button>
          )}
            <PersonIcon className='text-[var(--icon-color)]'/>
        </Box>
    </Box>
  );
});

export default Topbar;
