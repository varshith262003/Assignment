import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Stepper,
  Step,
  StepLabel,
  Paper,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const steps = [
  'Choose Program',
  'Check Eligibility',
  'Submit Application',
  'Pay Application Fee',
  'Upload Documents',
  'Track Status',
];

const programs = [
  {
    title: 'B.Tech',
    duration: '4 Years',
    seats: 120,
    eligibility: '10+2 with PCM',
    link: '/admissions/programmes/btech',
  },
  {
    title: 'B.Sc.',
    duration: '3 Years',
    seats: 60,
    eligibility: '10+2 with Science',
    link: '/admissions/programmes/bsc',
  },
  {
    title: 'BBA',
    duration: '3 Years',
    seats: 60,
    eligibility: '10+2 in any stream',
    link: '/admissions/programmes/bba',
  },
  {
    title: 'B.Com.',
    duration: '3 Years',
    seats: 60,
    eligibility: '10+2 in any stream',
    link: '/admissions/programmes/bcom',
  },
  {
    title: 'M.Tech',
    duration: '2 Years',
    seats: 30,
    eligibility: 'B.Tech in relevant field',
    link: '/admissions/programmes/mtech',
  },
  {
    title: 'M.Sc.',
    duration: '2 Years',
    seats: 30,
    eligibility: 'B.Sc. in relevant field',
    link: '/admissions/programmes/msc',
  },
];

const Admissions = () => {
  const location = useLocation();
  const isProgramPage = location.pathname.includes('/programmes/');

  const admissionProcess = [
    {
      title: 'Application',
      description: 'Submit your application through our online portal',
      link: '/admissions/apply'
    },
    {
      title: 'Entrance Exam',
      description: 'Appear for VITEEE or other qualifying examinations',
      link: '/admissions/exam'
    },
    {
      title: 'Counseling',
      description: 'Participate in the counseling process',
      link: '/admissions/counseling'
    },
    {
      title: 'Documentation',
      description: 'Submit required documents for verification',
      link: '/admissions/documents'
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: '#800000',
          color: 'white',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ mb: 2 }}>
            Admissions
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}>
            Join VIT-AP University and be part of a vibrant academic community
          </Typography>
        </Container>
      </Box>

      {/* Application Process */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" sx={{ mb: 4, color: '#800000' }}>
          Application Process
        </Typography>
        <Stepper activeStep={0} alternativeLabel sx={{ mb: 6 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {/* Programs Grid */}
        <Typography variant="h4" sx={{ mb: 4, color: '#800000' }}>
          Available Programs
        </Typography>
        <Grid container spacing={4}>
          {programs.map((program) => (
            <Grid item xs={12} sm={6} md={4} key={program.title}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    sx={{ color: '#800000' }}
                  >
                    {program.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Duration: {program.duration}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Seats Available: {program.seats}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Eligibility: {program.eligibility}
                  </Typography>
                  <Button
                    component={Link}
                    to={program.link}
                    variant="contained"
                    sx={{
                      bgcolor: '#800000',
                      '&:hover': {
                        bgcolor: '#600000',
                      },
                    }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Important Dates */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" sx={{ mb: 4, color: '#800000' }}>
            Important Dates
          </Typography>
          <Paper sx={{ p: 3 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  Application Deadlines
                </Typography>
                <Typography variant="body1" paragraph>
                  • Early Application: March 31, 2024
                </Typography>
                <Typography variant="body1" paragraph>
                  • Regular Application: May 31, 2024
                </Typography>
                <Typography variant="body1" paragraph>
                  • Late Application: June 30, 2024
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  Admission Process
                </Typography>
                <Typography variant="body1" paragraph>
                  • Entrance Test: July 15, 2024
                </Typography>
                <Typography variant="body1" paragraph>
                  • Interview: July 20-25, 2024
                </Typography>
                <Typography variant="body1" paragraph>
                  • Final Selection: August 1, 2024
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Box>

        {/* Call to Action */}
        <Box
          sx={{
            mt: 8,
            textAlign: 'center',
            bgcolor: '#f5f5f5',
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h4" sx={{ mb: 2, color: '#800000' }}>
            Ready to Begin Your Journey?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Start your application process today and take the first step towards your future at VIT-AP University
          </Typography>
          <Button
            component={Link}
            to="/admissions/apply"
            variant="contained"
            size="large"
            sx={{
              bgcolor: '#800000',
              '&:hover': {
                bgcolor: '#600000',
              },
            }}
          >
            Apply Now
          </Button>
        </Box>

        <Typography variant="h4" sx={{ mb: 4, color: '#800000' }}>
          Admission Process Steps
        </Typography>
        <Grid container spacing={4}>
          {admissionProcess.map((step, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {step.title}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {step.description}
                  </Typography>
                  <Button
                    component={Link}
                    to={step.link}
                    variant="contained"
                    sx={{ bgcolor: '#800000', '&:hover': { bgcolor: '#600000' } }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Admissions; 