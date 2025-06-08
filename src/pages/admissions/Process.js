import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box, Stepper, Step, StepLabel, StepContent } from '@mui/material';

const Process = () => {
  const steps = [
    {
      label: 'Online Application',
      description: 'Complete the online application form with all required details',
      details: [
        'Fill in personal information',
        'Upload required documents',
        'Select preferred programs',
        'Pay application fee'
      ]
    },
    {
      label: 'Entrance Examination',
      description: 'Appear for the VIT-AP entrance examination',
      details: [
        'Download admit card',
        'Check examination schedule',
        'Prepare required documents',
        'Follow examination guidelines'
      ]
    },
    {
      label: 'Counseling',
      description: 'Participate in the counseling process',
      details: [
        'Check merit list',
        'Select preferred branch',
        'Document verification',
        'Seat allocation'
      ]
    },
    {
      label: 'Admission Confirmation',
      description: 'Complete the admission formalities',
      details: [
        'Pay admission fee',
        'Submit original documents',
        'Complete medical examination',
        'Register for hostel (if required)'
      ]
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ color: '#800000', fontWeight: 'bold' }}>
        Application Process
      </Typography>

      <Card sx={{ mb: 4, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom sx={{ color: '#800000' }}>
            Admission Steps
          </Typography>
          <Stepper orientation="vertical">
            {steps.map((step, index) => (
              <Step key={index} active={true}>
                <StepLabel>
                  <Typography variant="h6" sx={{ color: '#800000' }}>
                    {step.label}
                  </Typography>
                </StepLabel>
                <StepContent>
                  <Typography variant="body1" paragraph>
                    {step.description}
                  </Typography>
                  <Box sx={{ pl: 2 }}>
                    {step.details.map((detail, idx) => (
                      <Typography key={idx} variant="body2" paragraph sx={{ display: 'flex', alignItems: 'center' }}>
                        • {detail}
                      </Typography>
                    ))}
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </CardContent>
      </Card>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ color: '#800000' }}>
                Required Documents
              </Typography>
              <Box sx={{ pl: 2 }}>
                {[
                  'Class 10th mark sheet',
                  'Class 12th mark sheet',
                  'Entrance exam score card',
                  'Transfer certificate',
                  'Character certificate',
                  'Passport size photographs',
                  'ID proof',
                  'Category certificate (if applicable)'
                ].map((doc, idx) => (
                  <Typography key={idx} variant="body2" paragraph>
                    • {doc}
                  </Typography>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ color: '#800000' }}>
                Important Dates
              </Typography>
              <Box sx={{ pl: 2 }}>
                {[
                  'Application Start: January 1, 2024',
                  'Application Deadline: March 31, 2024',
                  'Entrance Exam: April 15, 2024',
                  'Result Declaration: May 1, 2024',
                  'Counseling: May 15-30, 2024',
                  'Admission Deadline: June 30, 2024'
                ].map((date, idx) => (
                  <Typography key={idx} variant="body2" paragraph>
                    • {date}
                  </Typography>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4, p: 3, bgcolor: '#f5f5f5', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom sx={{ color: '#800000' }}>
          Contact Information
        </Typography>
        <Typography variant="body2" paragraph>
          For any queries regarding the admission process, please contact:
        </Typography>
        <Typography variant="body2" paragraph>
          Email: admissions@vitap.ac.in
        </Typography>
        <Typography variant="body2" paragraph>
          Phone: +91-866-2493777
        </Typography>
      </Box>
    </Container>
  );
};

export default Process; 