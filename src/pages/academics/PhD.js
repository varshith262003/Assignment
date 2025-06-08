import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material';

const PhD = () => {
  const programs = [
    {
      title: "Ph.D. Programs",
      duration: "3-5 Years",
      description: "Our Ph.D. programs are designed to foster research excellence and innovation across various disciplines. We provide a supportive environment for scholars to pursue their research interests.",
      departments: [
        "Computer Science and Engineering",
        "Electronics and Communication Engineering",
        "Mechanical Engineering",
        "Civil Engineering",
        "Electrical Engineering",
        "Physics",
        "Chemistry",
        "Mathematics",
        "Management Studies"
      ],
      highlights: [
        "World-class research facilities",
        "Experienced research supervisors",
        "Interdisciplinary research opportunities",
        "Publication support",
        "Conference funding",
        "Industry collaboration"
      ],
      admissionRequirements: [
        "Master's degree in relevant field",
        "Qualifying entrance examination",
        "Research proposal",
        "Interview with potential supervisor",
        "English language proficiency"
      ]
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ color: '#800000', fontWeight: 'bold' }}>
        Ph.D. Programs
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
                Available Departments
              </Typography>
              <Grid container spacing={2}>
                {program.departments.map((dept, idx) => (
                  <Grid item xs={12} sm={6} md={4} key={idx}>
                    <Card sx={{ bgcolor: '#f5f5f5' }}>
                      <CardContent>
                        <Typography variant="body1">
                          {dept}
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

            <Box sx={{ mt: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ color: '#800000' }}>
                Admission Requirements
              </Typography>
              <Grid container spacing={2}>
                {program.admissionRequirements.map((req, idx) => (
                  <Grid item xs={12} sm={6} key={idx}>
                    <Card sx={{ bgcolor: '#f0f0f0' }}>
                      <CardContent>
                        <Typography variant="body1">
                          • {req}
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

export default PhD; 