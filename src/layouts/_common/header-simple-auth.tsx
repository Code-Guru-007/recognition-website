// @mui
import { useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// theme
import { bgBlur } from 'src/theme/css';
// hooks
import { useOffSetTop } from 'src/hooks/use-off-set-top';
// components
import Logo from 'src/components/logo';
//
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { HEADER } from '../config-layout';
import HeaderShadow from './header-shadow';

// ----------------------------------------------------------------------

export default function HeaderAuthSimple() {
  const theme = useTheme();

  const offsetTop = useOffSetTop(HEADER.H_DESKTOP);

  return (
    <AppBar sx={{ padding: '0px 56px' }}>
      <Toolbar
        sx={{
          padding: '0px!important',
          justifyContent: 'space-between',
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
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 3, md: '60px' } }}>
          <Logo />
          <Box sx={{ display: 'flex', gap: { xs: 2, md: '40px' } }}>
            <Link href="#">
              <Typography
                sx={{ color: 'black', fontSize: { xs: '12px', md: '14px' }, fontWeight: 600 }}
              >
                線上體驗
              </Typography>
            </Link>
            <Link href="#">
              <Typography
                sx={{ color: 'black', fontSize: { xs: '12px', md: '14px' }, fontWeight: 600 }}
              >
                API 串接文件
              </Typography>
            </Link>
            <Link href="#">
              <Typography
                sx={{ color: 'black', fontSize: { xs: '12px', md: '14px' }, fontWeight: 600 }}
              >
                設定
              </Typography>
            </Link>
          </Box>
        </Box>

        <Stack direction="row" alignItems="center" spacing={1}>
          <img src="/assets/icons/setting/stack.png" alt="" />
        </Stack>
      </Toolbar>

      {offsetTop && <HeaderShadow />}
    </AppBar>
  );
}
