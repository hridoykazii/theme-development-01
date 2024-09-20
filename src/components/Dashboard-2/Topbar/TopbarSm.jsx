import WalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from '@mui/icons-material/Person';
import { Box, IconButton, Typography } from "@mui/material";
import { memo } from "react";
import { useDispatch } from 'react-redux';
import { handleDrawer } from 'redux/features/drawer/drawerSlice';

const TopbarSm = memo(() => {
    const dispatch = useDispatch();
  
    const handleDrawerToggle = () => {
      dispatch(handleDrawer());
    };
  return (
    <Box className='flex justify-between items-center'>
        <Box className='flex justify-start items-center gap-2'>
            <IconButton
                onClick={handleDrawerToggle}
            sx={{
                width: 25,
                height: 25,
                borderRadius: 'none',
                color: "var(--icon-color)",
            }}
            >
               <MenuIcon />
            </IconButton>
            <img src="/assets/images/logo/logo.png" alt="logo" width={'170px'} />
        </Box>
        <Box className="flex items-center justify-end gap-5">
            <Box className='flex items-center gap-2'>
                <Typography className='text-[var(--text-color)]'>8963.12</Typography>
                <WalletIcon className='text-[var(--icon-color)]'/>
            </Box>
            <PersonIcon className='text-[var(--icon-color)]'/>
        </Box>
    </Box>
  );
});

export default TopbarSm;
