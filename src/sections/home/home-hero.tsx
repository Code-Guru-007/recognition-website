import { m, useScroll } from 'framer-motion';
import { useEffect, useRef, useState, useCallback } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
// routes
import { paths } from 'src/routes/paths';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// layouts
import { HEADER } from 'src/layouts/config-layout';
// components
import { RouterLink } from 'src/routes/components';
import { MotionContainer, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100vh',
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    position: 'fixed',
  },
}));

const StyledWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  overflow: 'hidden',
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    marginTop: HEADER.H_DESKTOP_OFFSET,
  },
}));

// ----------------------------------------------------------------------

export default function HomeHero() {
  const mdUp = useResponsive('up', 'md');

  const heroRef = useRef<HTMLDivElement | null>(null);

  const { scrollY } = useScroll();

  const [percent, setPercent] = useState(0);

  const getScroll = useCallback(() => {
    let heroHeight = 0;

    if (heroRef.current) {
      heroHeight = heroRef.current.offsetHeight;
    }

    scrollY.on('change', (scrollHeight) => {
      const scrollPercent = (scrollHeight * 100) / heroHeight;

      setPercent(Math.floor(scrollPercent));
    });
  }, [scrollY]);

  useEffect(() => {
    getScroll();
  }, [getScroll]);

  const opacity = 1 - percent / 100;

  const hide = percent > 120;

  const renderDescription = (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        height: 1,
        maxWidth: 520,
      }}
    >
      <m.div>
        <Typography
          sx={{
            textAlign: 'left',
            fontSize: { xs: '32px', md: '48px' },
            fontWeight: 700,
            marginBottom: '32px',
            color: 'white',
          }}
        >
          全國領先, <br />
          最廣泛的人臉辨識應用
        </Typography>
        <Typography
          sx={{
            color: 'white',
            opacity: '70%',
            marginBottom: '32px',
            fontSize: { xs: '16px', md: '20px' },
          }}
        >
          精準、安全的人臉辨識解決方案 — 文件透明、價格公開。
          無縫整合，快速部署，開啟智慧應用新範疇。
        </Typography>
        <Stack spacing={3} direction={{ xs: 'column-reverse', sm: 'row' }}>
          <Button
            component={RouterLink}
            href={paths.dashboard.root}
            size="large"
            variant="contained"
            color="primary"
            sx={{
              width: '130px',
              height: '42px',
              fontSize: '15px',
              fontWeight: 400,
            }}
          >
            立即免費體驗
          </Button>
        </Stack>
      </m.div>
    </Stack>
  );

  const renderSlides = (
    <Stack
      direction="row"
      alignItems="flex-start"
      sx={{
        height: '100%',
        position: 'absolute',
        opacity: opacity > 0 ? opacity : 0,
      }}
    >
      <Stack
        component={m.div}
        variants={varFade().in}
        sx={{
          width: 720,
          height: '100%',
        }}
      >
        <Box height="100%" sx={{ objectFit: 'cover', height: '100%' }} />
      </Stack>
    </Stack>
  );

  return (
    <Box
      sx={{
        backgroundImage: "url('../assets/images/home/background.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        height: { xs: '100vh', md: '586px' },
      }}
    >
      <StyledWrapper>
        <Box sx={{ maxWidth: { xs: '450px', md: '1410px' }, height: '100%', m: 'auto' }}>
          <Grid container columnSpacing={{ md: 10 }} sx={{ height: 1 }}>
            <Grid xs={12} md={7}>
              {renderDescription}
            </Grid>
            {mdUp && <Grid md={5}>{renderSlides}</Grid>}
          </Grid>
        </Box>
      </StyledWrapper>
    </Box>
  );
}
