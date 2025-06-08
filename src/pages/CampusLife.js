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
} from '@mui/material';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import GroupsIcon from '@mui/icons-material/Groups';

const CampusLife = () => {
  const activities = [
    {
      title: 'Sports',
      icon: <SportsSoccerIcon sx={{ fontSize: 40 }} />,
      description: 'State-of-the-art sports facilities including cricket, football, basketball, and indoor games',
      image: 'https://source.unsplash.com/random/800x600/?sports',
    },
    {
      title: 'Cultural Events',
      icon: <TheaterComedyIcon sx={{ fontSize: 40 }} />,
      description: 'Annual cultural festival, music competitions, dance performances, and more',
      image: 'https://source.unsplash.com/random/800x600/?theater',
    },
    {
      title: 'Clubs & Societies',
      icon: <GroupsIcon sx={{ fontSize: 40 }} />,
      description: 'Technical clubs, cultural clubs, and various student organizations',
      image: 'https://source.unsplash.com/random/800x600/?students',
    },
    {
      title: 'Hostel Life',
      icon: <GroupsIcon sx={{ fontSize: 40 }} />,
      description: 'Modern hostel facilities with 24/7 security and amenities',
      image: 'https://source.unsplash.com/random/800x600/?hostel',
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
            Campus Life
          </Typography>
          <Typography variant="h5">
            Experience the Vibrant Life on Campus
          </Typography>
        </Container>
      </Box>

      {/* Activities Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Student Activities
        </Typography>
        <Typography paragraph align="center">
          Discover the diverse range of activities and opportunities available
          for students to engage, learn, and grow.
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {activities.map((activity, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={activity.image}
                  alt={activity.title}
                />
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    {activity.icon}
                    <Typography variant="h5" sx={{ ml: 2 }}>
                      {activity.title}
                    </Typography>
                  </Box>
                  <Typography paragraph>
                    {activity.description}
                  </Typography>
                  <Button variant="contained" color="primary">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Facilities Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container>
          <Typography variant="h3" align="center" gutterBottom>
            Campus Facilities
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://source.unsplash.com/random/800x600/?library"
                  alt="Library"
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Modern Library
                  </Typography>
                  <Typography>
                    A well-equipped library with digital resources and study spaces.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://source.unsplash.com/random/800x600/?gym"
                  alt="Sports Complex"
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Sports Complex
                  </Typography>
                  <Typography>
                    Indoor and outdoor sports facilities for various activities.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://source.unsplash.com/random/800x600/?cafeteria"
                  alt="Cafeteria"
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Cafeteria
                  </Typography>
                  <Typography>
                    Modern dining facilities with diverse food options.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Container sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Join Our Vibrant Community
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 2 }}
        >
          Explore More
        </Button>
      </Container>
    </Box>
  );
};

export default CampusLife; 