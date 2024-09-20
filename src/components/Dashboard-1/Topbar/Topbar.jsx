import { useTheme } from "@emotion/react";
import DarkMode from "@mui/icons-material/Brightness7";
import ReloadIcon from '@mui/icons-material/Cached';
import SearchIcon from "@mui/icons-material/Search";
import LightMode from '@mui/icons-material/WbSunny';
import { Box, Button, InputBase, Typography, styled } from "@mui/material";
import { Fragment, memo, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setThemeMode } from "redux/features/theme/themeSlice";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
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
    <Fragment>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Search>
          <SearchIconWrapper>
            <SearchIcon sx={{ color: "var(--icon-color)" }} />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 2,
          }}
        >
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
          <img src="/assets/images/icon/man.png" alt="user" width="40" />
        </Box>
      </Box>
      <Box className="flex justify-between items-stretch mb-3 md:mt-0 mt-2">
        <Box>
          <Typography className={`pb-1 !text-3xl !font-semibold`} sx={{color: theme.palette.text.white}}>FXCRM</Typography>
          <Box className="!font-bold !text-3xl !md:text-4xl !lg:text-6xl">
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, #9c90ff, #8cebd9, #cf5af0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Best Forex CRM
          </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography
            sx={{
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, #9183ff, #cf5af0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            56
          </Typography>
          <Typography variant="body1" className={`text-[var(--text-color)] text-sm md:text-base lg:text-lg`}>Providers</Typography>
          <ReloadIcon sx={{color: 'var(--icon-color)', rotate: '45deg'}}/>
        </Box>
      </Box>
    </Fragment>
  );
});

export default Topbar;
