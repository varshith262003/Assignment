import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';

const Research = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" sx={{ mb: 4, color: '#800000' }}>
        Research at VIT-AP
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Research Centers
              </Typography>
              <Typography variant="body1">
                VIT-AP University houses several state-of-the-art research centers focusing on:
              </Typography>
              <Box component="ul" sx={{ mt: 2 }}>
                <li>Artificial Intelligence and Machine Learning</li>
                <li>Robotics and Automation</li>
                <li>Sustainable Energy</li>
                <li>Biotechnology</li>
                <li>Advanced Materials</li>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Research Publications
              </Typography>
              <Typography variant="body1">
                Our faculty and students regularly publish in high-impact journals and present at international conferences.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Research; 