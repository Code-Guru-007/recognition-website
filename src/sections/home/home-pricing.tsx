import { m } from 'framer-motion';
// @mui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
// hooks
import { varFade, MotionViewport } from 'src/components/animate';
import { useResponsive } from 'src/hooks/use-responsive';
// routes
import { paths } from 'src/routes/paths';
// ----------------------------------------------------------------------

export default function HomePricing() {
  const mdUp = useResponsive('up', 'md');

  const renderContent = (
    <m.div variants={varFade().in}>
      <Box>
        <Typography variant="h3" sx={{ mt: 3 }}>
          免費試用Infocenter。
          <br />
          無需信用卡，無需安裝任何軟體。
        </Typography>
        <Stack flexDirection="row" flexWrap="wrap" gap={3} sx={{ mt: 4 }}>
          <Button
            size="large"
            target="_blank"
            rel="noopener"
            variant="contained"
            color="primary"
            sx={{
              minWidth: 160,
              fontSize: '15px',
              fontWeight: 400,
            }}
            href={paths.pricing}
          >
            Free trial
          </Button>
          <Button
            color="primary"
            size="large"
            target="_blank"
            rel="noopener"
            variant="outlined"
            sx={{
              minWidth: 160,
              fontSize: '15px',
              fontWeight: 400,
            }}
            href={paths.pricing}
          >
            About price
          </Button>
        </Stack>
      </Box>
    </m.div>
  );

  return (
    <Box sx={{ position: 'relative' }}>
      {mdUp && (
        <Box
          component="img"
          src="/assets/images/home/price.png"
          alt="test"
          sx={{
            position: 'absolute',
            top: '-70px',
            right: '90px',
          }}
        />
      )}
      <Box
        sx={{
          mt: { xs: 3, md: 10 },
          mb: 4,
          py: { xs: 3, md: 8 },
          bgcolor: '#F8F9FC',
        }}
      >
        <Container component={MotionViewport}>{renderContent}</Container>
      </Box>
    </Box>
  );
}
