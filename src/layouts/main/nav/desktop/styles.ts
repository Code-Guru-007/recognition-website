// @mui
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
// theme
import { paper } from 'src/theme/css';
//
import { NavItemDesktopProps } from '../types';

// ----------------------------------------------------------------------

type ListItemProps = Omit<NavItemDesktopProps, 'item'>;

export const ListItem = styled(ListItemButton, {
  shouldForwardProp: (prop) =>
    prop !== 'active' && prop !== 'open' && prop !== 'offsetTop' && prop !== 'subItem',
})<ListItemProps>(({ active, open, offsetTop, subItem, theme }) => {
  const dotActive = {
    content: '""',
    borderRadius: '50%',
    position: 'absolute',
    width: 6,
    height: 6,
    left: -14,
    opacity: 0.48,
    backgroundColor: 'currentColor',
  };

  return {
    ...theme.typography.subtitle2,
    padding: 0,
    height: '100%',
    color: theme.palette.text.primary,
    transition:
      'opacity 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 233ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    '&:hover': {
      opacity: 1,
      // fontWeight: 700,
      backgroundColor: 'rgba(55, 125, 255, 0.04)',
      // backgroundColor: 'transparent',
    },
    // Sub item
    ...(subItem && {
      ...theme.typography.body2,
      color: theme.palette.text.secondary,
    }),
    // offsetTop
    ...(offsetTop && {
      color: theme.palette.text.primary,
    }),
    // Active
    ...(active && {
      color: theme.palette.primary.main,
      '&::before': dotActive,
    }),
    // Active sub item
    ...(active &&
      subItem && {
        ...theme.typography.subtitle2,
        color: theme.palette.text.primary,
        '&::before': {
          ...dotActive,
          color: theme.palette.primary.main,
        },
      }),
    // Open
    ...(open && {
      opacity: 1,
      fontWeight: 700,
    }),
  };
});

// ----------------------------------------------------------------------

export const StyledMenu = styled(Paper)(({ theme }) => ({
  ...paper({ theme }),
  zIndex: theme.zIndex.modal,
  padding: theme.spacing(1, 1, 1, 1),
  maxWidth: theme.breakpoints.values.lg,
  boxShadow: theme.customShadows.dropdown,
  background: 'white',
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
}));

// ----------------------------------------------------------------------

export const StyledSubheader = styled(ListSubheader)(({ theme }) => ({
  ...theme.typography.overline,
  padding: 0,
  fontSize: 11,
  color: theme.palette.text.primary,
}));
