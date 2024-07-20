// @mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

export default function PricingThird() {
  return (
    <Container sx={{ mt: 10, mb: 6 }}>
      <Grid container alignItems="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid md={6} sx={{ textAlign: 'center' }}>
          <Box
            component="img"
            src="/assets/images/pricing/Frame1.png"
            alt="home-price"
            sx={{ width: '480px' }}
          />
        </Grid>
        <Grid md={6}>
          <Box>
            <Typography
              sx={{
                fontSize: { xs: '32px', md: '48px' },
                fontWeight: 700,
              }}
            >
              Step 3. 選擇付費方案
            </Typography>
            <Typography
              color="primary"
              sx={{ mt: 3, fontSize: { xs: '32px', md: '48px' }, fontWeight: 700 }}
            >
              享有折扣優惠!
            </Typography>
            <Typography
              sx={{
                mt: 5,
                fontSize: '20px',
                fontWeight: 400,
                color: (theme) => theme.palette.grey[400],
              }}
            >
              You have a business to run. Stop worring about cross-browser bugs, designing new
              pages, keeping your components up to date. Let us do that for you.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box
        gap={{ md: 3, lg: 5 }}
        display="grid"
        alignItems="center"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
        sx={{
          mt: 8,
        }}
      >
        <Card
          sx={{
            p: (theme) => theme.spacing(3),
            borderRadius: '8px',
            border: '1px solid #BDBDBD',
            mb: 4,
            minHeight: '550px',
          }}
        >
          <Checkbox size="medium" />
          <Box display="flex" justifyContent="space-between" sx={{ mt: 3, ml: 1 }}>
            <Typography sx={{ fontSize: '32px', fontFamily: 700 }}>月繳</Typography>
            <Typography color="primary" sx={{ fontSize: '32px', fontFamily: 700 }}>
              original price
            </Typography>
          </Box>

          <Typography
            sx={{ mt: 3, ml: 1, fontSize: '16px', color: (theme) => theme.palette.grey[400] }}
          >
            Is perfect for individual developers
          </Typography>
          <Box sx={{ mt: 5, ml: 1 }}>
            <Stack flexDirection="row" sx={{ mb: 2 }}>
              <Box
                component="img"
                src="/assets/icons/pricing/check.svg"
                alt="test"
                sx={{ width: 24, height: 24 }}
              />
              <Typography sx={{ fontSize: '16px', ml: 2 }}>1 User</Typography>
            </Stack>
            <Stack flexDirection="row" sx={{ mb: 2 }}>
              <Box
                component="img"
                src="/assets/icons/pricing/check.svg"
                alt="test"
                sx={{ width: 24, height: 24 }}
              />
              <Typography sx={{ fontSize: '16px', ml: 2 }}>1 App</Typography>
            </Stack>
            <Stack flexDirection="row" sx={{ mb: 2 }}>
              <Box
                component="img"
                src="/assets/icons/pricing/check.svg"
                alt="test"
                sx={{ width: 24, height: 24 }}
              />
              <Typography sx={{ fontSize: '16px', ml: 2 }}>Integrations</Typography>
            </Stack>
          </Box>
        </Card>
        <Card
          sx={{
            p: (theme) => theme.spacing(3),
            borderRadius: '8px',
            border: '1px solid #BDBDBD',
            mb: 4,
            minHeight: '550px',
          }}
        >
          <Checkbox size="medium" />
          <Box display="flex" justifyContent="space-between" sx={{ mt: 3, ml: 1 }}>
            <Typography sx={{ fontSize: '32px', fontFamily: 700 }}>1年繳</Typography>
            <Typography color="primary" sx={{ fontSize: '32px', fontFamily: 700 }}>
              20% off
            </Typography>
          </Box>

          <Typography
            sx={{ mt: 3, ml: 1, fontSize: '16px', color: (theme) => theme.palette.grey[400] }}
          >
            Is perfect for individual developers
          </Typography>
          <Box sx={{ mt: 5, ml: 1 }}>
            <Stack flexDirection="row" sx={{ mb: 2 }}>
              <Box
                component="img"
                src="/assets/icons/pricing/check.svg"
                alt="test"
                sx={{ width: 24, height: 24 }}
              />
              <Typography sx={{ fontSize: '16px', ml: 2 }}>1 User</Typography>
            </Stack>
            <Stack flexDirection="row" sx={{ mb: 2 }}>
              <Box
                component="img"
                src="/assets/icons/pricing/check.svg"
                alt="test"
                sx={{ width: 24, height: 24 }}
              />
              <Typography sx={{ fontSize: '16px', ml: 2 }}>1 App</Typography>
            </Stack>
            <Stack flexDirection="row" sx={{ mb: 2 }}>
              <Box
                component="img"
                src="/assets/icons/pricing/check.svg"
                alt="test"
                sx={{ width: 24, height: 24 }}
              />
              <Typography sx={{ fontSize: '16px', ml: 2 }}>Integrations</Typography>
            </Stack>
          </Box>
        </Card>
        <Card
          sx={{
            p: (theme) => theme.spacing(3),
            borderRadius: '8px',
            border: '1px solid #BDBDBD',
            mb: 4,
            minHeight: '550px',
          }}
        >
          <Checkbox size="medium" />
          <Box display="flex" justifyContent="space-between" sx={{ mt: 3, ml: 1 }}>
            <Typography sx={{ fontSize: '32px', fontFamily: 700 }}>3年繳</Typography>
            <Typography color="primary" sx={{ fontSize: '32px', fontFamily: 700 }}>
              40% off
            </Typography>
          </Box>

          <Typography
            sx={{ mt: 3, ml: 1, fontSize: '16px', color: (theme) => theme.palette.grey[400] }}
          >
            Is perfect for individual developers
          </Typography>
          <Box sx={{ mt: 5, ml: 1 }}>
            <Stack flexDirection="row" sx={{ mb: 2 }}>
              <Box
                component="img"
                src="/assets/icons/pricing/check.svg"
                alt="test"
                sx={{ width: 24, height: 24 }}
              />
              <Typography sx={{ fontSize: '16px', ml: 2 }}>1 User</Typography>
            </Stack>
            <Stack flexDirection="row" sx={{ mb: 2 }}>
              <Box
                component="img"
                src="/assets/icons/pricing/check.svg"
                alt="test"
                sx={{ width: 24, height: 24 }}
              />
              <Typography sx={{ fontSize: '16px', ml: 2 }}>1 App</Typography>
            </Stack>
            <Stack flexDirection="row" sx={{ mb: 2 }}>
              <Box
                component="img"
                src="/assets/icons/pricing/check.svg"
                alt="test"
                sx={{ width: 24, height: 24 }}
              />
              <Typography sx={{ fontSize: '16px', ml: 2 }}>Integrations</Typography>
            </Stack>
          </Box>
        </Card>
      </Box>
    </Container>
  );
}
