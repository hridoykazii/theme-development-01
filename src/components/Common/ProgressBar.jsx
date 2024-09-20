import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/system';

const GradientLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${LinearProgress.colorPrimary}`]: {
    backgroundColor: '#D6D6D6',
  },
  [`& .${LinearProgress.bar}`]: {
    borderRadius: 5,
    background: 'linear-gradient(to right, #A4E4FF, #D29FF9)',
  },
}));

const ProgressBar = ({ value }) => {
  return (
    <Box sx={{ width: '100%' }}>
      <GradientLinearProgress variant="determinate" value={value} sx={{background: 'linear-gradient(to right, #A4E4FF, #D29FF9)',}}/>
    </Box>
  );
};

export default ProgressBar;
