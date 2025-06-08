import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box, Chip } from '@mui/material';

const Programs = () => {
  const programs = [
    {
      category: "Undergraduate Programs",
      items: [
        {
          name: "B.Tech Computer Science",
          duration: "4 Years",
          seats: 180,
          eligibility: "10+2 with PCM",
          highlights: ["AI/ML Specialization", "Industry Projects", "Internship Opportunities"]
        },
        {
          name: "B.Tech Electronics",
          duration: "4 Years",
          seats: 120,
          eligibility: "10+2 with PCM",
          highlights: ["VLSI Design", "IoT Specialization", "Research Projects"]
        },
        {
          name: "B.Tech Mechanical",
          duration: "4 Years",
          seats: 120,
          eligibility: "10+2 with PCM",
          highlights: ["Robotics", "Automation", "Industry 4.0"]
        }
      ]
    },
    {
      category: "Postgraduate Programs",
      items: [
        {
          name: "M.Tech Computer Science",
          duration: "2 Years",
          seats: 60,
          eligibility: "B.Tech in CSE/IT",
          highlights: ["Advanced AI", "Cloud Computing", "Research Focus"]
        },
        {
          name: "MBA",
          duration: "2 Years",
          seats: 120,
          eligibility: "Any Bachelor's Degree",
          highlights: ["Industry Interface", "Case Studies", "Placement Support"]
        }
      ]
    },
    {
      category: "Ph.D. Programs",
      items: [
        {
          name: "Ph.D. in Engineering",
          duration: "3-5 Years",
          seats: "As per availability",
          eligibility: "Master's in Engineering",
          highlights: ["Research Grants", "Publications", "Industry Collaboration"]
        },
        {
          name: "Ph.D. in Sciences",
          duration: "3-5 Years",
          seats: "As per availability",
          eligibility: "Master's in Science",
          highlights: ["Research Labs", "International Conferences", "Teaching Opportunities"]
        }
      ]
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ color: '#800000', fontWeight: 'bold' }}>
        Available Programs
      </Typography>

      {programs.map((category, index) => (
        <Card key={index} sx={{ mb: 4, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h4" gutterBottom sx={{ color: '#800000' }}>
              {category.category}
            </Typography>
            
            <Grid container spacing={3}>
              {category.items.map((program, idx) => (
                <Grid item xs={12} md={6} key={idx}>
                  <Card sx={{ 
                    height: '100%',
                    bgcolor: '#fff3f3',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 4
                    }
                  }}>
                    <CardContent>
                      <Typography variant="h6" gutterBottom sx={{ color: '#800000' }}>
                        {program.name}
                      </Typography>
                      
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="body2" color="text.secondary">
                          Duration: {program.duration}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Seats: {program.seats}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Eligibility: {program.eligibility}
                        </Typography>
                      </Box>

                      <Typography variant="subtitle2" gutterBottom sx={{ color: '#800000' }}>
                        Program Highlights:
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {program.highlights.map((highlight, hIdx) => (
                          <Chip
                            key={hIdx}
                            label={highlight}
                            size="small"
                            sx={{
                              bgcolor: '#800000',
                              color: 'white',
                              '&:hover': {
                                bgcolor: '#600000'
                              }
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      ))}

      <Box sx={{ mt: 4, p: 3, bgcolor: '#f5f5f5', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom sx={{ color: '#800000' }}>
          Important Notes
        </Typography>
        <Typography variant="body2" paragraph>
          • All programs are approved by AICTE and UGC
        </Typography>
        <Typography variant="body2" paragraph>
          • Seats are subject to availability and government regulations
        </Typography>
        <Typography variant="body2">
          • For detailed program structure and curriculum, please visit the respective department pages
        </Typography>
      </Box>
    </Container>
  );
};

export default Programs; 