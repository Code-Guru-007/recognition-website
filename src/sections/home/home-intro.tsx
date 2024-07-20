import { m, useScroll } from 'framer-motion';
import { useEffect, useRef, useState, useCallback } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
// routes
import { paths } from 'src/routes/paths';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// layouts
import { HEADER } from 'src/layouts/config-layout';
// components
import { RouterLink } from 'src/routes/components';
import { MotionContainer, varFade } from 'src/components/animate';

// background image
import BackgroundImage from '../../assets/background/home_background.png';

// ----------------------------------------------------------------------

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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
  overflow: 'hidden',
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    marginTop: HEADER.H_DESKTOP_OFFSET,
  },
}));

// ----------------------------------------------------------------------

export default function HomeIntro() {
  const mdUp = useResponsive('up', 'md');

  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {}, []);

  return (
    <StyledWrapper
      sx={{
        background: "url('/assets/background/home_background.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% auto, 100% auto',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container>
        <Grid container>
          <Grid item md={6} xs={12}>
            <Box>
              <Typography
                sx={{
                  color: 'white',
                  fontFamily: 'Lato',
                  fontSize: '48px',
                  fontStyle: 'normal',
                  fontHeight: 700,
                  lineHeight: 'normal',
                }}
              >
                全國領先，
              </Typography>
              <Typography
                sx={{
                  color: 'white',
                  fontFamily: 'Lato',
                  fontSize: '48px',
                  fontStyle: 'normal',
                  fontHeight: 700,
                  lineHeight: 'normal',
                }}
              >
                最廣泛的人臉辨識應用
              </Typography>
            </Box>
            <Typography
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontFamily: 'Lato',
                fontSize: '20px',
                fontStyle: 'normal',
                fontHeight: 400,
                lineHeight: 'normal',
              }}
            >
              精準、安全的人臉辨識解決方案 —
              文件透明、價格公開。無縫整合，快速部署，開啟智慧應用新範疇
            </Typography>
            <Button
              sx={{
                backgroundColor: '#295d84',
                color: 'white',
                borderColor: 'rgba(0,0,0,0.1)',
              }}
            >
              立即免費體驗
            </Button>
          </Grid>
        </Grid>
      </Container>
    </StyledWrapper>
  );
}
