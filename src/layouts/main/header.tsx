// @mui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { IconButton } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import LanguageIcon from '@mui/icons-material/Language';

// import clsx from "clsx";
import { makeStyles } from '@mui/styles';
// svg icons
import SocialMediaIcon from 'public/assets/icons/navbar/Social_Media.svg';
// hooks
import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { useResponsive } from 'src/hooks/use-responsive';
// theme
import { bgBlur } from 'src/theme/css';
// routes
import { paths } from 'src/routes/paths';
// components
import Logo from 'src/components/logo';
//
import { HEADER } from '../config-layout';
import { navConfig } from './config-navigation';
import NavMobile from './nav/mobile';
import NavDesktop from './nav/desktop';
//
import { HeaderShadow } from '../_common';

// ----------------------------------------------------------------------

const useStyles = makeStyles(() => ({
  smsIcon: {
    position: 'fixed',
    bottom: 160,
  },
  listIcon: {
    position: 'fixed',
    bottom: 90,
  },
  right: {
    right: 20,
  },
  left: {
    left: 20,
  },
}));

export default function Header() {
  const theme = useTheme();
  const classes = useStyles();

  const mdUp = useResponsive('up', 'md');

  const offsetTop = useOffSetTop(HEADER.H_DESKTOP);

  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(['height'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(offsetTop && {
            ...bgBlur({
              color: theme.palette.background.default,
            }),
            height: {
              md: HEADER.H_DESKTOP_OFFSET,
            },
          }),
          boxShadow: '0px 3px 6px 0px #8C98A440',
          background: 'white',
        }}
      >
        <Container sx={{ height: 1, display: 'flex', alignItems: 'center' }}>
          <Logo />

          <Box sx={{ flexGrow: 1 }} />

          {mdUp && <NavDesktop offsetTop={offsetTop} data={navConfig} />}

          <Grid sx={{ display: 'inline-flex', alignItems: 'center', gap: '24px' }}>
            <Button
              variant="outlined"
              sx={{
                color: '#295d84',
                borderColor: 'rgba(0,0,0,0.1)',
                display: { xs: 'none', md: 'flex' },
                minWidth: 42,
                width: 42,
                height: 42,
              }}
            >
              <LanguageIcon />
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: '#295d84',
                borderColor: 'rgba(0,0,0,0.1)',
                display: { xs: 'none', md: 'block' },
                width: 84,
                height: 42,
              }}
            >
              Login
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{
                display: { xs: 'none', md: 'block' },
                borderColor: 'rgba(0,0,0,0.1)',
                width: 84,
                height: 42,
              }}
            >
              線上體驗
            </Button>
            <SocialMediaIcon />
            {!mdUp && <NavMobile offsetTop={offsetTop} data={navConfig} />}
          </Grid>
        </Container>
      </Toolbar>

      {offsetTop && <HeaderShadow />}
    </AppBar>
  );
}
