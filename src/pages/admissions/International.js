import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SchoolIcon from '@mui/icons-material/School';
import LanguageIcon from '@mui/icons-material/Language';
import WorkIcon from '@mui/icons-material/Work';
import HomeIcon from '@mui/icons-material/Home';

const International = () => {
  const requirements = [
    {
      title: "Academic Requirements",
      icon: <SchoolIcon />,
      items: [
        "Equivalent qualification to Indian 10+2 system",
        "Minimum 60% aggregate in qualifying examination",
        "English proficiency test scores (TOEFL/IELTS)",
        "Valid passport and student visa"
      ]
    },
    {
      title: "Language Requirements",
      icon: <LanguageIcon />,
      items: [
        "TOEFL score of 80 or above",
        "IELTS score of 6.0 or above",
        "English language proficiency certificate",
        "Interview assessment"
      ]
    },
    {
      title: "Visa Requirements",
      icon: <WorkIcon />,
      items: [
        "Valid passport with 6 months validity",
        "Student visa (F-1 category)",
        "Financial proof of funds",
        "Health insurance coverage"
      ]
    },
    {
      title: "Accommodation",
      icon: <HomeIcon />,
      items: [
        "On-campus housing available",
        "International student dormitory",
        "24/7 security",
        "Modern amenities and facilities"
      ]
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ color: '#800000', fontWeight: 'bold' }}>
        International Students
      </Typography>

      <Card sx={{ mb: 4, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom sx={{ color: '#800000' }}>
            Welcome to VIT-AP University
          </Typography>
          <Typography variant="body1" paragraph>
            VIT-AP University welcomes students from around the world to experience quality education in a diverse and inclusive environment. Our international community represents various countries, bringing together different cultures and perspectives.
          </Typography>
        </CardContent>
      </Card>

      <Grid container spacing={3}>
        {requirements.map((section, index) => (
          <Grid item xs={12} md={6} key={index}>
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
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  {section.icon}
                  <Typography variant="h6" sx={{ ml: 1, color: '#800000' }}>
                    {section.title}
                  </Typography>
                </Box>
                <List>
                  {section.items.map((item, idx) => (
                    <ListItem key={idx}>
                      <ListItemIcon>
                        <CheckCircleIcon sx={{ color: '#800000' }} />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 4, p: 3, bgcolor: '#f5f5f5', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom sx={{ color: '#800000' }}>
          Support Services
        </Typography>
        <Typography variant="body2" paragraph>
          • International Student Office for visa and immigration support
        </Typography>
        <Typography variant="body2" paragraph>
          • Airport pickup service for new students
        </Typography>
        <Typography variant="body2" paragraph>
          • Cultural orientation program
        </Typography>
        <Typography variant="body2" paragraph>
          • Language support and tutoring
        </Typography>
        <Typography variant="body2">
          • 24/7 emergency support
        </Typography>
      </Box>

      <Box sx={{ mt: 4, p: 3, bgcolor: '#fff3f3', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom sx={{ color: '#800000' }}>
          Contact Information
        </Typography>
        <Typography variant="body2" paragraph>
          International Admissions Office
        </Typography>
        <Typography variant="body2" paragraph>
          Email: international@vitap.ac.in
        </Typography>
        <Typography variant="body2" paragraph>
          Phone: +91-866-2493777
        </Typography>
        <Typography variant="body2">
          Working Hours: Monday to Friday, 9:00 AM to 5:00 PM IST
        </Typography>
      </Box>
    </Container>
  );
};

export default International; 