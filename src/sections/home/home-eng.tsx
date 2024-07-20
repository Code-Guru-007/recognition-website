import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// routes
import { paths } from 'src/routes/paths';

export default function HomeEng() {
  return (
    <Box
      sx={{
        backgroundImage: "url('../assets/images/home/face_reco_eng.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: { md: '37vw' },
      }}
    >
      <Container sx={{ height: '100%', py: { xs: 10, md: 0 } }}>
        <Box
          gap={{ xs: 3, lg: 10 }}
          display="flex"
          alignItems="center"
          maxWidth="576px"
          height="100%"
        >
          <Box display="flex" alignItems="center" height="100%">
            <Box>
              <Typography
                sx={{ fontSize: { xs: '28px', md: '32px' }, fontWeight: 700 }}
                color="primary"
              >
                探索智慧辨識，免費開啟您的專屬體驗
              </Typography>
              <Typography
                sx={{
                  mt: 3,
                  fontSize: { xs: '16px', md: '20px' },
                  color: (theme) => theme.palette.grey[400],
                }}
              >
                立即免費試用 eGroupAI 的人臉辨識引擎，
                <br /> 體驗無縫整合與精確辨識的力量。
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
                <Button
                  color="primary"
                  size="large"
                  target="_blank"
                  rel="noopener"
                  variant="contained"
                  sx={{
                    mt: 3,
                    minWidth: '128px',
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
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
