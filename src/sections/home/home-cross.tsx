// @mui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
// routes
import { paths } from 'src/routes/paths';

export default function Homecross() {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: "url('../assets/images/home/cross.png')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: { md: '34vw' },
        }}
      >
        <Container
          sx={{
            pt: { xs: 6, md: 10 },
            pb: { xs: 10, md: 14 },
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box>
            <Typography
              sx={{ fontSize: { xs: '28px', md: '32px' }, fontWeight: 700 }}
              align="center"
              color="white"
            >
              輕鬆部署於跨平台裝置，開始您的人臉辨識應用
            </Typography>
            <Typography
              sx={{ mt: 2, fontSize: '20px', color: (theme) => theme.palette.grey[300] }}
              align="center"
            >
              透過靈活的API整合，快速部署與無縫的裝置支援讓您的技術擴展至任何裝置。
              <br />
              搭配先進的邊緣運算解決方案，無論公有雲或私有雲，均可根據您的需求靈活調整，確保系統擴展順利無虞。
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Button
                color="primary"
                size="large"
                target="_blank"
                rel="noopener"
                variant="contained"
                sx={{
                  mt: 3,
                  minWidth: '130px',
                  height: '42px',
                  fontSize: '15px',
                  fontWeight: 400,
                }}
                href={paths.pricing}
              >
                立即免費體驗
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box sx={{ pt: { xs: 6, md: 10 }, pb: { xs: 5, md: 14 }, px: { xs: 2, md: 4, lg: '13vw' } }}>
        <Box>
          <Grid
            container
            alignItems="center"
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid md={6}>
              <Box>
                <Typography sx={{ fontSize: { xs: '28px', md: '32px' }, fontWeight: 700 }}>
                  快速部署
                </Typography>
                <Typography
                  sx={{ mt: 2, fontSize: '20px', color: (theme) => theme.palette.grey[400] }}
                >
                  一鍵安裝，快速導入系統，eGroupAI
                  的人臉辨識解決方案讓您在幾分鐘內即可輕鬆啟動，實現快速部署與即時應用。
                </Typography>
              </Box>
            </Grid>
            <Grid md={1} />
            <Grid md={5} sx={{ textAlign: 'center' }}>
              <Box
                component="img"
                src="/assets/images/home/data.gif"
                alt="home-price"
                sx={{ width: '480px' }}
              />
            </Grid>
          </Grid>
          <Grid
            container
            alignItems="center"
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid md={6} display={{ md: 'none' }}>
              <Box>
                <Typography sx={{ fontSize: { xs: '28px', md: '32px' }, fontWeight: 700 }}>
                  支援多種裝置
                </Typography>
                <Typography
                  sx={{ mt: 2, fontSize: '20px', color: (theme) => theme.palette.grey[400] }}
                >
                  eGroupAI 的解決方案透過靈活的 API
                  串接，支援多種裝置，確保技術無縫整合至您的現有系統中，提升效率與便利性。
                </Typography>
              </Box>
            </Grid>
            <Grid md={5} sx={{ textAlign: 'center' }}>
              <Box
                component="img"
                src="/assets/images/home/egroup.gif"
                alt="home-price"
                sx={{ width: '480px' }}
              />
            </Grid>
            <Grid md={1} />
            <Grid md={6} display={{ xs: 'none', md: 'block' }}>
              <Box>
                <Typography sx={{ fontSize: { xs: '28px', md: '32px' }, fontWeight: 700 }}>
                  支援多種裝置
                </Typography>
                <Typography
                  sx={{ mt: 2, fontSize: '20px', color: (theme) => theme.palette.grey[400] }}
                >
                  eGroupAI 的解決方案透過靈活的 API
                  串接，支援多種裝置，確保技術無縫整合至您的現有系統中，提升效率與便利性。
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            alignItems="center"
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid md={6}>
              <Box>
                <Typography sx={{ fontSize: { xs: '28px', md: '32px' }, fontWeight: 700 }}>
                  彈性擴充
                </Typography>
                <Typography
                  sx={{ mt: 2, fontSize: '20px', color: (theme) => theme.palette.grey[400] }}
                >
                  隨著業務需求增長，eGroupAI 的人臉辨識系統可輕鬆擴展。
                  只需幾步，即可無縫擴增辨識架構，實現業務規模的靈活應對。
                </Typography>
              </Box>
            </Grid>
            <Grid md={1} />
            <Grid md={5} sx={{ textAlign: 'center' }}>
              <Box
                component="img"
                src="/assets/images/home/device.gif"
                alt="home-price"
                sx={{ width: '480px' }}
              />
            </Grid>
          </Grid>
          <Grid
            container
            alignItems="center"
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid md={6} display={{ md: 'none' }}>
              <Box>
                <Typography sx={{ fontSize: { xs: '28px', md: '32px' }, fontWeight: 700 }}>
                  Edge Computing
                </Typography>
                <Typography
                  sx={{ mt: 2, fontSize: '20px', color: (theme) => theme.palette.grey[400] }}
                >
                  透過高效率的邊緣運算技術，eGroupAI 提供了一個同時適用於公有雲和私有雲的解決方案。
                  結合著易於擴展的優勢，您可以快速佈建並有效管理您的人臉辨識系統。
                </Typography>
              </Box>
            </Grid>
            <Grid md={5} sx={{ textAlign: 'center' }}>
              <Box
                component="img"
                src="/assets/images/home/edge_computing.gif"
                alt="home-price"
                sx={{ width: '480px' }}
              />
            </Grid>
            <Grid md={1} />
            <Grid md={6} display={{ xs: 'none', md: 'block' }}>
              <Box>
                <Typography sx={{ fontSize: { xs: '28px', md: '32px' }, fontWeight: 700 }}>
                  Edge Computing
                </Typography>
                <Typography
                  sx={{ mt: 2, fontSize: '20px', color: (theme) => theme.palette.grey[400] }}
                >
                  透過高效率的邊緣運算技術，eGroupAI 提供了一個同時適用於公有雲和私有雲的解決方案。
                  結合著易於擴展的優勢，您可以快速佈建並有效管理您的人臉辨識系統。
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
