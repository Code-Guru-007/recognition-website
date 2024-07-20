// @mui
import Box from '@mui/material/Box';
import HeaderAuthSimple from '../_common/header-simple-auth';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function AuthSimpleLayout({ children }: Props) {
  return (
    <>
      <HeaderAuthSimple />
      <Box
        sx={{
          py: 12,
          mx: 'auto',
          px: 0,
          maxWidth: { xs: '450px', md: '1080px' },
          minHeight: '100vh',
        }}
      >
        {children}
      </Box>
    </>
  );
}
