'use client';

import { useEffect, useRef, useState } from 'react';
// @mui
import Fade from '@mui/material/Fade';
import Stack from '@mui/material/Stack';
import Portal from '@mui/material/Portal';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// routes
import { usePathname } from 'src/routes/hook';
import { useActiveLink } from 'src/routes/hook/use-active-link';
//
import { NavItemProps } from '../types';
import { NavItem, NavItemDashboard } from './nav-item';
import { StyledSubheader, StyledMenu } from './styles';

// ----------------------------------------------------------------------

type NavListProps = {
  item: NavItemProps;
  offsetTop: boolean;
};

export default function NavList({ item, offsetTop }: NavListProps) {
  const pathname = usePathname();

  const nav = useBoolean();

  const { path, children } = item;

  const active = useActiveLink(path, false);

  const externalLink = path.includes('http');

  const menuRef = useRef<HTMLDivElement>(null);

  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        nav.onFalse();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [nav]);

  useEffect(() => {
    if (nav.value) {
      nav.onFalse();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpenMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    if (children) {
      const { top, left, height, width } = event.currentTarget.getBoundingClientRect();
      console.log(top, left, height, width);
      setMenuPosition({ top: top + height, left: left - width });
      event.stopPropagation(); // Stop event propagation
      nav.onToggle();
    }
  };

  return (
    <>
      <NavItem
        item={item}
        offsetTop={offsetTop}
        active={active}
        open={nav.value}
        externalLink={externalLink}
        onClick={handleOpenMenu}
      />

      {!!children && nav.value && (
        <Portal>
          <Fade in={nav.value}>
            <StyledMenu
              ref={menuRef}
              onClick={(event) => {
                event.stopPropagation();
              }}
              sx={{
                display: 'flex',
                position: 'fixed',
                top: menuPosition.top - 2,
                left: menuPosition.left,
                zIndex: '9999',
                borderTop: '3px solid #377DFF',
                padding: '16px',
              }}
            >
              {children.map((list) => (
                <NavSubList
                  key={list.subheader}
                  subheader={list.subheader}
                  items={list.items}
                  isDashboard={list.subheader === 'Dashboard'}
                  onClose={nav.onFalse}
                />
              ))}
            </StyledMenu>
          </Fade>
        </Portal>
      )}
    </>
  );
}

// ----------------------------------------------------------------------

type NavSubListProps = {
  isDashboard: boolean;
  subheader: string;
  items: NavItemProps[];
  onClose: VoidFunction;
};

function NavSubList({ items, isDashboard, subheader, onClose }: NavSubListProps) {
  const pathname = usePathname();

  return (
    <Stack
      spacing={0}
      alignItems="flex-start"
      sx={{
        flexGrow: 1,
        ...(isDashboard && {
          maxWidth: 540,
        }),
      }}
    >
      <StyledSubheader disableSticky>{subheader}</StyledSubheader>

      {items.map((item) =>
        isDashboard ? (
          <NavItemDashboard key={item.title} item={item} onClick={onClose} />
        ) : (
          <NavItem
            subItem
            key={item.title}
            item={item}
            active={pathname === `${item.path}/`}
            onClick={onClose}
          />
        )
      )}
    </Stack>
  );
}
