// @mui
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
// routes
import { paths } from 'src/routes/paths';

import Iconify from 'src/components/iconify';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// ----------------------------------------------------------------------

export default function HomeTrial() {
  const mdUp = useResponsive('up', 'md');
  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundImage: 'url(/assets/images/home/bgcolor.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% auto',
      }}
    >
      <Grid container alignItems="center" columnSpacing={{ md: 10 }} sx={{ px: 5, py: 7 }}>
        {mdUp && (
          <Grid md={5}>
            <Box
              component="img"
              src="/assets/images/home/phone.png"
              alt="home-phone"
              sx={{ width: '100%' }}
            />
          </Grid>
        )}
        <Grid xs={12} md={7}>
          <Box>
            <Typography color="primary" sx={{ mt: 2, fontSize: '16px' }}>
              SEAMLESS INTEGRATION
            </Typography>
            <Typography variant="h3" sx={{ mt: 3 }}>
              打造公司與客戶緊密聯繫的橋樑
            </Typography>
            <Typography sx={{ mt: 5, fontSize: '20px', color: (theme) => theme.palette.grey[400] }}>
              Infocenter是全球最受信任的客戶關係管理（CRM）平台。在我們的協助下，您的行銷、銷售、商務、服務與IT團隊在任何地方皆能整合運作，讓您的客戶隨時隨地都能享受到滿意的服務。
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Grid
                container
                alignItems="center"
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid xs={12} sm={6}>
                  <Stack flexDirection="row" alignItems="center" gap={2}>
                    <Box
                      component="img"
                      src="/assets/icons/home/check.svg"
                      alt="test"
                      sx={{ width: 24, height: 24 }}
                    />
                    <Typography
                      sx={{ fontSize: '16px', color: (theme) => theme.palette.grey[700] }}
                    >
                      Lifetime Updates & Introduction and Working
                    </Typography>
                  </Stack>
                </Grid>
                <Grid xs={12} sm={6}>
                  <Stack flexDirection="row" alignItems="center" gap={2}>
                    <Box
                      component="img"
                      src="/assets/icons/home/check.svg"
                      alt="test"
                      sx={{ width: 24, height: 24 }}
                    />
                    <Typography
                      sx={{ fontSize: '16px', color: (theme) => theme.palette.grey[700] }}
                    >
                      Tech support & Mutual Funds
                    </Typography>
                  </Stack>
                </Grid>
                <Grid xs={12} sm={6}>
                  <Stack flexDirection="row" alignItems="center" gap={2}>
                    <Box
                      component="img"
                      src="/assets/icons/home/check.svg"
                      alt="test"
                      sx={{ width: 24, height: 24 }}
                    />
                    <Typography
                      sx={{ fontSize: '16px', color: (theme) => theme.palette.grey[700] }}
                    >
                      Tons of assets & Lifetime Updates
                    </Typography>
                  </Stack>
                </Grid>
                <Grid xs={12} sm={6}>
                  <Stack flexDirection="row" alignItems="center" gap={2}>
                    <Box
                      component="img"
                      src="/assets/icons/home/check.svg"
                      alt="test"
                      sx={{ width: 24, height: 24 }}
                    />
                    <Typography
                      sx={{ fontSize: '16px', color: (theme) => theme.palette.grey[700] }}
                    >
                      Integration ready & Tech support
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
            <Button
              size="large"
              target="_blank"
              rel="noopener"
              variant="contained"
              color="primary"
              sx={{
                mt: 4,
                minWidth: '200px',
                fontWeight: 'light',
              }}
              href={paths.pricing}
              endIcon={
                <Iconify
                  icon="heroicons:arrow-long-right-solid"
                  width={24}
                  sx={{ marginLeft: '20px' }}
                />
              }
            >
              Free trial
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ textAlign: 'center', mt: 8 }}>
        <Typography
          component="div"
          variant="overline"
          color="secondary"
          sx={{ fontSize: '16px', fontWeight: 400, marginBottom: '20px' }}
        >
          NUMBERS
        </Typography>
        <Typography variant="h3">我們如何幫助您發展業務？</Typography>
      </Box>
      <Box
        gap={{ md: 3, lg: 5 }}
        display="grid"
        alignItems="center"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          md: 'repeat(4, 1fr)',
        }}
        sx={{
          mt: 6,
        }}
      >
        <Card
          sx={{
            p: (theme) => theme.spacing(3),
            borderRadius: '8px',
            border: '1px solid #0000001A',
            mb: 4,
          }}
        >
          <Box
            component="img"
            src="/assets/icons/home/icon_a.svg"
            alt="test"
            sx={{ width: 50, height: 50, mt: 1 }}
          />
          <Typography variant="h3" color="primary" sx={{ mt: 2, mb: 0 }}>
            節省 20 HR
          </Typography>
          <Typography sx={{ mt: 2, mb: 0, fontSize: '20px' }}>更快速銷售</Typography>
          <Typography
            sx={{ mt: 2, mb: 0, fontSize: '16px', color: (theme) => theme.palette.grey[400] }}
          >
            每週節省20小時
          </Typography>
        </Card>
        <Card
          sx={{
            p: (theme) => theme.spacing(3),
            borderRadius: '8px',
            border: '1px solid #0000001A',
            mb: 4,
          }}
        >
          <Box
            component="img"
            src="/assets/icons/home/icon_b.svg"
            alt="test"
            sx={{ width: 50, height: 50, mt: 1 }}
          />
          <Typography variant="h3" color="primary" sx={{ mt: 2, mb: 0 }}>
            生產力 29% +
          </Typography>
          <Typography sx={{ mt: 2, mb: 0, fontSize: '20px' }}>達成更多交易</Typography>
          <Typography
            sx={{ mt: 2, mb: 0, fontSize: '16px', color: (theme) => theme.palette.grey[400] }}
          >
            銷售增產力增加29%
          </Typography>
        </Card>
        <Card
          sx={{
            p: (theme) => theme.spacing(3),
            borderRadius: '8px',
            border: '1px solid #0000001A',
            mb: 4,
          }}
        >
          <Box
            component="img"
            src="/assets/icons/home/icon_c.svg"
            alt="test"
            sx={{ width: 50, height: 50, mt: 1 }}
          />
          <Typography variant="h3" color="primary" sx={{ mt: 2, mb: 0 }}>
            費用 27% -
          </Typography>
          <Typography sx={{ mt: 2, mb: 0, fontSize: '20px' }}>調整服務規模</Typography>
          <Typography
            sx={{ mt: 2, mb: 0, fontSize: '16px', color: (theme) => theme.palette.grey[400] }}
          >
            支援費用減少27%
          </Typography>
        </Card>
        <Card
          sx={{
            p: (theme) => theme.spacing(3),
            borderRadius: '8px',
            border: '1px solid #0000001A',
            mb: 4,
          }}
        >
          <Box
            component="img"
            src="/assets/icons/home/icon_d.svg"
            alt="test"
            sx={{ width: 50, height: 50, mt: 1 }}
          />
          <Typography variant="h3" color="primary" sx={{ mt: 2, mb: 0 }}>
            成本 27% -
          </Typography>
          <Typography sx={{ mt: 2, mb: 0, fontSize: '20px' }}>建立建立戶關係</Typography>
          <Typography
            sx={{ mt: 2, mb: 0, fontSize: '16px', color: (theme) => theme.palette.grey[400] }}
          >
            客戶獲取減少27%
          </Typography>
        </Card>
      </Box>
    </Container>
  );
}
