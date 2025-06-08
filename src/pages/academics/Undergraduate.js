import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';

const Undergraduate = () => {
  const programs = [
    {
      title: 'B.Tech in Computer Science And Engineering',
      duration: '4 Years',
      description: 'A comprehensive program covering fundamental concepts of computer science and engineering.',
      specializations: [
        'Artificial Intelligence',
        'Data Analytics',
        'Network And Security',
        'Robotics'
      ],
      highlights: [
        'Industry-aligned curriculum',
        'Hands-on projects',
        'Experienced faculty',
        'Strong placement record'
      ]
    },
    {
      title: 'B.Tech in Electronics And Computers Engineering',
      duration: '4 Years',
      description: 'Focuses on the integration of electronics and computer systems, with a specialization in VLSI.',
      specializations: [
        'VLSI'
      ],
      highlights: [
        'State-of-the-art labs',
        'Practical approach',
        'Research opportunities'
      ]
    },
    {
      title: 'B.Tech in Mechanical Engineering',
      duration: '4 Years',
      description: 'Covers the design, analysis, manufacturing, and maintenance of mechanical systems.',
      specializations: [
        'Smart Manufacturing'
      ],
      highlights: [
        'Modern workshops',
        'Industry exposure',
        'Innovation-driven learning'
      ]
    },
    {
      title: 'B.Tech in Civil Engineering',
      duration: '4 Years',
      description: 'Deals with the design, construction, and maintenance of the physical and naturally built environment.',
      specializations: [
        'Smart Infrastructure'
      ],
      highlights: [
        'Sustainable practices',
        'Field visits',
        'Expert guest lectures'
      ]
    },
    {
      title: 'B.Tech in Electrical And Electronics Engineering',
      duration: '4 Years',
      description: 'Combines electrical power systems with electronic circuits and devices.',
      specializations: [
        'Energy Engineering'
      ],
      highlights: [
        'Advanced laboratories',
        'Renewable energy focus',
        'Project-based learning'
      ]
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ color: '#800000', fontWeight: 'bold' }}>
        Undergraduate Programs
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

export default Undergraduate;