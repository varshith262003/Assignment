import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const ResearchAndInnovation = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: '#800000',
            fontWeight: 'bold',
            mb: 6
          }}
        >
          Research And Innovation
        </Typography>
        <Box
          component="img"
          src="https://upes-production-cvb3e7frghdda0a4.z01.azurefd.net/drupal-data/2024-10/be-vs-btech-which-is-better.webp"
          alt="Research and Innovation Image"
          sx={{
            width: '100%',
            maxWidth: 800,
            height: 'auto',
            objectFit: 'cover',
            borderRadius: 2,
            mb: 4
          }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/800x450?text=Research+and+Innovation';
          }}
        />
        <Typography variant="body1" sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}>
          Lorem ipsum dolor sit amet consectetur, adipiscing elit. Lorem ipsum dolor sit
          amet consectetur. This page showcases our commitment to cutting-edge research and fostering a culture of innovation.
        </Typography>
        {/* Add more content specific to Research and Innovation here */}
      </Container>
    </Box>
  );
};

export default ResearchAndInnovation; 