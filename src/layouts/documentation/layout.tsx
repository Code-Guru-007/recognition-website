import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar, Link, Menu, MenuItem, Collapse } from '@mui/material';
import { RouterLink } from 'src/routes/components';
import { NAV_ITEMS, NavListProps } from 'src/_mock/_apiDocs';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const drawerWidth = 264;

function CustomMenuItem({ item }: Readonly<{ item: NavListProps }>) {
  const [open, setOpen] = React.useState(false);
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - 120;
      window.scrollTo({
        top: offsetPosition,
      });
    }
  };
  if (!item.children)
    return (
      <ListItemButton onClick={() => handleScroll(item.scrollTo)} sx={{ fontWeight: 400 }}>
        <Typography variant="body2">{item.label}</Typography>
      </ListItemButton>
    );
  return (
    <>
      <ListItemButton
        onClick={() => setOpen(!open)}
        sx={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <Typography variant="body2">{item.label}</Typography>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {item.children.map((child) => (
            <ListItemButton
              onClick={() => handleScroll(child.scrollTo)}
              component="div"
              key={`child-nav-item-${child.scrollTo}`}
            >
              <Typography variant="body2" ml={2}>
                {child.label}
              </Typography>
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  );
}

type Props = {
  children: React.ReactNode;
};

export default function DocumentationLayout({ children }: Readonly<Props>) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <Box ml={5}>
      <Box sx={{ display: 'flex', height: 80, alignItems: 'center' }}>
        <Typography variant="h6" fontSize={{ xs: 24, md: 30 }} ml={2}>
          eGroupAI
        </Typography>
      </Box>
      <List>
        {NAV_ITEMS.map((item) => (
          <CustomMenuItem item={item} key={`nav-list-${item.scrollTo}`} />
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          bgcolor: 'white',
          height: 80,
        }}
      >
        <Toolbar
          sx={{ width: '100%', px: { xs: '24px !important', md: '56px !important' }, height: 80 }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Stack direction="row" alignItems="center" justifyContent="space-between" width="100%">
            <Box>
              <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <Stack direction="row" spacing={{ xs: 3, md: 5 }}>
                  <Link
                    sx={{
                      typography: 'body2',
                      color: 'text.primary',
                      fontWeight: 600,
                      transition: (theme) => theme.transitions.create('all'),
                      '&:hover': { color: 'primary.main' },
                    }}
                    component={RouterLink}
                    href="/"
                  >
                    線上體驗
                  </Link>
                  <Link
                    sx={{
                      typography: 'body2',
                      color: 'text.primary',
                      fontWeight: 600,
                      transition: (theme) => theme.transitions.create('all'),
                      '&:hover': { color: 'primary.main' },
                    }}
                    component={RouterLink}
                    href="/"
                  >
                    API 串接文件
                  </Link>
                  <Link
                    sx={{
                      typography: 'body2',
                      color: 'text.primary',
                      fontWeight: 600,
                      transition: (theme) => theme.transitions.create('all'),
                      '&:hover': { color: 'primary.main' },
                    }}
                    component={RouterLink}
                    href="/setting"
                  >
                    設定
                  </Link>
                </Stack>
              </Box>
            </Box>
            <IconButton onClick={handleOpenMenu}>
              <Avatar alt="Remy Sharp" src="/assets/images/docs/avatar.png" />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleCloseMenu}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem>
                <Stack spacing={1}>
                  <Typography variant="body2">Jaydon Frankie</Typography>
                  <Typography variant="body2" color="grey">
                    demo@minimals.cc
                  </Typography>
                </Stack>
              </MenuItem>
              <Box
                sx={{ borderTop: (theme) => `1px dotted ${theme.palette.grey[300]}`, mb: 0.5 }}
              />

              <MenuItem onClick={handleCloseMenu}>
                <Typography variant="body2" fontWeight={500}>
                  線上體驗
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseMenu}>
                <Typography variant="body2" fontWeight={500}>
                  API 串接文件
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseMenu}>
                <Typography variant="body2" fontWeight={500}>
                  設定
                </Typography>
              </MenuItem>
              <Box
                sx={{ borderTop: (theme) => `1px dotted ${theme.palette.grey[300]}`, mb: 0.5 }}
              />
              <MenuItem onClick={handleCloseMenu}>
                <Typography variant="body2" color="error" fontWeight={500}>
                  Logout
                </Typography>
              </MenuItem>
            </Menu>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },

            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            ml: 5,
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, width: { md: `calc(100% - ${drawerWidth}px)` } }}>
        <Toolbar sx={{ height: 80 }} />
        {children}
      </Box>
    </Box>
  );
}
