import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Link } from "react-router-dom";

import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import EmailIcon from '@mui/icons-material/Email';
import ProfileIcon from '@mui/icons-material/AccountBox';

import sSideBar from '../assets/styles/sidebar.module.css'
import Logo from '../components/logo'
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawer = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const listaLinks = JSON.parse(sessionStorage.getItem("usuario")).professor ?
    ['Home', 'Minhas aulas', 'Mensagens', 'Perfil'] :
    ['Home', 'Minhas aulas', 'Mensagens', 'Perfil', 'Pesquisa'];

  return (
    <>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader className={sSideBar.drawer}>
          <Logo className={sSideBar.logoSideBar} />
          <IconButton onClick={handleDrawer}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <MenuIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {listaLinks.map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <Link to={getLinkByIndex(index)}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <IconIndex index={index} />
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0, fontFamily: 'monospace', }} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['logout'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <Link to={getLinkByIndexTwo(index)}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <IconIndexTwo index={index} />
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

function IconIndex({ index }) {
  switch (index) {
    case 0:
      return <HomeIcon />;
    case 1:
      return <SchoolIcon />
    case 2:
      return <EmailIcon />
    case 3:
      return <ProfileIcon />
    case 4:
      return <SearchIcon />
    default:
      return <EmailIcon />;
  }
}

function getLinkByIndex(index) {
  switch (index) {
    case 0:
      return "/inicial-aluno";
    case 1:
      return "/minhas-aulas";
    case 2:
      return "/mensagens";
    case 3:
      return "/perfil";
    case 4:
      return "/pesquisa-aberta";
    case 5:
      return "/google-login";
    default:
      return "/";
  }
}

function IconIndexTwo({ index }) {
  switch (index) {
    case 0:
      return <LogoutIcon />;
    default:
      return <LogoutIcon />;
  }
}

function getLinkByIndexTwo(index) {
  switch (index) {
    case 0:
      return "/google-login";
    default:
      return "/";
  }
}
