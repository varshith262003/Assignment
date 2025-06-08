import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material';

const Postgraduate = () => {
  const programs = [
    {
      title: "M.Tech Programs",
      duration: "2 Years",
      description: "Our M.Tech programs are designed to provide advanced technical knowledge and research opportunities in various engineering disciplines.",
      specializations: [
        "Computer Science and Engineering",
        "VLSI Design",
        "Power Systems",
        "Structural Engineering",
        "Communication Systems",
        "Robotics and Automation"
      ],
      highlights: [
        "Research-oriented curriculum",
        "Industry collaboration",
        "Advanced laboratory facilities",
        "Thesis work opportunity",
        "Placement support"
      ]
    },
    {
      title: "MBA Program",
      duration: "2 Years",
      description: "Our MBA program focuses on developing business leaders with strong analytical and decision-making skills.",
      specializations: [
        "Finance",
        "Marketing",
        "Human Resources",
        "Operations Management",
        "Information Technology",
        "Business Analytics"
      ],
      highlights: [
        "Industry expert faculty",
        "Case study methodology",
        "Summer internships",
        "Industry visits",
        "Placement assistance"
      ]
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ color: '#800000', fontWeight: 'bold' }}>
        Postgraduate Programs
      </Typography>
      
      {programs.map((program, index) => (
        <Card key={index} sx={{ mb: 4, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#800000' }}>
              {program.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              Duration: {program.duration}
            </Typography>
            
            <Typography variant="body1" paragraph>
              {program.description}
            </Typography>

            <Box sx={{ mt: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ color: '#800000' }}>
                Available Specializations
              </Typography>
              <Grid container spacing={2}>
                {program.specializations.map((spec, idx) => (
                  <Grid item xs={12} sm={6} md={4} key={idx}>
                    <Card sx={{ bgcolor: '#f5f5f5' }}>
                      <CardContent>
                        <Typography variant="body1">
                          {spec}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>

            <Box sx={{ mt: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ color: '#800000' }}>
                Program Highlights
              </Typography>
              <Grid container spacing={2}>
                {program.highlights.map((highlight, idx) => (
                  <Grid item xs={12} sm={6} key={idx}>
                    <Card sx={{ bgcolor: '#fff3f3' }}>
                      <CardContent>
                        <Typography variant="body1">
                          • {highlight}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default Postgraduate; 