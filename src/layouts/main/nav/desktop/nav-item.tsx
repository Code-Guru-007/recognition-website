import { m } from 'framer-motion';
import { forwardRef } from 'react';
// @mui
import Box from '@mui/material/Box';
import Link, { LinkProps } from '@mui/material/Link';
import CardActionArea from '@mui/material/CardActionArea';
// routes
import { RouterLink } from 'src/routes/components';
// components
import Iconify from 'src/components/iconify';
//
import { NavItemDesktopProps, NavItemProps } from '../types';
import { ListItem } from './styles';

// ----------------------------------------------------------------------

export const NavItem = forwardRef<HTMLDivElement, NavItemDesktopProps>(
  ({ item, open, offsetTop, active, subItem, externalLink, ...other }, ref) => {
    const { title, path, children } = item;

    const renderContent = (
      <ListItem
        ref={ref}
        disableRipple
        offsetTop={offsetTop}
        subItem={subItem}
        active={active}
        open={open}
        {...other}
      >
        {children ? (
          <p>{title}</p>
        ) : (
          <m.p
            whileHover="hover"
            initial="initial"
            variants={{
              hover: { background: 'rgba(55, 125, 255, 0.04)' },
              initial: { background: 'transparent', opacity: '100%' },
            }}
            style={{
              width: '250px',
              padding: '10px 8px',
              borderRadius: '5px',
              margin: 0,
              display: 'flex',
              alignItems: 'center',
              color: 'black',
            }}
            className="hover:bg-red-500"
          >
            {title}
          </m.p>
        )}

        {!!children &&
          (open ? (
            <Iconify width={16} icon="eva:arrow-ios-upward-fill" sx={{ ml: 1 }} />
          ) : (
            <Iconify width={16} icon="eva:arrow-ios-downward-fill" sx={{ ml: 1 }} />
          ))}
      </ListItem>
    );

    // External link
    if (externalLink) {
      return (
        <div style={{ background: 'red' }}>
          <Link href={path} target="_blank" rel="noopener" underline="none">
            {renderContent}
          </Link>
        </div>
      );
    }

    // Has child
    if (children) {
      return renderContent;
    }

    // Default
    return (
      <Link component={RouterLink} href={path} underline="none">
        {renderContent}
      </Link>
    );
  }
);

// ----------------------------------------------------------------------

interface NavItemDashboardProps extends LinkProps {
  item: NavItemProps;
}

export function NavItemDashboard({ item, sx, ...other }: NavItemDashboardProps) {
  return (
    <Link component={RouterLink} href={item.path} sx={{ width: 1 }} {...other}>
      <CardActionArea
        sx={{
          py: 5,
          px: 10,
          minHeight: 400,
          borderRadius: 1.5,
          color: 'text.disabled',
          bgcolor: 'background.neutral',

          ...sx,
        }}
      >
        <m.div
          whileTap="tap"
          whileHover="hover"
          variants={{
            hover: { scale: 1.02 },
            tap: { scale: 0.98 },
          }}
        >
          <Box
            component="img"
            alt="illustration_dashboard"
            src="/assets/illustrations/illustration_dashboard.png"
          />
        </m.div>
      </CardActionArea>
    </Link>
  );
}
