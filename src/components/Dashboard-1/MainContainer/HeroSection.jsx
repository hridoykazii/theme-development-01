import { useTheme } from "@emotion/react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { memo } from "react";
import BalanceCard from "./BalanceCard";
import AreaChart from "./Chart/AreaChart";
import BarChart from "./Chart/BarChart";
import LineChart from "./Chart/LineChart";

const HeroSection = memo(() => {
  const theme = useTheme();
  return (
    <Grid container spacing={10}>
      <Grid item xs={12} md={12} lg={6}>
        <Box sx={{ px: { xs: 2, md: 0 } }}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6} lg={6}>
              <BalanceCard />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Box className="flex flex-col gap-5">
                <Box
                  className={`flex justify-between items-center h-20 p-3 rounded-lg`}
                  sx={{
                    bgcolor: theme.palette.primary.cardBg,
                    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <Box className="flex flex-col gap-2 justify-center">
                    <Typography
                      variant="p"
                      className="text-[var(--text-color)]"
                    >
                      Deposit
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{ color: theme.palette.text.white }}
                    >
                      1270
                    </Typography>
                  </Box>
                  <AreaChart />
                </Box>
                <Box
                  className="flex justify-between items-center h-20 p-3 rounded-lg mt-1 mb-1"
                  sx={{
                    bgcolor: theme.palette.primary.cardBg,
                    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <Box className="flex flex-col gap-2 justify-center">
                    <Typography
                      variant="p"
                      className="text-[var(--text-color)]"
                    >
                      Withdraw
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{ color: theme.palette.text.white }}
                    >
                      1850
                    </Typography>
                  </Box>
                  <LineChart />
                </Box>
                <Box
                  className="flex justify-between items-center h-20 p-3 rounded-lg"
                  sx={{
                    bgcolor: theme.palette.primary.cardBg,
                    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <Box className="flex flex-col gap-2 justify-center">
                    <Typography
                      variant="p"
                      className="text-[var(--text-color)]"
                    >
                      Commission
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{ color: theme.palette.text.white }}
                    >
                      12.05
                    </Typography>
                  </Box>
                  <Box className="w-32">
                    <BarChart />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      {/* Right side start here */}
      <Grid item xs={12} md={12} lg={6}>
        <Box>
          <Box className="flex justify-between items-center">
            <Typography variant="h6" sx={{ color: theme.palette.text.white }}>
              Best Performing
            </Typography>
            <Button
              variant="contained"
              style={{
                backgroundColor: "var(--btn-bg-color)",
                fontSize: "12px",
                color: "#fff",
              }}
            >
              MORE
            </Button>
          </Box>
          <Box className="flex justify-between items-center mt-7">
            <Box className="flex justify-between items-center gap-2">
              <img src="/assets/images/icon/img-1.png" alt="img" />
              <Box className="flex justify-between items-center gap-2">
                <Box
                  className="w-4 text-center h-[45px] rounded-lg flex justify-center items-center"
                  sx={{
                    bgcolor: theme.palette.primary.cardBg,
                    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <Typography
                    variant="p"
                    sx={{ color: theme.palette.text.white }}
                  >
                    1
                  </Typography>
                </Box>
                <Box className="flex flex-col gap-1">
                  <Typography variant="p" className="text-[var(--text-color)]">
                    Stake Casino
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{ fontSize: "14px", color: theme.palette.text.white }}
                  >
                    DICE
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box className="flex flex-col gap-1">
              <Typography variant="p" className="text-[var(--text-color)]">
                2.7985,82 $
              </Typography>
              <Typography
                variant="p"
                sx={{ fontSize: "14px", color: theme.palette.text.white }}
              >
                90.42%
              </Typography>
            </Box>
          </Box>
          <Box className="flex justify-between items-center mt-7">
            <Box className="flex justify-between items-center gap-2">
              <img src="/assets/images/icon/img-2.png" alt="img" />
              <Box className="flex justify-between items-center gap-2">
                <Box
                  className="w-4 text-center h-[45px] rounded-lg flex justify-center items-center"
                  sx={{
                    bgcolor: theme.palette.primary.cardBg,
                    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <Typography
                    variant="p"
                    sx={{ color: theme.palette.text.white }}
                  >
                    2
                  </Typography>
                </Box>
                <Box className="flex flex-col gap-1">
                  <Typography variant="p" className="text-[var(--text-color)]">
                    Stake Casino
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{ fontSize: "14px", color: theme.palette.text.white }}
                  >
                    DICE
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box className="flex flex-col gap-1">
              <Typography variant="p" className="text-[var(--text-color)]">
                2.7985,82 $
              </Typography>
              <Typography
                variant="p"
                sx={{ fontSize: "14px", color: theme.palette.text.white }}
              >
                90.42%
              </Typography>
            </Box>
          </Box>
          <Box className="flex justify-between items-center mt-7">
            <Box className="flex justify-between items-center gap-2">
              <img src="/assets/images/icon/img-3.png" alt="img" />
              <Box className="flex justify-between items-center gap-2">
                <Box
                  className="w-4 text-center h-[45px] rounded-lg flex justify-center items-center"
                  sx={{
                    bgcolor: theme.palette.primary.cardBg,
                    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <Typography
                    variant="p"
                    sx={{ color: theme.palette.text.white }}
                  >
                    3
                  </Typography>
                </Box>
                <Box className="flex flex-col gap-1">
                  <Typography variant="p" className="text-[var(--text-color)]">
                    Stake Casino
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{ fontSize: "14px", color: theme.palette.text.white }}
                  >
                    DICE
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box className="flex flex-col gap-1">
              <Typography variant="p" className="text-[var(--text-color)]">
                2.7985,82 $
              </Typography>
              <Typography
                variant="p"
                sx={{ fontSize: "14px", color: theme.palette.text.white }}
              >
                90.42%
              </Typography>
            </Box>
          </Box>
          <Box className="flex justify-between items-center mt-7">
            <Box className="flex justify-between items-center gap-2">
              <img src="/assets/images/icon/img-4.png" alt="img" />
              <Box className="flex justify-between items-center gap-2">
                <Box
                  className="w-4 text-center h-[45px] rounded-lg flex justify-center items-center"
                  sx={{
                    bgcolor: theme.palette.primary.cardBg,
                    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <Typography
                    variant="p"
                    sx={{ color: theme.palette.text.white }}
                  >
                    4
                  </Typography>
                </Box>
                <Box className="flex flex-col gap-1">
                  <Typography variant="p" className="text-[var(--text-color)]">
                    Stake Casino
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{ fontSize: "14px", color: theme.palette.text.white }}
                  >
                    DICE
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box className="flex flex-col gap-1">
              <Typography variant="p" className="text-[var(--text-color)]">
                2.7985,82 $
              </Typography>
              <Typography
                variant="p"
                sx={{ fontSize: "14px", color: theme.palette.text.white }}
              >
                90.42%
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
});

export default HeroSection;
