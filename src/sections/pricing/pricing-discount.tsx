'use client';

import { useState } from 'react';
// @mui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

export default function PricingDiscount() {
  const [GO, setGO] = useState<boolean>(false);
  const handleChangeGo = () => {
    if (!GO) {
      setGO(true);
    }
  };
  const handleChangeNGo = () => {
    if (GO) {
      setGO(false);
    }
  };
  return (
    <Container sx={{ mt: 6, mb: 6 }}>
      <Grid container alignItems="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid md={6}>
          <Box>
            <Typography
              sx={{
                fontSize: { xs: '32px', md: '48px' },
                fontWeight: 700,
              }}
            >
              Special Discount!
            </Typography>
            <Typography
              color="primary"
              sx={{ mt: 3, fontSize: { xs: '32px', md: '48px' }, fontWeight: 700 }}
            >
              非營利組織 50% off
            </Typography>
            <Typography
              sx={{
                mt: 5,
                fontSize: '20px',
                fontWeight: 400,
                color: (theme) => theme.palette.grey[400],
              }}
            >
              Send one-off and automated email, push, and in-app messages to people. Create better
              stories.
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" sx={{ mt: 5, mr: 8 }}>
            <FormControlLabel
              control={<Checkbox checked={GO} onChange={handleChangeGo} size="medium" />}
              label="營利組織 (GO)"
              sx={{
                fontSize: '20px',
                color: (theme) => theme.palette.grey[400],
              }}
            />
            <FormControlLabel
              control={<Checkbox checked={!GO} onChange={handleChangeNGo} size="medium" />}
              label="非營利組織 (NGO)"
              sx={{
                fontSize: '20px',
                color: (theme) => theme.palette.grey[400],
              }}
            />
          </Box>
        </Grid>
        <Grid md={6} sx={{ textAlign: 'right' }}>
          <Box
            component="img"
            src="/assets/images/pricing/Moneyverse_Sitting.png"
            alt="home-price"
            sx={{ width: '375px' }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
