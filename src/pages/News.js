import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Stack,
} from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import ScienceIcon from '@mui/icons-material/Science';

const News = () => {
  const newsItems = [
    {
      title: 'VIT-AP University Ranks #1 in Andhra Pradesh',
      date: 'March 15, 2024',
      description: 'VIT-AP University has been ranked #1 in Andhra Pradesh by the National Institutional Ranking Framework (NIRF).'
    },
    {
      title: 'International Conference on AI and Machine Learning',
      date: 'March 10, 2024',
      description: 'The Department of Computer Science is organizing an international conference on AI and Machine Learning.'
    },
    {
      title: 'New Research Center Inauguration',
      date: 'March 5, 2024',
      description: 'A new research center for Advanced Materials and Nanotechnology was inaugurated at VIT-AP.'
    },
    {
      title: 'Placement Drive Success',
      date: 'March 1, 2024',
      description: 'VIT-AP achieves 95% placement rate with top companies recruiting our students.'
    }
  ];

  const upcomingEvents = [
    {
      title: 'Campus Cultural Festival',
      date: 'April 20, 2024',
      location: 'Main Auditorium',
    },
    {
      title: 'Career Fair 2024',
      date: 'April 25, 2024',
      location: 'Sports Complex',
    },
    {
      title: 'Alumni Meet',
      date: 'May 5, 2024',
      location: 'Conference Hall',
    },
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
            News & Events
          </Typography>
          <Typography variant="h5">
            Stay Updated with Latest News and Upcoming Events
          </Typography>
        </Container>
      </Box>

      {/* News Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Latest News
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {newsItems.map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {item.date}
                  </Typography>
                  <Typography variant="body1">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Upcoming Events */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container>
          <Typography variant="h3" align="center" gutterBottom>
            Upcoming Events
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {upcomingEvents.map((event, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {event.title}
                    </Typography>
                    <Typography color="text.secondary" gutterBottom>
                      Date: {event.date}
                    </Typography>
                    <Typography color="text.secondary">
                      Location: {event.location}
                    </Typography>
                    <Button
                      variant="outlined"
                      color="primary"
                      sx={{ mt: 2 }}
                    >
                      Add to Calendar
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Newsletter Signup */}
      <Container sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Stay Connected
        </Typography>
        <Typography paragraph>
          Subscribe to our newsletter to receive updates about news and events.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 2 }}
        >
          Subscribe Now
        </Button>
      </Container>

      {/* News About VIT-AP Section */}
      <Box sx={{ py: 8, bgcolor: 'white' }}>
        {/* ... existing code for News About VIT-AP Section ... */}
      </Box>

      {/* The Wall of Socials from VIT-AP Section */}
      <Box sx={{ py: 8, bgcolor: 'white' }}>
        {/* ... existing code for The Wall of Socials from VIT-AP Section ... */}
      </Box>
    </Box>
  );
};

export default News; 