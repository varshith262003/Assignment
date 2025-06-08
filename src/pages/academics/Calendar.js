import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material';

const Calendar = () => {
  const academicEvents = [
    {
      semester: "Fall Semester 2024",
      events: [
        {
          title: "Semester Registration",
          date: "August 1-5, 2024",
          description: "Online registration for all students"
        },
        {
          title: "Orientation Program",
          date: "August 10-12, 2024",
          description: "New student orientation and campus tour"
        },
        {
          title: "Classes Begin",
          date: "August 15, 2024",
          description: "First day of classes for all programs"
        },
        {
          title: "Mid-Semester Examinations",
          date: "October 15-20, 2024",
          description: "Mid-term examinations for all courses"
        },
        {
          title: "Semester Break",
          date: "December 20-31, 2024",
          description: "Winter break for all students"
        }
      ]
    },
    {
      semester: "Spring Semester 2025",
      events: [
        {
          title: "Semester Registration",
          date: "January 1-5, 2025",
          description: "Online registration for all students"
        },
        {
          title: "Classes Begin",
          date: "January 10, 2025",
          description: "First day of classes for all programs"
        },
        {
          title: "Mid-Semester Examinations",
          date: "March 15-20, 2025",
          description: "Mid-term examinations for all courses"
        },
        {
          title: "Final Examinations",
          date: "May 15-30, 2025",
          description: "End semester examinations"
        },
        {
          title: "Summer Break",
          date: "June 1 - July 31, 2025",
          description: "Summer vacation for all students"
        }
      ]
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ color: '#800000', fontWeight: 'bold' }}>
        Academic Calendar
      </Typography>

      {academicEvents.map((semester, index) => (
        <Card key={index} sx={{ mb: 4, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#800000' }}>
              {semester.semester}
            </Typography>

            <Grid container spacing={3}>
              {semester.events.map((event, idx) => (
                <Grid item xs={12} md={6} key={idx}>
                  <Card sx={{ 
                    bgcolor: '#fff3f3',
                    height: '100%',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 4
                    }
                  }}>
                    <CardContent>
                      <Typography variant="h6" gutterBottom sx={{ color: '#800000' }}>
                        {event.title}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                        {event.date}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {event.description}
                      </Typography>
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
          • All dates are subject to change. Please check the website regularly for updates.
        </Typography>
        <Typography variant="body2" paragraph>
          • Students are advised to plan their travel and other activities according to the academic calendar.
        </Typography>
        <Typography variant="body2">
          • For any queries regarding the academic calendar, please contact the Academic Office.
        </Typography>
      </Box>
    </Container>
  );
};

export default Calendar; 