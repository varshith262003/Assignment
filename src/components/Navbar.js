import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import SchoolIcon from '@mui/icons-material/School';
import BusinessIcon from '@mui/icons-material/Business';
import ScienceIcon from '@mui/icons-material/Science';
import EventIcon from '@mui/icons-material/Event';
import InfoIcon from '@mui/icons-material/Info';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import GroupIcon from '@mui/icons-material/Group';
import StarIcon from '@mui/icons-material/Star';

const maroon = '#800000';

const Navbar = () => {
  const [menuAnchors, setMenuAnchors] = useState({});
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = [
    {
      label: 'About',
      path: '/about',
      submenu: [
        { label: 'Vision & Mission', path: '/about/vision' },
        { label: 'Leadership', path: '/about/leadership' },
        { label: 'Campus', path: '/about/campus' },
      ]
    },
    {
      label: 'Admissions',
      path: '/admissions',
      submenu: [
        { label: 'Application Process', path: '/admissions/process' },
        { label: 'Programs', path: '/admissions/programs' },
        { label: 'Fees & Scholarships', path: '/admissions/fees' },
        { label: 'International Students', path: '/admissions/international' },
      ]
    },
    {
      label: 'Academics',
      path: '/academics',
      submenu: [
        { label: 'Undergraduate', path: '/academics/undergraduate' },
        { label: 'Postgraduate', path: '/academics/postgraduate' },
        { label: 'Ph.D.', path: '/academics/phd' },
        { label: 'Academic Calendar', path: '/academics/calendar' },
      ]
    },
    {
      label: 'Career Development Centre',
      path: '/career-development',
      submenu: [
        { label: 'Placements', path: '/career-development/placements' },
        { label: 'Internships', path: '/career-development/internships' },
      ]
    },
    {
      label: 'Research',
      path: '/research',
      submenu: [
        { label: 'Research Centers', path: '/research/centers' },
        { label: 'Publications', path: '/research/publications' },
        { label: 'Projects', path: '/research/projects' },
      ]
    },
    {
      label: 'Campus Life',
      path: '/campus-life',
      submenu: [
        { label: 'Sports', path: '/campus-life/sports' },
        { label: 'Cultural Events', path: '/campus-life/cultural' },
        { label: 'Clubs', path: '/campus-life/clubs' },
        { label: 'Hostel', path: '/campus-life/hostel' },
      ]
    }
  ];

  const handleMenuOpen = (event, label) => {
    setMenuAnchors(prev => ({
      ...prev,
      [label]: event.currentTarget
    }));
  };

  const handleMenuClose = (label) => {
    setMenuAnchors(prev => ({
      ...prev,
      [label]: null
    }));
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  const renderDesktopMenu = () => (
    <Box sx={{ display: 'flex', gap: 2 }}>
      {menuItems.map((item) => (
        <Box key={item.label}>
          <Button
            component={Link}
            to={item.path}
            onMouseEnter={(e) => handleMenuOpen(e, item.label)}
            sx={{
              color: maroon,
              fontWeight: 500,
              fontSize: 16,
              textTransform: 'none',
              '&:hover': {
                backgroundColor: 'rgba(128, 0, 0, 0.04)',
              },
            }}
          >
            {item.label}
            {item.submenu && Boolean(menuAnchors[item.label]) && (
              <KeyboardArrowDownIcon
                sx={{
                  ml: 0.5,
                  transform: 'rotate(180deg)',
                  transition: 'transform 0.3s ease-in-out',
                }}
              />
            )}
          </Button>
          {item.submenu && (
            <Menu
              anchorEl={menuAnchors[item.label]}
              open={Boolean(menuAnchors[item.label])}
              onClose={() => handleMenuClose(item.label)}
              MenuListProps={{
                onMouseLeave: () => handleMenuClose(item.label),
              }}
              PaperProps={{
                sx: { 
                  width: 280, 
                  maxWidth: '100%',
                  mt: 1,
                  '& .MuiMenuItem-root': {
                    py: 1.5,
                    '&:hover': {
                      backgroundColor: 'rgba(128, 0, 0, 0.04)',
                    }
                  }
                }
              }}
            >
              {item.submenu.map((subItem) => (
                <MenuItem
                  key={subItem.label}
                  component={Link}
                  to={subItem.path}
                  onClick={() => handleMenuClose(item.label)}
                >
                  <ListItemText 
                    primary={subItem.label}
                    primaryTypographyProps={{
                      sx: { 
                        color: maroon,
                        fontWeight: 500
                      }
                    }}
                  />
                </MenuItem>
              ))}
            </Menu>
          )}
        </Box>
      ))}
    </Box>
  );

  const renderMobileMenu = () => (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleMobileMenuOpen}
        sx={{ color: maroon }}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={mobileMenuAnchor}
        open={Boolean(mobileMenuAnchor)}
        onClose={handleMobileMenuClose}
        PaperProps={{
          sx: { width: 280, maxWidth: '100%' }
        }}
      >
        {menuItems.map((item) => (
          <React.Fragment key={item.label}>
            <MenuItem
              component={Link}
              to={item.path}
              onClick={handleMobileMenuClose}
            >
              {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
              <ListItemText primary={item.label} />
            </MenuItem>
            {item.submenu && item.submenu.map((subItem) => (
              <MenuItem
                key={subItem.label}
                component={Link}
                to={subItem.path}
                onClick={handleMobileMenuClose}
                sx={{ pl: 4 }} // Indent submenu items
              >
                <ListItemText primary={subItem.label} />
              </MenuItem>
            ))}
            <Divider />
          </React.Fragment>
        ))}
      </Menu>
    </>
  );

  return (
    <>
      {/* Top Bar */}
      <AppBar position="static" sx={{ bgcolor: maroon, height: 40, boxShadow: 'none' }}>
        <Container maxWidth="xl" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <AccountBalanceIcon sx={{ color: 'white', fontSize: '1rem' }} />
            <Typography variant="body2" sx={{ color: 'white', fontWeight: 'bold' }}>
              CAMPUSES
            </Typography>
            <ArrowForwardIosIcon sx={{ color: 'white', fontSize: '0.8rem' }} />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="body2" sx={{ color: 'white', textTransform: 'uppercase' }}>
              Careers
            </Typography>
            <Typography variant="body2" sx={{ color: 'white', textTransform: 'uppercase' }}>
              Alumni
            </Typography>
            <Typography variant="body2" sx={{ color: 'white', textTransform: 'uppercase' }}>
              VIT-AP Advantages
            </Typography>
            <IconButton sx={{ color: 'white' }}><SearchIcon /></IconButton>
            <Typography variant="body2" sx={{ color: 'white', fontWeight: 'bold', border: '1px solid white', borderRadius: 1, px: 0.5 }}>
              360
            </Typography>
          </Box>
        </Container>
      </AppBar>

      {/* Main Navbar */}
      <AppBar position="sticky" sx={{ bgcolor: 'white', boxShadow: 1 }}>
        <Container maxWidth="xl">
          <Toolbar sx={{ minHeight: 80, px: { xs: 1, sm: 2 } }}>
            {/* Logo and university name */}
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
              <Box
                component="img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmH-YCeorg3q68dbwOO_rVcCSYrXMhlP1uOA&s" // Assuming you have a VIT-AP logo image here
                alt="VIT-AP University Logo"
                sx={{
                  height: 60,
                  width: 'auto',
                  mr: 2
                }}
              />
            </Box>

            {/* Navigation */}
            {!isMobile && renderDesktopMenu()}
            {isMobile && renderMobileMenu()}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar; 