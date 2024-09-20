import { useTheme } from '@emotion/react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import BusinessIcon from '@mui/icons-material/Business';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import { memo, useState } from 'react';

const RightContent = memo(() => {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);
    const isSmallScreen = useMediaQuery("(max-width: 555px)");

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
  
    return (
        <Box>
            <Box className='flex justify-between items-center p-5 pb-7' sx={{borderBottom: `1px solid ${theme.palette.primary.border}`}}>
                <Box className='flex justify-start items-center gap-2'>
                    <NotificationsIcon sx={{color: 'var(--icon-color)'}}/>
                    <Box>
                        <Button 
                            aria-describedby={id}
                            variant="contained"
                            onClick={handleClick}
                            sx={{
                                backgroundColor: theme.palette.primary.cardBg,
                                color: theme.palette.text.white,
                                boxShadow: 'none',
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                }
                            }}
                        >
                            Eng 
                        </Button>
                        {/* <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                        >
                            <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                        </Popover> */}
                    </Box>
                </Box>
                <Box className='flex justify-end items-center'>
                    <Box>
                        <Typography className='!md:text-[18px]' sx={{color: theme.palette.text.white}}>Sijan Mohanto</Typography>
                        <Typography className='!text-end !md:text-[14px]' sx={{color: theme.palette.text.default}}>Super admin</Typography>
                    </Box>
                    <img src="/assets/images/icon/man.png" alt="user" width='50' style={{marginLeft: 7}}/>
                </Box>
            </Box>
            <Box className='text-center py-7'>
                <Typography className='!font-bold !mb-1 !md:mb-3' sx={{color: theme.palette.text.white,fontSize: isSmallScreen ? '24px' : '28px'}}>Super Admin Access</Typography>
                <Box className='flex justify-center items-center gap-3'>
                    <Typography sx={{color: theme.palette.text.default}}>View Analytics</Typography>
                    <Box className='w-[35px] h-[35px] text-center bg-[var(--primary-color)] rounded-[30px]'>
                        <ArrowOutwardIcon className='pt-1 pl-1'/>
                    </Box>
                </Box>
            </Box>

            <Box className='flex justify-between items-center mx-7 mb-5 p-5 rounded-lg' sx={{bgcolor: theme.palette.primary.cardBg,boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)"}}>
                <Box className='flex justify-start items-center gap-3'>
                    <Box className='w-[40px] h-[40px] bg-[var(--primary-color)] rounded-md text-center'>
                        <BusinessIcon className='!text-4xl mb-3 !text-[28px] mt-1'/>
                    </Box>
                    <Box>
                        <Typography sx={{fontSize: '14px', color: theme.palette.text.default}}>Open Projects</Typography>
                        <Typography sx={{color: theme.palette.text.white, fontSize: isSmallScreen ? '18px' : '24px'}}>829</Typography>
                    </Box>
                </Box>
                <Box className='w-[30px] h-[30px] rounded-[30px] text-center cursor-pointer' sx={{bgcolor: theme.palette.primary.active}}>
                    <ArrowForwardIosIcon className='!text-4xl mb-3 !text-[18px] mt-[6px]'/>
                </Box>
            </Box>
            <Box className='flex justify-between items-center mx-7 mb-5 p-5 rounded-lg' sx={{bgcolor: theme.palette.primary.cardBg,boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)"}}>
                <Box className='flex justify-start items-center gap-3'>
                    <Box className='w-[40px] h-[40px] bg-[var(--primary-color)] rounded-md text-center'>
                        <BusinessIcon className='!text-4xl mb-3 !text-[28px] mt-1'/>
                    </Box>
                    <Box>
                        <Typography sx={{fontSize: '14px', color: theme.palette.text.default}}>Successfully Completed</Typography>
                        <Typography sx={{color: theme.palette.text.white, fontSize: isSmallScreen ? '18px' : '24px'}}>3460</Typography>
                    </Box>
                </Box>
                <Box className='w-[30px] h-[30px] rounded-[30px] text-center cursor-pointer' sx={{bgcolor: theme.palette.primary.active}}>
                    <ArrowForwardIosIcon className='!text-4xl mb-3 !text-[18px] mt-[6px]'/>
                </Box>
            </Box>
            <Box className='flex justify-between items-center mx-7 mb-[100px] p-5 rounded-lg' sx={{bgcolor: theme.palette.primary.cardBg,boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)"}}>
                <Box className='flex justify-start items-center gap-3'>
                    <Box className='w-[40px] h-[40px] bg-[var(--primary-color)] rounded-md text-center'>
                        <BusinessIcon className='!text-4xl mb-3 !text-[28px] mt-1'/>
                    </Box>
                    <Box>
                        <Typography sx={{fontSize: '14px', color: theme.palette.text.default}}>Earned This Month</Typography>
                        <Typography sx={{color: theme.palette.text.white, fontSize: isSmallScreen ? '18px' : '24px'}}>$89,736</Typography>
                    </Box>
                </Box>
                <Box className='w-[30px] h-[30px] rounded-[30px] text-center cursor-pointer' sx={{bgcolor: theme.palette.primary.active}}>
                    <ArrowForwardIosIcon className='!text-4xl mb-3 !text-[18px] mt-[6px]'/>
                </Box>
            </Box>

            <Box className='flex !flex-col justify-between items-center mx-7 mb-5 p-5 rounded-lg text-center relative h-[200px]' sx={{bgcolor: theme.palette.primary.cardBg,boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)"}}>
                <Box className='absolute top-[-70px]'>
                    <img src="/assets/admin/image/demo.png" alt="" width={200}/>
                </Box>
                <Box className='flex !flex-col !justify-center !items-center w-full mt-[90px]'>
                    <Typography sx={{color: theme.palette.text.default}}>Buy Pro Account to explore<br/> Premium Features</Typography>
                    <Button
                        variant="contained"
                        className="!mt-5 h-[30px] !rounded-[30px] !px-5"
                        sx={{
                            background: "linear-gradient(45deg, #886EEC 30%, #6553D8 90%)",
                            boxShadow: "0 3px 5px 2px rgba(101, 83, 216, 0.3)",
                            color: "white",
                            fontWeight: "bold",
                            textTransform: 'capitalize'
                        }}
                    >
                        Purchase Now
                    </Button>
                </Box>
            </Box>
        </Box>
    );
});

export default RightContent;