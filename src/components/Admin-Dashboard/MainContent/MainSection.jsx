import { useTheme } from '@emotion/react';
import { Box, Grid, useMediaQuery } from '@mui/material';
import { memo } from 'react';
import LeftContent from './LeftContent';
import RightContent from './RightContent';

const MainSection = memo(() => {
    const theme = useTheme();
    const isMediumScreen = useMediaQuery("(max-width: 1024px)");
    return (
        <Box>
            <Grid container spacing={5}>
                <Grid item xs={isMediumScreen ? 11.9 : 9} sx={{paddingRight: isMediumScreen ? '20px' : '0px'}}>
                    <LeftContent/>
                </Grid>
                {/* Right side area start here */}
                <Grid item xs={3}>
                    <Box sx={{bgcolor: theme.palette.primary.cardBg, minHeight: '100vh',display: isMediumScreen? 'none': 'block', zIndex: 1111}}>
                        <RightContent/>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
});

export default MainSection;