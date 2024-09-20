import { useTheme } from '@emotion/react';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LayersIcon from '@mui/icons-material/Layers';
import SettingsIcon from '@mui/icons-material/Settings';
import SupportIcon from '@mui/icons-material/Support';
import { Box, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';

export default function Sidebar() {
    const theme = useTheme();
    const navigate = useNavigate()
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, height: '65vh' ,bgcolor: theme.palette.primary.main, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginBottom: '20px' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
    <Box className="text-white">
        <ListItemButton disableRipple>
            <ListItemIcon>
                <DashboardIcon sx={{color: 'var(--active-color)'}}/>
            </ListItemIcon>
            <ListItemText primary="Dashboard" sx={{color: 'var(--active-color)'}}/>
        </ListItemButton>
        <ListItemButton disableRipple onClick={() => navigate('/transaction')}>
            <ListItemIcon>
                <AttachMoneyIcon sx={{color: 'var(--icon-color)'}} />
            </ListItemIcon>
            <ListItemText primary="Finance" className='text-[var(--text-color)]' />
        </ListItemButton>
        <ListItemButton disableRipple  onClick={() => navigate('/admin')}>
            <ListItemIcon>
                <LayersIcon sx={{color: 'var(--icon-color)'}} />
            </ListItemIcon>
            <ListItemText primary="Reports" className='text-[var(--text-color)]' />
        </ListItemButton>
        <ListItemButton disableRipple>
            <ListItemIcon>
                <SupportIcon sx={{color: 'var(--icon-color)'}} />
            </ListItemIcon>
            <ListItemText primary="Support" className='text-[var(--text-color)]' />
        </ListItemButton>
        <ListItemButton disableRipple>
            <ListItemIcon>
                <SettingsIcon sx={{color: 'var(--icon-color)'}} />
            </ListItemIcon>
            <ListItemText primary="Settings" className='text-[var(--text-color)]'/>
        </ListItemButton>
    </Box>
    <Box sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
        <img src="/assets/images/icon/man.png" alt="user" width='50' style={{marginLeft: 7}}/>
        <Box sx={{marginLeft: '20px'}} className="text-[var(--text-color)]">
          <Typography className='text-[var(--text-color)]'>Demo user</Typography>
          <Typography>demo_user@fxcrm.net</Typography>
        </Box>
    </Box>
    </List>
  );
}
