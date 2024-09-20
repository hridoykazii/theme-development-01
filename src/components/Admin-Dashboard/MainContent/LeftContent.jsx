import { useTheme } from '@emotion/react';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import BusinessIcon from '@mui/icons-material/Business';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { Box, Button, Grid, SwipeableDrawer, Typography, useMediaQuery } from '@mui/material';
import { Fragment, memo, useState } from 'react';
import AnaliticChart from '../Chart/AnaliticChart';
import EarningChart from '../Chart/EarningChart';
import StatisticsChart from '../Chart/StatisticsChart';
import ImageSlider from '../ImageSlider';
import AdminTab from '../TabContent/AdminTab';
import DateFilter from './DateFilter';
import RightContent from './RightContent';

const LeftContent = memo(() => {
    const theme = useTheme();
    const [state, setState] = useState({
        right: false,
    });
    const isMediumScreen = useMediaQuery("(max-width: 1024px)");
    const isSmallScreen = useMediaQuery("(max-width: 555px)");

    const toggleDrawer = (open) => (event) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
    
        setState({ ...state, right: open });
    };
    return (
        <Fragment>
            <Box sx={{paddingTop: '20px', paddingLeft: '30px'}}>
                <Box className="flex justify-between items-center">
                    <Box className="w-[60%]">
                        <AdminTab/>
                    </Box>
                    <Box className="flex justify-between items-center">
                        <Button variant="text" className='!text-[var(--active-color)] !capitalize !text-[18px]' sx={{display: isMediumScreen ? 'none' : 'block'}}>Manage</Button>
                        {isMediumScreen && 
                        <Box>
                            <MenuOpenIcon sx={{ color: "var(--icon-color)" }}  onClick={toggleDrawer(true)}/>
                        </Box>
                        }
                    </Box>
                </Box>
                <Box className='mt-[30px]'>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} md={6} lg={3.5} order={{ md: 1, lg: 1 }}>
                            <Box>
                                <Box className='flex justify-between items-center gap-3'>
                                    <Box sx={{bgcolor: 'var(--primary-color)'}} className='p-5 rounded-[15px] w-full'>
                                        <BusinessIcon className='!text-4xl  mb-0 md:mb-2 lg:mb-3'/>
                                        <Typography className=' mb-0 md:mb-2 lg:mb-3' sx={{fontSize: isSmallScreen ? '36px' : '42px',}}>$9</Typography>
                                        <Typography className='!text-[15px] !mb-0 md:mb-1'>Yearly</Typography>
                                        <Typography>Turnover</Typography>
                                    </Box>
                                    <Box sx={{bgcolor: 'var(--secondary-color)'}} className='p-5 rounded-[15px] w-full'>
                                        <BusinessIcon className='!text-4xl mb-0 md:mb-2 lg:mb-3'/>
                                        <Typography className=' mb-0 md:mb-2 lg:mb-3' sx={{fontSize: isSmallScreen ? '36px' : '42px',}}>$18</Typography>
                                        <Typography className='!text-[15px] !mb-0 md:mb-1'>Yearly</Typography>
                                        <Typography>Turnover</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{bgcolor: theme.palette.primary.cardBg,boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",}} className='mt-5 p-5 rounded-xl'>
                                    <Box className='flex justify-between'>
                                        <Box>
                                            <Typography sx={{color: theme.palette.text.default}} className='!text-2xl'>London</Typography>
                                            <Typography sx={{fontSize: isSmallScreen ? '24px' : '24px', color: theme.palette.text.white}} className='!mt-1'>United Kingdom</Typography>
                                        </Box>
                                        <Box className='w-[35px] h-[35px] text-center bg-[var(--primary-color)] rounded-[30px]'>
                                            <ArrowOutwardIcon className='pt-1 pl-1'/>
                                        </Box>
                                    </Box>
                                    <Box className='mt-5 flex justify-between'>
                                        <img src="/assets/admin/image/img-1.png" alt="img" width={50} className='rounded-lg' />
                                        <img src="/assets/admin/image/img-2.png" alt="img" width={50} className='rounded-lg' />
                                        <img src="/assets/admin/image/img-3.png" alt="img" width={50} className='rounded-lg' />
                                        <img src="/assets/admin/image/img-4.png" alt="img" width={50} className='rounded-lg' />
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={5} order={{ md: 3, lg: 2 }}>
                            <Box sx={{bgcolor: theme.palette.primary.cardBg,boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)"}} className='p-5 rounded-xl'>
                                <Box className='flex justify-between'>
                                    <Box>
                                        <Typography sx={{fontSize: '24px', color: theme.palette.text.default}}>Earning</Typography>
                                        <Typography sx={{fontSize: isSmallScreen ? '34px' : '34px', color: theme.palette.text.white, letterSpacing: '2px'}} className='!font-bold !mt-2'>$9249.81</Typography>
                                    </Box>
                                    <img src="/assets/admin/image/master-card.png" alt="img" width={70} height={50} />
                                </Box>
                                <Box>
                                    <EarningChart/>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={3.5} order={{ md: 2, lg: 3 }}>
                            <Box className="h-[380px] rounded-xl p-3" sx={{bgcolor: theme.palette.primary.cardBg,boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)"}}>
                                <ImageSlider/>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                {/* Analitic dashboard start here */}
                <Box className="mt-[30px]">
                    <Grid container spacing={3}> 
                        <Grid item xs={12} sm={12} md={6} lg={8}>
                            <Box sx={{bgcolor: theme.palette.primary.cardBg,boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)"}} className='p-5 rounded-xl'>
                                <Box className='flex justify-between items-center mb-2'>
                                    <Box>
                                        <Typography sx={{fontSize: isSmallScreen ? '24px' : '32px', color: theme.palette.text.white}} className='!font-bold'>Analytics</Typography>
                                    </Box>
                                    <DateFilter/>
                                </Box>
                                <Box>
                                    <AnaliticChart/>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            <Box sx={{bgcolor: theme.palette.primary.cardBg,boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",}} className='p-5 rounded-xl'>
                                <Box className='flex justify-between'>
                                    <Box>
                                        <Typography sx={{fontSize: isSmallScreen ? '24px' : '32px', color: theme.palette.text.white}} className='!mt-1'>Statistics</Typography>
                                    </Box>
                                    <Box className='w-[35px] h-[35px] text-center bg-[var(--primary-color)] rounded-[30px]'>
                                        <ArrowOutwardIcon className='pt-1 pl-1'/>
                                    </Box>
                                </Box>
                                <Box>
                                    <StatisticsChart/>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            <SwipeableDrawer
                anchor="right"
                open={state.right}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                <Box sx={{bgcolor: theme.palette.primary.cardBg,height: '100%',zIndex: 1111}}>
                    <RightContent/>
                </Box>
            </SwipeableDrawer>
        </Fragment>
    );
});

export default LeftContent;