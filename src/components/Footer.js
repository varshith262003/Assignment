import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
  IconButton,
  Divider,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#800000', // Dark red background
        color: 'white',
      }}
    >
      <Container maxWidth="lg" sx={{ py: 2 }}>
        <Grid container alignItems="center" justifyContent="space-between" spacing={1}>
          <Grid item>
            <Box
              component="img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmH-YCeorg3q68dbwOO_rVcCSYrXMhlP1uOA&s" // VIT-AP University Logo
              alt="VIT-AP University Logo"
              sx={{
                width: '100px',
                height: 'auto',
              }}
            />
          </Grid>
          <Grid item>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end', gap: 2 }}>
              <MuiLink component={Link} to="/home" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' }, fontSize: '0.8rem' }}>
                VIT-AP Home
              </MuiLink>
              <MuiLink component={Link} to="/maps" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' }, fontSize: '0.8rem' }}>
                Maps & Directions
              </MuiLink>
              <MuiLink component={Link} to="/search" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' }, fontSize: '0.8rem' }}>
                Search VIT-AP
              </MuiLink>
              <MuiLink component={Link} to="/emergency" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' }, fontSize: '0.8rem' }}>
                Emergency Info
              </MuiLink>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ bgcolor: 'rgba(255, 255, 255, 0.3)', my: 1 }} />

        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2, mb: 2 }}>
          <MuiLink component={Link} to="/privacy" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' }, fontSize: '0.8rem' }}>
            Privacy
          </MuiLink>
          <MuiLink component={Link} to="/terms" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' }, fontSize: '0.8rem' }}>
            Terms of Use
          </MuiLink>
          <MuiLink component={Link} to="/copyright" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' }, fontSize: '0.8rem' }}>
            Copyright
          </MuiLink>
          <MuiLink component={Link} to="/trademarks" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' }, fontSize: '0.8rem' }}>
            Trademarks
          </MuiLink>
          <MuiLink component={Link} to="/nondiscrimination" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' }, fontSize: '0.8rem' }}>
            Non-Discrimination
          </MuiLink>
          <MuiLink component={Link} to="/accessibility" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' }, fontSize: '0.8rem' }}>
            Accessibility
          </MuiLink>
        </Box>
      </Container>

      <Box sx={{
        bgcolor: '#600000', // Slightly darker red for the bottom part
        py: 1,
        px: 1,
      }}>
        <Container maxWidth="lg">
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item xs={12} md={6}>
              <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
                © VIT-AP University
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' }, alignItems: 'center', gap: 0.5 }}>
              <Typography variant="body2" sx={{ fontStyle: 'italic', mr: 1, fontSize: '0.8rem' }}>
                Crafted with Passion at VIT AP University by Website Team
              </Typography>
              <IconButton color="inherit" aria-label="Instagram" sx={{ p: 0.25 }}>
                <InstagramIcon sx={{ fontSize: '1.2rem' }} />
              </IconButton>
              <IconButton color="inherit" aria-label="LinkedIn" sx={{ p: 0.25 }}>
                <LinkedInIcon sx={{ fontSize: '1.2rem' }} />
              </IconButton>
              <IconButton color="inherit" aria-label="Facebook" sx={{ p: 0.25 }}>
                <FacebookIcon sx={{ fontSize: '1.2rem' }} />
              </IconButton>
              <IconButton color="inherit" aria-label="YouTube" sx={{ p: 0.25 }}>
                <YouTubeIcon sx={{ fontSize: '1.2rem' }} />
              </IconButton>
              <IconButton color="inherit" aria-label="Twitter" sx={{ p: 0.25 }}>
                <TwitterIcon sx={{ fontSize: '1.2rem' }} />
              </IconButton>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer; 