import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import ScienceIcon from '@mui/icons-material/Science';
import BusinessIcon from '@mui/icons-material/Business';
import ComputerIcon from '@mui/icons-material/Computer';

const Academics = () => {
  const departments = [
    {
      name: 'Computer Science',
      icon: <ComputerIcon sx={{ fontSize: 40 }} />,
      programs: ['B.Tech Computer Science', 'M.Tech Computer Science', 'Ph.D. Computer Science'],
    },
    {
      name: 'Engineering',
      icon: <ScienceIcon sx={{ fontSize: 40 }} />,
      programs: ['B.Tech Mechanical', 'B.Tech Electrical', 'B.Tech Civil'],
    },
    {
      name: 'Business',
      icon: <BusinessIcon sx={{ fontSize: 40 }} />,
      programs: ['BBA', 'MBA', 'Ph.D. Business Administration'],
    },
    {
      name: 'Arts & Sciences',
      icon: <SchoolIcon sx={{ fontSize: 40 }} />,
      programs: ['B.Sc. Physics', 'B.Sc. Chemistry', 'B.A. English'],
    },
  ];

  const programs = [
    {
      title: 'B.Tech Programs',
      description: 'Computer Science, Electronics, Mechanical, and more',
      duration: '4 Years'
    },
    {
      title: 'M.Tech Programs',
      description: 'Advanced specialization in various engineering disciplines',
      duration: '2 Years'
    },
    {
      title: 'MBA',
      description: 'Business Administration with various specializations',
      duration: '2 Years'
    },
    {
      title: 'Ph.D.',
      description: 'Research programs across multiple disciplines',
      duration: '3-5 Years'
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
        }}
      >
        <Container>
          <Typography variant="h2" component="h1" gutterBottom>
            Academics
          </Typography>
          <Typography variant="h5">
            Explore Our Programs and Departments
          </Typography>
        </Container>
      </Box>

      {/* Programs Overview */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Our Programs
        </Typography>
        <Typography paragraph align="center">
          We offer a wide range of undergraduate, graduate, and doctoral programs
          designed to prepare students for successful careers in their chosen fields.
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {programs.map((program, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {program.title}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {program.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Duration: {program.duration}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Admission Process */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container>
          <Typography variant="h3" align="center" gutterBottom>
            Admission Process
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    1. Application
                  </Typography>
                  <Typography>
                    Submit your application online through our portal with required documents.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    2. Review
                  </Typography>
                  <Typography>
                    Our admission committee reviews your application and supporting documents.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    3. Admission
                  </Typography>
                  <Typography>
                    Selected candidates receive admission offers and complete enrollment.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Container sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Ready to Start Your Journey?
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 2 }}
        >
          Apply Now
        </Button>
      </Container>
    </Box>
  );
};

export default Academics; 