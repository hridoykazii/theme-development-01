import { Box, Card, CardContent, Typography } from "@mui/material";
import { memo } from "react";
import BalanceChart from "./Chart/BalanceChart";

const BalanceCard = memo(() => {
  return (
    <Card
      sx={{
        height: '370px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '30px',
        background: `linear-gradient(to bottom, rgba(90,74,210,1) 0%,rgba(146,118,241,1) 0%,rgba(146,118,241,1) 8%,rgba(90,74,210,1) 62%)`
      }}
    >
      <CardContent>
        <Box>
          <Box>
            <BalanceChart/>
            <Typography variant="h3" className="text-center !font-bold !text-3xl md:text-4xl lg:text-5xl" sx={{color: '#F0BAFF', letterSpacing: '3px'}}>620.58K</Typography>
            <Typography className="text-center" sx={{color: '#fff'}}>Current Balance</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
});

export default BalanceCard;
