import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
} from '@mui/material';

const About = () => {
  const leadership = [
    {
      name: 'Dr. John Smith',
      position: 'President',
      image: 'https://source.unsplash.com/random/200x200/?portrait',
    },
    {
      name: 'Dr. Sarah Johnson',
      position: 'Vice President',
      image: 'https://source.unsplash.com/random/200x200/?woman',
    },
    {
      name: 'Dr. Michael Brown',
      position: 'Dean of Academics',
      image: 'https://source.unsplash.com/random/200x200/?man',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" sx={{ mb: 4, color: '#800000' }}>
        About VIT-AP
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Vision
              </Typography>
              <Typography variant="body1" paragraph>
                To be a global leader in higher education, fostering innovation and excellence in teaching, research, and community service.
              </Typography>
              <Typography variant="h5" gutterBottom>
                Mission
              </Typography>
              <Typography variant="body1" paragraph>
                To provide quality education and create an environment that promotes academic excellence, research, and innovation.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Campus
              </Typography>
              <Typography variant="body1">
                Located in Amaravati, the capital city of Andhra Pradesh, VIT-AP University offers a world-class infrastructure spread across 200 acres.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Leadership
              </Typography>
              <Typography variant="body1">
                Under the guidance of Dr. G. Viswanathan, Chancellor, VIT-AP continues to grow as a center of excellence in education and research.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About; 