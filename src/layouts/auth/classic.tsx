// @mui
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// routes
import { RouterLink } from 'src/routes/components';
// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function AuthClassicLayout({ children }: Props) {
  const renderLogo = (
    <Box
      sx={{
        zIndex: 9,
        position: 'absolute',
        top: '0px',
        p: { xs: 2, md: '40px' },
      }}
    >
      <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
        <Typography
          sx={{
            fontSize: { xs: '22px', md: '30px' },
            fontWeight: '600',
            color: 'white',
          }}
        >
          eGroupAI
        </Typography>
      </Link>
    </Box>
  );

  const renderContent = (
    <Stack
      sx={{
        width: 1,
        mx: 'auto',
        maxWidth: 420,
        px: { xs: 2, md: '24px' },
        py: { xs: 2, md: '40px' },
        background: 'white',
        borderRadius: '16px',
      }}
    >
      {children}
    </Stack>
  );

  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        backgroundImage: "url('/assets/background/login_bg.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      {renderLogo}

      {renderContent}
    </Box>
  );
}
