import { forwardRef } from 'react';
// @mui
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { BoxProps } from '@mui/material/Box';
// routes
import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

export interface LogoProps extends BoxProps {
  disabledLink?: boolean;
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ disabledLink = false, sx, ...other }, ref) => {
    const logo = (
      <Typography
        sx={{
          fontSize: { xs: '22px', md: '30px' },
          fontWeight: '600',
          color: '#1B1642',
        }}
      >
        eGroupAI
      </Typography>
    );

    if (disabledLink) {
      return logo;
    }

    return (
      <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
        {logo}
      </Link>
    );
  }
);

export default Logo;
