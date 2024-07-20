// @mui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import GreenCheckIcon from 'public/assets/icons/navbar/Green_Check.svg';

export default function Homeesg() {
  return (
    <Container sx={{ mt: { xs: 6, md: '166px' }, mb: { xs: 5, md: '160px' } }}>
      <Box sx={{ pb: '167px' }}>
        <Grid container alignItems="center">
          <Grid md={7.5} pr={0}>
            <Box>
              <Typography sx={{ fontSize: '32px', fontWeight: 700 }}>
                全球唯一純軟體通過 ISO 30701-3 活體防偽認證
              </Typography>
              <Typography
                sx={{
                  mt: 3,
                  fontSize: '20px',
                  fontWeight: 400,
                  color: (theme) => theme.palette.grey[400],
                }}
              >
                有效防禦冒用攻擊，不管是 2D 照片、3D 面具及螢幕裝置，皆能輕易抵擋
              </Typography>
            </Box>
          </Grid>
          <Grid md={4.5} px={0} sx={{ textAlign: 'center' }}>
            <Box component="img" src="/assets/icons/home/30701-3 2.jpg" alt="home-price" />
          </Grid>
        </Grid>
      </Box>
      <Grid container alignItems="center">
        <Grid md={5.7} pl={0} sx={{ textAlign: 'center' }}>
          <Box
            component="img"
            src="/assets/images/home/esg.png"
            alt="home-price"
            sx={{ maxwidth: '545px' }}
          />
        </Grid>
        <Grid md={6.3}>
          <Box sx={{ display: 'flex', justifyContent: 'end' }}>
            <Box sx={{ width: 'fit-content' }}>
              <Box>
                <Typography sx={{ fontSize: '32px', fontWeight: 700 }}>
                  符合 ESG 節能減碳標準，開創永續未來
                </Typography>
                <Typography
                  sx={{
                    mt: 3,
                    fontSize: '20px',
                    fontWeight: 400,
                    color: (theme) => theme.palette.grey[400],
                  }}
                >
                  讓人工智慧邁向 ESG 新時代
                </Typography>
              </Box>
              <Box sx={{ mt: '64px', display: 'flex', gap: 2, alignItems: 'center' }}>
                <GreenCheckIcon />
                <Typography sx={{ fontSize: '20px', fontWeight: 400 }}>
                  低功耗設計，省電率高達 70 %
                </Typography>
              </Box>
              <Box sx={{ mt: '10px', display: 'flex', gap: '16px', alignItems: 'center' }}>
                <GreenCheckIcon />
                <Typography sx={{ fontSize: '20px', fontWeight: 400 }}>
                  僅需 CPU 即可運作，免去 GPU 維護的顧慮
                </Typography>
              </Box>
              <Box sx={{ mt: '10px', display: 'flex', gap: '16px', alignItems: 'center' }}>
                <GreenCheckIcon />
                <Typography sx={{ fontSize: '20px', fontWeight: 400 }}>支援弱電裝置</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
