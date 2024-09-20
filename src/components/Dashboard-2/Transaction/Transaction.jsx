import { useTheme } from "@emotion/react";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import ReloadIcon from "@mui/icons-material/Cached";
import CropFreeIcon from "@mui/icons-material/CropFree";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  Box,
  Button,
  Grid,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { memo, useState } from "react";
import BalanceChart from "../Chart/BalanceChart";
import Auto from "./Auto";
import Manual from "./Manual";

const Transaction = memo(() => {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const isSmallScreen = useMediaQuery("(max-width: 575px)");
  const isMediumScreen = useMediaQuery("(max-width: 1024px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 5, md: 10 }}
      sx={{
        width: {
          xs: "100%",
          sm: "calc(100% + 0px)",
          md: "calc(100% + 0px)",
          lg: "calc(100% + 40px)",
        },
      }}
    >
      <Grid
        item
        xs={12}
        md={12}
        lg={4}
        style={{ order: isMediumScreen ? 2 : 1 }}
      >
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "var(--active-color)",
              },
              "& .MuiTab-root": {
                textTransform: "none",
                fontWeight: "bold",
                color: "var(--text-color)",
                "&.Mui-selected": {
                  color: `${theme.palette.text.activeTab}`,
                  borderBottom: "2px solid",
                  borderColor: "var(--color-white)",
                },
              },
            }}
          >
            <Tab
              label="Manual"
              className="w-[50%] !text-[18px]"
              sx={{
                textTransform: "none",
                fontWeight: "bold",
              }}
            />
            <Tab
              label="Auto"
              className="w-[50%] !text-[18px]"
              sx={{
                textTransform: "none",
                fontWeight: "bold",
              }}
            />
          </Tabs>
        </Box>
        {value === 0 ? <Manual /> : <Auto />}
        <Box>
          <Typography
            variant="h6"
            style={{ marginTop: "30px", marginBottom: "20px", color: theme.palette.text.white }}
          >
            Latest Transactions
          </Typography>
          <Box className="mt-3 flex items-center justify-between">
            <Box className="flex items-center gap-2">
              <img src="/assets/images/icon/img-1.png" alt="img" width={40} />
              <Box>
                <Typography sx={{color: theme.palette.text.white}}>Deposit</Typography>
                <Typography className="!text-[12px] text-[var(--text-color)]">
                  06 july 2024, 1:53PM
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography className="text-right" sx={{color: theme.palette.text.white}} >$ 100</Typography>
              <Typography className="!text-[12px] text-yellow-400">
                Pending
              </Typography>
            </Box>
          </Box>
          <Box className="mt-3 flex items-center justify-between">
            <Box className="flex items-center gap-2">
              <img src="/assets/images/icon/img-2.png" alt="img" width={40} />
              <Box>
                <Typography sx={{color: theme.palette.text.white}}>Balance Send</Typography>
                <Typography className="!text-[12px] text-[var(--text-color)]">
                  06 july 2024, 1:53PM
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography className="text-right" sx={{color: theme.palette.text.white}}>$ 10</Typography>
              <Typography className="!text-[12px] text-green-400">
                Approved
              </Typography>
            </Box>
          </Box>
          <Box className="mt-3 flex items-center justify-between">
            <Box className="flex items-center gap-2">
              <img src="/assets/images/icon/img-3.png" alt="img" width={40} />
              <Box>
                <Typography sx={{color: theme.palette.text.white}}>Withdraw</Typography>
                <Typography className="!text-[12px] text-[var(--text-color)]">
                  06 july 2024, 1:53PM
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography className="text-right" sx={{color: theme.palette.text.white}}>$ 100</Typography>
              <Typography className="!text-[12px] text-red-400">
                Rejected
              </Typography>
            </Box>
          </Box>
          <Box className="mt-3 flex items-center justify-between">
            <Box className="flex items-center gap-2">
              <img src="/assets/images/icon/img-1.png" alt="img" width={40} />
              <Box>
                <Typography sx={{color: theme.palette.text.white}}>Deposit</Typography>
                <Typography className="!text-[12px] text-[var(--text-color)]">
                  06 july 2024, 1:53PM
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography className="text-right" sx={{color: theme.palette.text.white}} >$ 100</Typography>
              <Typography className="!text-[12px] text-yellow-400">
                Pending
              </Typography>
            </Box>
          </Box>
          <Box className="mt-3 flex items-center justify-between">
            <Box className="flex items-center gap-2">
              <img src="/assets/images/icon/img-2.png" alt="img" width={40} />
              <Box>
                <Typography sx={{color: theme.palette.text.white}}>Balance Send</Typography>
                <Typography className="!text-[12px] text-[var(--text-color)]">
                  06 july 2024, 1:53PM
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography className="text-right" sx={{color: theme.palette.text.white}}>$ 10</Typography>
              <Typography className="!text-[12px] text-green-400">
                Approved
              </Typography>
            </Box>
          </Box>
          <Box className="mt-3 flex items-center justify-between">
            <Box className="flex items-center gap-2">
              <img src="/assets/images/icon/img-3.png" alt="img" width={40} />
              <Box>
                <Typography sx={{color: theme.palette.text.white}}>Withdraw</Typography>
                <Typography className="!text-[12px] text-[var(--text-color)]">
                  06 july 2024, 1:53PM
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography className="text-right" sx={{color: theme.palette.text.white}}>$ 100</Typography>
              <Typography className="!text-[12px] text-red-400">
                Rejected
              </Typography>
            </Box>
          </Box>
          <Box className="mt-3 flex items-center justify-between">
            <Box className="flex items-center gap-2">
              <img src="/assets/images/icon/img-2.png" alt="img" width={40} />
              <Box>
                <Typography sx={{color: theme.palette.text.white}}>Balance Send</Typography>
                <Typography className="!text-[12px] text-[var(--text-color)]">
                  06 july 2024, 1:53PM
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography className="text-right" sx={{color: theme.palette.text.white}}>$ 10</Typography>
              <Typography className="!text-[12px] text-green-400">
                Approved
              </Typography>
            </Box>
          </Box>
          <Box className="mt-3 flex items-center justify-between">
            <Box className="flex items-center gap-2">
              <img src="/assets/images/icon/img-3.png" alt="img" width={40} />
              <Box>
                <Typography sx={{color: theme.palette.text.white}}>Withdraw</Typography>
                <Typography className="!text-[12px] text-[var(--text-color)]">
                  06 july 2024, 1:53PM
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography className="text-right" sx={{color: theme.palette.text.white}}>$ 100</Typography>
              <Typography className="!text-[12px] text-red-400">
                Rejected
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        lg={8}
        style={{ order: isMediumScreen ? 1 : 2 }}
      >
        <Box className="rounded-[20px] p-7 relative box-border" sx={{bgcolor: theme.palette.background.inputBg}}>
        <Box className='mb-4 flex gap-3'>
                <Button className='!rounded-[18px] !px-5' sx={{border: `1px solid ${theme.palette.primary.border2}`, color: theme.palette.text.white }}>20.30X</Button>
                <Button className='!rounded-[18px] !px-5' sx={{border: `1px solid ${theme.palette.primary.border2}`, color: theme.palette.text.white }}>5.10X</Button>
                <Button className='!rounded-[18px] !px-5' sx={{border: `1px solid ${theme.palette.primary.active}`, color: theme.palette.text.white }}>40.30X</Button>
                <Button className='!rounded-[50%] h-[40px]' sx={{border: `1px solid ${theme.palette.primary.border2}`, color: theme.palette.text.white, minWidth: '40px'}}><AutoGraphIcon/></Button>
            </Box>
          <Box sx={{ width: "100%", height: "100%" }}>
            <BalanceChart />
          </Box>
          <Box className={isSmallScreen ? 'absolute top-[120px] left-[80px]' : isMediumScreen ? 'absolute top-[150px] left-[100px]' : 'absolute top-[150px] left-[200px]'}>
            <Typography className={isSmallScreen ? '!text-[28px] !font-bold' : '!text-[42px] !font-bold'} sx={{color: theme.palette.text.white}}>
              Total Amount
            </Typography>
            <Typography className={isSmallScreen ? '!text-[42px] !font-bold' : '!text-[74px] !font-bold'} 
              sx={{
                letterSpacing: isMediumScreen ? '3px' : '7px',
                fontWeight: 'bold',
                background: 'linear-gradient(90deg, #9183ff, #cf5af0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
              830.15x
            </Typography>
            </Box>
        </Box>
        <Box className="flex justify-between items-stretch md:mt-0 !mt-5">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography
              sx={{
                fontWeight: "bold",
                background: "linear-gradient(90deg, #9183ff, #cf5af0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              56
            </Typography>
            <Typography
              variant="body1"
              className="text-[var(--text-color)] text-sm md:text-base lg:text-lg"
            >
              Providers
            </Typography>
            <ReloadIcon sx={{ color: "var(--icon-color)", rotate: "45deg" }} />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <CropFreeIcon className="text-[--icon-color]" />
            <SettingsIcon className="text-[--icon-color]" />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
});

export default Transaction;
