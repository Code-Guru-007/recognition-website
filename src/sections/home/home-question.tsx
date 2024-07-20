// @mui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
// routes
import { paths } from 'src/routes/paths';

export default function HomeQuestion() {
  return (
    <Container sx={{ mt: { xs: 6, md: 10 }, mb: { xs: 5, md: 14 } }}>
      <Grid container alignItems="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid md={6} sx={{ textAlign: 'center' }}>
          <Box
            component="img"
            src="/assets/images/home/up.png"
            alt="home-price"
            sx={{ width: '480px' }}
          />
        </Grid>
        <Grid md={6}>
          <Box>
            <Typography variant="h3">
              有任何疑問嗎？
              <br />
              讓我們指引您走在正確的道路上
            </Typography>
            <Typography sx={{ mt: 3, fontSize: '20px', color: (theme) => theme.palette.grey[400] }}>
              關於 Infocenter
              產品、定價、實作，或其他任何方面的問題均歡迎提問。我們訓練有素的銷售代表隨時在此待命，為您提供協助。
            </Typography>
          </Box>
          <Button
            color="primary"
            size="large"
            target="_blank"
            rel="noopener"
            variant="contained"
            sx={{
              mt: 3,
              minWidth: '160px',
              fontSize: '15px',
              fontWeight: 400,
            }}
            href={paths.pricing}
          >
            Free trial
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
