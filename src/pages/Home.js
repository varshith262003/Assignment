import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Button, Grid, Card, CardContent, CardMedia, Divider, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { ArrowForward } from '@mui/icons-material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('Undergraduate');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7_zDLap4U6Pv5gdciQF0IBX7UX8Vi3o2CAQ&s',
    'https://events.vitap.ac.in/storage/01J0212R2ZR8A8K1QKWY4JXDKY.webp',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdIjlHryVx4WAfGL5A2DhXGm-rZH8qgV60-g&s',
    'https://vitap.ac.in/_next/static/media/governancenav.3eec7c1e.png',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % heroImages.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const programs = {
    Undergraduate: [
      'B.Tech In Computer Science And Engineering',
      'B.Tech In Computer Science And Engineering Specialization In AI',
      'B.Tech In Computer Science And Engineering Specialization In Data Analytics',
      'B.Tech In Computer Science And Engineering Specialization In Network And Security',
      'B.Tech In Computer Science And Engineering Specialization In Robotics',
      'B.Tech In Electronics And Computers Engineering Specialization In VLSI',
      'B.Tech In Mechanical Engineering',
      'B.Tech In Mechanical Engineering Specialization In Smart Manufacturing',
      'B.Tech In Civil Engineering',
      'B.Tech In Civil Engineering Specialization In Smart Infrastructure',
      'B.Tech In Electrical And Electronics Engineering',
      'B.Tech In Electrical And Electronics Engineering Specialization In Energy Engineering',
    ],
    Integrated: [
      'Integrated M.Tech in Computer Science',
      'Integrated M.Tech in Electronics and Communication Engineering',
    ],
    Postgraduate: [
      'M.Tech in Computer Science and Engineering',
      'M.Tech in VLSI Design',
      'MBA',
    ],
    Doctorial: [
      'Ph.D. in Computer Science',
      'Ph.D. in Electrical and Electronics Engineering',
      'Ph.D. in Mechanical Engineering',
    ],
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const recruiterLogos = [
    { name: 'Google', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png' },
    { name: 'Microsoft', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2560px-Microsoft_logo.svg.png' },
    { name: 'Amazon', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png' },
    { name: 'Apple', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png' },
    { name: 'Meta', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png' },
    { name: 'IBM', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png' },
    { name: 'Oracle', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png' },
    { name: 'Intel', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282020%2C_light_blue%29.svg/2560px-Intel_logo_%282020%2C_light_blue%29.svg.png' },
    { name: 'Cisco', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/2560px-Cisco_logo_blue_2016.svg.png' },
    { name: 'HP', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/2560px-HP_logo_2012.svg.png' },
    { name: 'Dell', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016.svg/2560px-Dell_logo_2016.svg.png' },
    { name: 'SAP', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/2560px-SAP_2011_logo.svg.png' },
  ];

  const schools = [
    { name: 'School of Computer Science & Engineering', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
    { name: 'School of Electrical Science & Engineering', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
    { name: 'School of Civil Engineering', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
    { name: 'School of Mechanical Engineering', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
    { name: 'School of Electronics Engineering', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
    { name: 'School of Chemical Engineering', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
  ];

  const mainEvents = [
    {
      image: 'https://vitap.ac.in/_next/static/media/governancenav.3eec7c1e.png',
      title: 'VTAPP International Tech Fest by VIT-AP',
      date: '19th',
      month: 'Sept',
    },
    {
      image: 'https://vitap.ac.in/_next/static/media/governancenav.3eec7c1e.png',
      title: 'VTAPP International Tech Fest by VIT-AP',
      date: '19th',
      month: 'Sept',
    },
    {
      image: 'https://vitap.ac.in/_next/static/media/governancenav.3eec7c1e.png',
      title: 'VTAPP International Tech Fest by VIT-AP',
      date: '19th',
      month: 'Sept',
    },
  ];

  const smallEvents = [
    { date: '04 Apr', title: 'CSI Meet\'n Greet\'23', description: 'Lorem ipsum dolor sit amet consectetur. A nulla donec cursus tincidunt egestas eget dolor ultricies neque. Interdum' },
    { date: '04 Apr', title: 'CSI Meet\'n Greet\'23', description: 'Lorem ipsum dolor sit amet consectetur. A nulla donec cursus tincidunt egestas eget dolor ultricies neque. Interdum' },
    { date: '04 Apr', title: 'CSI Meet\'n Greet\'23', description: 'Lorem ipsum dolor sit amet consectetur. A nulla donec cursus tincidunt egestas eget dolor ultricies neque. Interdum' },
    { date: '04 Apr', title: 'CSI Meet\'n Greet\'23', description: 'Lorem ipsum dolor sit amet consectetur. A nulla donec cursus tincidunt egestas eget dolor ultricies neque. Interdum' },
    { date: '04 Apr', title: 'CSI Meet\'n Greet\'23', description: 'Lorem ipsum dolor sit amet consectetur. A nulla donec cursus tincidunt egestas eget dolor ultricies neque. Interdum' },
    { date: '04 Apr', title: 'CSI Meet\'n Greet\'23', description: 'Lorem ipsum dolor sit amet consectetur. A nulla donec cursus tincidunt egestas eget dolor ultricies neque. Interdum' },
  ];

  const researchImages = [
    'https://news.niagara.edu/assets/news/Angel-Parker-with-Michael-Barnwell.jpg',
    'https://static.vecteezy.com/system/resources/previews/027/230/183/large_2x/university-students-reading-books-in-library-for-research-photo.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLlVClLHV1nEkM7cIETswyfLfmVCuNnuaXxw&s',
  ];

  // Placeholder images for Life @ VIT-AP section
  const lifeAtVitApImages = {
    top_left: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2gdzlNhz0TgkvRZsEfT1-NLBCdkrHITPxPQ&s',
    top_middle: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE4y3PrG2wdEuZAsqvjnUDkWFoYdAJ_V9W9w&s',
    top_right: 'https://warwick.ac.uk/fac/sci/lifesci/study/research/300418-wu-kbeer-265.jpg',
    middle_left: 'https://plaksha-university-bucket.s3.ap-southeast-1.amazonaws.com/public/assets/1695114631s8%20%281%29.jpg',
    middle_right: 'https://www.ntvenglish.com/wp-content/uploads/2024/09/vitap.jpg',
    bottom_left: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXr46q-f-rnvkY7efsuajxc_hQde2l6kKAsg&s',
    bottom_middle: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Students socializing
    bottom_right: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Student in library
  };

  const newsItems = [
    {
      id: 1,
      date: "03-08-2024",
      title: "Jobs aplenty; students need to leverage AI, ML, blockchain",
      description:
        "",
      image: "https://stage.vit.ac.in/system/files/Times%20of%20India_1.jpg",
    },
    {
      id: 2,
      date: "03-08-2024",
      title: "Jobs aplenty; students need to leverage AI, ML, blockchain",
      description:
        "",
      image: "https://stage.vit.ac.in/system/files/Times%20of%20India_1.jpg",
    },
    {
      id: 3,
      date: "03-08-2024",
      title: "Jobs aplenty; students need to leverage AI, ML, blockchain",
      description:
        "",
      image: "https://stage.vit.ac.in/system/files/Times%20of%20India_1.jpg",
    },
  ];

  const socialImages = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGADwG_ycPm9_tEgUR9vtfwruCtlXNqWoTMw&s',
    'https://media.istockphoto.com/id/620952978/photo/female-student-studying-at-college-library.jpg?s=612x612&w=0&k=20&c=adgCR7el6C5l3mg_ermcj8-1G78HmVV5FbR4KzlbVP4=',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQOjnS55ME5UHR1nK22TRMFfnmKt4AH0QGlQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGADwG_ycPm9_tEgUR9vtfwruCtlXNqWoTMw&s',
    'https://media.istockphoto.com/id/620952978/photo/female-student-studying-at-college-library.jpg?s=612x612&w=0&k=20&c=adgCR7el6C5l3mg_ermcj8-1G78HmVV5FbR4KzlbVP4=',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQOjnS55ME5UHR1nK22TRMFfnmKt4AH0QGlQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGADwG_ycPm9_tEgUR9vtfwruCtlXNqWoTMw&s',
    'https://media.istockphoto.com/id/620952978/photo/female-student-studying-at-college-library.jpg?s=612x612&w=0&k=20&c=adgCR7el6C5l3mg_ermcj8-1G78HmVV5FbR4KzlbVP4=',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQOjnS55ME5UHR1nK22TRMFfnmKt4AH0QGlQ&s',
  ];

  const jumbledSocialImages = [
    socialImages[0], // Row 1, Col 1 (Tall)
    socialImages[1], // Row 1, Col 2 (Short)
    socialImages[0], // Row 1, Col 3 (Tall)

    socialImages[1], // Row 2, Col 1 (Short)
    socialImages[1], // Row 2, Col 2 (Short)
    socialImages[2], // Row 2, Col 3 (Tall)

    socialImages[0], // Row 3, Col 1 (Tall)
    socialImages[2], // Row 3, Col 2 (Tall)
    socialImages[0], // Row 3, Col 3 (Tall)
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: '600px',
          backgroundColor: '#800000',
          display: 'flex',
          alignItems: 'center',
          backgroundImage: `url(${heroImages[currentImageIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 1s ease-in-out',
        }}
      >
        <Container maxWidth="lg" sx={{ color: 'white', zIndex: 1, textAlign: 'left' }}>
          <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
            Welcome to
          </Typography>
          <Typography variant="h1" sx={{ fontWeight: 'bold', mb: 3, color: '#ffcc00' }}>
            VIT-AP University
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            APPLY KNOWLEDGE, IMPROVE LIFE
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: '#ffcc00',
              color: '#800000',
              fontWeight: 'bold',
              py: 1.5,
              px: 4,
              fontSize: '1.1rem',
              '&:hover': { bgcolor: '#e6b800' }
            }}
          >
            CONTACT US
          </Button>
        </Container>
      </Box>

      {/* About VIT-AP and OUR ANNOUNCEMENTS Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {/* About VIT-AP (Left Column) */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                color: '#800000',
                fontWeight: 'bold',
                mb: 4
              }}
            >
              About VIT-AP
            </Typography>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="VIT-AP Campus"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                mb: 3
              }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/800x400?text=VIT-AP+Campus';
              }}
            />
            <Typography variant="body1" sx={{ mb: 4 }}>
              VIT-AP University is one of India's Best Top Emerging Universities
            </Typography>
          </Grid>

          {/* OUR ANNOUNCEMENTS Section (Right Column) */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  color: '#800000',
                  fontWeight: 'bold',
                  mb: 0
                }}
              >
                OUR ANNOUNCEMENTS
              </Typography>
              <Button
                component={Link}
                to="/announcements"
                sx={{
                  color: '#800000',
                  textTransform: 'none',
                  fontSize: '1rem',
                  '&::after': {
                    content: '""',
                    display: 'block',
                    width: '100%',
                    height: '1px',
                    backgroundColor: '#800000',
                    marginTop: '4px'
                  }
                }}
              >
                View More
              </Button>
            </Box>

            {[  // Announcement items
              { date: '13TH SEP, 2023', text: 'VITREE January 2024 - Apply Now' },
              { date: '17TH SEP, 2023', text: 'VITREE January 2024 - Apply Now' },
              { date: '29TH MAY, 2023', text: 'VITREE January 2024 - Apply Now' },
              { date: '29TH MAY, 2023', text: 'VITREE January 2024 - Apply Now' },
              { date: '17TH SEP, 2023', text: 'VITREE January 2024 - Apply Now' },
              { date: '29TH MAY, 2023', text: 'VITREE January 2024 - Apply Now' }
            ].map((announcement, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Typography variant="subtitle2" color="text.secondary" sx={{ textTransform: 'uppercase' }}>
                  {announcement.date}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#333', mb: 1 }}>
                  {announcement.text}
                </Typography>
                {index < 5 && <Box sx={{ borderBottom: '1px solid #eee', my: 2 }} />}
              </Box>
            ))}
          </Grid>
        </Grid>
      </Container>

      {/* Our Schools Section */}
      <Box sx={{ py: 8, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom sx={{ color: '#800000', fontWeight: 'bold', mb: 6 }}>
            OUR SCHOOLS
          </Typography>
          <Typography variant="body1" align="center" sx={{ mb: 6, color: '#800000' }}>
            At VIT-AP the entire teaching-learning process is concentrated around six schools. A research center is also part of the schools, that encourages students to participate in exciting research projects amongst these departments.
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {schools.map((school, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ maxWidth: 345, mx: 'auto', borderRadius: 2, boxShadow: 3 }}>
                  <CardMedia
                    component="img"
                    height="180"
                    image={school.image}
                    alt={school.name}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/345x180';
                    }}
                  />
                  <CardContent sx={{ bgcolor: 'white' }}>
                    <Typography gutterBottom variant="h6" component="div" sx={{ color: '#800000', fontWeight: 'bold' }}>
                      {school.name}
                    </Typography>
                    <Button
                      size="small"
                      sx={{ color: '#ffcc00', fontWeight: 'bold' }}
                      endIcon={<ArrowForward />}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Programs Offered Section */}
      <Box sx={{ py: 8, bgcolor: '#800000' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" gutterBottom sx={{ color: 'white', fontWeight: 'bold', mb: 2 }}>
            Programs Offered
          </Typography>
          <Typography variant="body1" sx={{ color: 'white', mb: 4, maxWidth: '600px' }}>
            Program covers the entire spectrum of new-age specializations. This program seamlessly integrates basic science concepts to the latest technologies with relevant practice through lab and projects for building problem-solving skills.
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ border: '1px solid white', borderRadius: 1, overflow: 'hidden' }}>
            {Object.keys(programs).map((category) => (
              <Button
                key={category}
                    fullWidth
                onClick={() => handleCategoryClick(category)}
                sx={{
                      justifyContent: 'flex-start',
                  px: 3,
                      py: 1.5,
                      fontSize: '1rem',
                  fontWeight: 'bold',
                      color: selectedCategory === category ? '#800000' : '#800000',
                      bgcolor: selectedCategory === category ? '#ffcc00' : '#D5979C',
                  '&:hover': {
                        bgcolor: selectedCategory === category ? '#e6b800' : '#C08589',
                  },
                      borderBottom: selectedCategory === category ? 'none' : '1px solid white',
                      '&:last-child': { borderBottom: 'none' }
                }}
              >
                {category}
              </Button>
            ))}
          </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Box sx={{ 
                mt: 4, 
                p: 3, 
                bgcolor: '#e0e0e0', 
                borderRadius: 2,
                maxHeight: '400px',
                overflowY: 'auto',
                '&::-webkit-scrollbar': {
                  width: '8px',
                },
                '&::-webkit-scrollbar-track': {
                  background: '#f1f1f1',
                  borderRadius: '10px',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: '#800000',
                  borderRadius: '10px',
                  '&:hover': {
                    background: '#600000',
                  },
                },
              }}>
                <Grid container spacing={1}>
                  {programs[selectedCategory] && programs[selectedCategory].map((program, index) => (
                    <Grid item xs={12} key={index}>
                      <Typography variant="body1" sx={{ 
                        color: '#800000', 
                        fontWeight: 'bold',
                        py: 1,
                        borderBottom: index < programs[selectedCategory].length - 1 ? '1px solid #ccc' : 'none'
                      }}>
                        {program}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Our Events Section */}
      <Box sx={{ py: 8, bgcolor: '#eee' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Typography variant="h4" sx={{ color: '#800000', fontWeight: 'bold' }}>
              Our Events
            </Typography>
            <Button
              variant="text"
              endIcon={<ArrowForward />}
              sx={{ color: '#800000', fontWeight: 'bold' }}
            >
              See all
            </Button>
          </Box>
          <Grid container spacing={4}>
            {mainEvents.map((event, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ maxWidth: 345, mx: 'auto', borderRadius: 2, boxShadow: 3 }}>
                  <CardMedia
                    component="img"
                    height="180"
                    image={event.image}
                    alt={event.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ bgcolor: '#800000', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {smallEvents.map((event, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ display: 'flex', alignItems: 'center', p: 2, borderRadius: 2, boxShadow: 1, bgcolor: 'white' }}>
                  <Box sx={{ bgcolor: '#800000', color: 'white', p: 1, mr: 2, textAlign: 'center', borderRadius: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{event.date.split(' ')[0]}</Typography>
                    <Typography variant="body2">{event.date.split(' ')[1]}</Typography>
                  </Box>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#800000' }}>{event.title}</Typography>
                    <Typography variant="body2" sx={{ color: '#555' }}>{event.description}</Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Research And Innovation Section */}
      <Box sx={{ py: 8, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom sx={{ color: '#800000', fontWeight: 'bold', mb: 6 }}>
            Research And Innovation
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Box
                component="img"
                src={researchImages[0]}
                alt="Research Image 1"
                sx={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                component="img"
                src={researchImages[1]}
                alt="Research Image 2"
                sx={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
              <Box sx={{ bgcolor: '#800000', color: 'white', p: 2, borderRadius: 2, mt: 2 }}>
                <Typography variant="h6" align="center" sx={{ mt: 0, color: 'white', fontWeight: 'bold' }}>
                  Top Quality and Learning Experience
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                component="img"
                src={researchImages[2]}
                alt="Research Image 3"
                sx={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={4} justifyContent="center" sx={{ mt: 6 }}>
            <Grid item xs={12} sm={6} md={4} sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ color: '#800000', fontWeight: 'bold' }}>
                1,000+
            </Typography>
              <Typography variant="body1" sx={{ color: '#555' }}>
                Publications
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ color: '#800000', fontWeight: 'bold' }}>
                300+
              </Typography>
              <Typography variant="body1" sx={{ color: '#555' }}>
                Patents
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ color: '#800000', fontWeight: 'bold' }}>
                1.5 Cr+
              </Typography>
              <Typography variant="body1" sx={{ color: '#555' }}>
                Sponsored Budget
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Life @ VIT-AP Section */}
      <Box sx={{ py: 8, bgcolor: '#eee' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom sx={{ color: '#800000', fontWeight: 'bold', mb: 6 }}>
            Life@ VIT-AP
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <CardMedia
                component="img"
                image={lifeAtVitApImages.top_left}
                alt="Life @ VIT-AP Image"
                sx={{ borderRadius: 2, height: 200, objectFit: 'cover' }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CardMedia
                component="img"
                image={lifeAtVitApImages.top_middle}
                alt="Life @ VIT-AP Image"
                sx={{ borderRadius: 2, height: 200, objectFit: 'cover' }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CardMedia
                component="img"
                image={lifeAtVitApImages.top_right}
                alt="Life @ VIT-AP Image"
                sx={{ borderRadius: 2, height: 200, objectFit: 'cover' }}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <CardMedia
                component="img"
                image={lifeAtVitApImages.middle_left}
                alt="Life @ VIT-AP Image"
                sx={{ borderRadius: 2, height: 200, objectFit: 'cover' }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ bgcolor: 'white', borderRadius: 2, p: 4, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ color: '#800000', fontWeight: 'bold', mb: 1 }}>
                  Explore our campus
                </Typography>
                <Typography variant="h4" sx={{ color: '#800000', fontWeight: 'bold', mb: 2 }}>
                  Life @ VIT-AP
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', mb: 3 }}>
                  Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: '#800000',
                    color: 'white',
                    fontWeight: 'bold',
                    py: 1,
                    px: 3,
                    fontSize: '1rem',
                    '&:hover': { bgcolor: '#660000' },
                    mx: 'auto' // Center the button
                  }}
                >
                  EXPLORE
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CardMedia
                component="img"
                image={lifeAtVitApImages.middle_right}
                alt="Life @ VIT-AP Image"
                sx={{ borderRadius: 2, height: 200, objectFit: 'cover' }}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <CardMedia
                component="img"
                image={lifeAtVitApImages.bottom_left}
                alt="Life @ VIT-AP Image"
                sx={{ borderRadius: 2, height: 200, objectFit: 'cover' }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CardMedia
                component="img"
                image={lifeAtVitApImages.bottom_middle}
                alt="Life @ VIT-AP Image"
                sx={{ borderRadius: 2, height: 200, objectFit: 'cover' }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CardMedia
                component="img"
                image={lifeAtVitApImages.bottom_right}
                alt="Life @ VIT-AP Image"
                sx={{ borderRadius: 2, height: 200, objectFit: 'cover' }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* News about VIT-AP Section */}
      <Box sx={{ py: 8, bgcolor: '#3e2723', color: 'white' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              News about VIT-AP
            </Typography>
            <Button
              variant="text"
              endIcon={<ArrowForward />}
              sx={{ color: '#ffcc00', fontWeight: 'bold' }}
            >
              See all
            </Button>
          </Box>
          <Grid container spacing={4}>
            {newsItems.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{
                  maxWidth: 345,
                  mx: 'auto',
                  borderRadius: 2,
                  boxShadow: 3,
                  height: '100%',
                  bgcolor: '#3e2723', // Dark brown background for cards
                  color: 'white'
                }}>
                  <CardMedia
                    component="img"
                    height="180"
                    image={item.image}
                    alt={item.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="body2" sx={{ color: '#ffcc00', mb: 1 }}>
                      {item.date}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: 'white' }}>
                      {item.title}
                    </Typography>
                    {item.description && (
                      <Typography variant="body2" sx={{ mb: 1, color: 'white' }}>
                        {item.description}
                      </Typography>
                    )}
                    <Typography variant="body2" sx={{ mb: 2, fontStyle: 'italic', color: 'white' }}>
                      {item.author}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2, color: 'white' }}>
                      {item.long_title}
                    </Typography>
                    <Button
                      variant="text"
                      endIcon={<ArrowForward />}
                      sx={{
                        color: '#ffcc00',
                        fontWeight: 'bold',
                        '&:hover': { bgcolor: 'transparent' }
                      }}
                    >
                      READ MORE
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* The Wall of Socials from VIT-AP Section */}
      <Box sx={{ py: 8, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ color: '#800000', fontWeight: 'bold', mb: 1 }}>
                Stay Connected
              </Typography>
              <Typography variant="h3" sx={{ color: '#800000', fontWeight: 'bold', mb: 3 }}>
                The Wall <br /> of Socials <br /> from VIT-AP
              </Typography>
              <Typography variant="body1" sx={{ color: '#800000', mb: 3 }}>
                Follow us on our Socials
              </Typography>
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <IconButton sx={{ color: '#d32f2f', mr: 1 }}><InstagramIcon /></IconButton>
                  <Typography variant="body1" sx={{ color: '#800000' }}>Follow us on Instagram</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <IconButton sx={{ color: '#d32f2f', mr: 1 }}><TwitterIcon /></IconButton>
                  <Typography variant="body1" sx={{ color: '#800000' }}>Tweet with us on X</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <IconButton sx={{ color: '#d32f2f', mr: 1 }}><LinkedInIcon /></IconButton>
                  <Typography variant="body1" sx={{ color: '#800000' }}>Grow with us on LinkedIn</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <IconButton sx={{ color: '#d32f2f', mr: 1 }}><FacebookIcon /></IconButton>
                  <Typography variant="body1" sx={{ color: '#800000' }}>Like us on Facebook</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <IconButton sx={{ color: '#d32f2f', mr: 1 }}><YouTubeIcon /></IconButton>
                  <Typography variant="body1" sx={{ color: '#800000' }}>Watch us on Youtube</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Grid container spacing={1}>
                {jumbledSocialImages.map((image, index) => (
                  <Grid item xs={4} key={index}>
                    <CardMedia
                      component="img"
                      image={image}
                      alt={`Social Image ${index + 1}`}
                      sx={{
                        width: '100%',
                        height: '150px',
                        objectFit: 'cover',
                        borderRadius: 1,
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Number At Glance Section */}
      <Box sx={{ py: 8, bgcolor: '#f5f5f5' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={5}>
              <Box
                component="img"
                src="https://vitap-backend.s3.ap-south-1.amazonaws.com/Paypal_Super_Dream_22bce9807_d6fed6abc0.jpg"
                alt="NXP Achievement"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography variant="h4" sx={{ color: '#800000', fontWeight: 'bold', mb: 2 }}>
                Number At Glance
                    </Typography>
              <Divider sx={{ bgcolor: '#800000', width: '100px', mb: 4 }} />
              <Typography variant="body1" sx={{ mb: 1 }}>
                Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.
              </Typography>
              </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Top Recruiters Section */}
      <Box sx={{ py: 8, bgcolor: '#f5f5f5' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom sx={{ color: '#800000', fontWeight: 'bold', mb: 6 }}>
            TOP RECRUITERS
          </Typography>
          <Box sx={{
            display: 'flex',
            overflowX: 'auto',
            py: 2,
            '&::-webkit-scrollbar': {
              height: '8px',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#ccc',
              borderRadius: '10px',
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: '#f1f1f1',
            },
          }}>
            {recruiterLogos.map((logo, index) => (
              <Box key={index} sx={{
                flexShrink: 0,
                width: '150px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #e0e0e0',
                borderRadius: 1,
                mx: 1,
                bgcolor: 'white',
                p: 2,
              }}>
                <Box
                  component="img"
                  src={logo.image}
                  alt={logo.name}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://via.placeholder.com/150x100?text=${logo.name}`;
                  }}
                />
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Testimonial Section */}
      <Box sx={{
        py: 8,
        bgcolor: '#800000',
        color: 'white',
        textAlign: 'center',
        px: 2,
      }}>
        <Container maxWidth="md">
          <Typography variant="h5" sx={{ mb: 3 }}>
            "Lorem ipsum dolor sit amet consectetur, lorem ipsum
             dolor sit amet consectetur"
          </Typography>
          <Typography variant="subtitle1">
            - Jagadish Mudiganti
          </Typography>
        </Container>
      </Box>

      {/* Pre-Footer Section */}
      <Box sx={{ py: 2, bgcolor: '#f5f5f5' }}>
        <Container maxWidth="lg">
          <Grid container spacing={1}>
            {/* Quick Links */}
            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="subtitle1" sx={{ color: '#800000', fontWeight: 'bold', mb: 1, fontSize: '0.85rem' }}>
                Quick Links
              </Typography>
              <Typography variant="body2" sx={{ mb: 0.25, fontSize: '0.7rem' }}>Careers</Typography>
              <Typography variant="body2" sx={{ mb: 0.25, fontSize: '0.7rem' }}>Gallery</Typography>
              <Typography variant="body2" sx={{ mb: 0.25, fontSize: '0.7rem' }}>Hostels</Typography>
              <Typography variant="body2" sx={{ mb: 0.25, fontSize: '0.7rem' }}>Transport</Typography>
              <Typography variant="body2" sx={{ mb: 0.25, fontSize: '0.7rem' }}>Policies</Typography>
            </Grid>

            {/* VIT Connect */}
            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="subtitle1" sx={{ color: '#800000', fontWeight: 'bold', mb: 1, fontSize: '0.85rem' }}>
                VIT Connect
              </Typography>
              <Typography variant="body2" sx={{ mb: 0.25, fontSize: '0.7rem' }}>V-TOP Login</Typography>
              <Typography variant="body2" sx={{ mb: 0.25, fontSize: '0.7rem' }}>V-TOP Parent Login</Typography>
              <Typography variant="body2" sx={{ mb: 0.25, fontSize: '0.7rem' }}>Mail</Typography>
              <Typography variant="body2" sx={{ mb: 0.25, fontSize: '0.7rem' }}>Alumni</Typography>
              <Typography variant="body2" sx={{ mb: 0.25, fontSize: '0.7rem' }}>Contact Us</Typography>
            </Grid>

            {/* Ranking & Accreditation */}
            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="subtitle1" sx={{ color: '#800000', fontWeight: 'bold', mb: 1, fontSize: '0.85rem' }}>
                Ranking & Accreditation
              </Typography>
              <Typography variant="body2" sx={{ mb: 0.25, fontSize: '0.7rem' }}>RAAC</Typography>
              <Typography variant="body2" sx={{ mb: 0.25, fontSize: '0.7rem' }}>NAAC</Typography>
            </Grid>

            {/* Map */}
            <Grid item xs={12} sm={6} md={6}>
              <Box sx={{ width: '100%', height: '150px', borderRadius: 2, overflow: 'hidden', boxShadow: 3 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.2753303644026!2d80.69766931448835!3d16.48003663428989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35c24e0b0e513d%3A0xf6b5d9d7e7e7e7e7!2sVIT-AP%20University!5e0!3m2!1sen!2sin!4v1678876543210!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="VIT-AP University Location"
                ></iframe>
              </Box>
              <Typography variant="body1" sx={{ color: '#800000', fontWeight: 'bold', mt: 1, mb: 0.5, fontSize: '0.9rem' }}>
                VIT-AP University, Amaravathi
              </Typography>
              <Typography variant="body2" sx={{ color: '#555', mb: 0.5, fontSize: '0.65rem' }}>
                Near Vijayawada - 522241,<br />Andhra Pradesh.
              </Typography>
              <Button
                variant="text"
                endIcon={<ArrowForward />}
                sx={{
                  color: '#800000',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  fontSize: '0.65rem',
                  '&:hover': { bgcolor: 'transparent' }
                }}
              >
                HOW TO REACH VIT-AP
              </Button>
            </Grid>
          </Grid>

          <Grid container spacing={1} sx={{ mt: 1 }}>
            {/* Research */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle1" sx={{ color: '#800000', fontWeight: 'bold', mb: 1, fontSize: '0.85rem' }}>
                Research
              </Typography>
              <Typography variant="body2" sx={{ mb: 0.25, fontSize: '0.7rem' }}>Centers</Typography>
              <Typography variant="body2" sx={{ mb: 0.25, fontSize: '0.7rem' }}>Google Scholar</Typography>
              <Typography variant="body2" sx={{ mb: 0.25, fontSize: '0.7rem' }}>Scopus</Typography>
              <Typography variant="body2" sx={{ mb: 0.25, fontSize: '0.7rem' }}>Patents</Typography>
              <Typography variant="body2" sx={{ mb: 0.25, fontSize: '0.7rem' }}>Projects</Typography>
              <Typography variant="body2" sx={{ mb: 0.25, fontSize: '0.7rem' }}>Publications</Typography>
            </Grid>

            {/* Academics */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle1" sx={{ color: '#800000', fontWeight: 'bold', mb: 1, fontSize: '0.85rem' }}>
                Academics
              </Typography>
              <Typography variant="body2" sx={{ mb: 0.25, fontSize: '0.7rem' }}>Programs Offered</Typography>
              <Typography variant="body2" sx={{ mb: 0.25, fontSize: '0.7rem' }}>Academic Calendar</Typography>
              <Typography variant="body2" sx={{ mb: 0.25, fontSize: '0.7rem' }}>Application Process</Typography>
              <Typography variant="body2" sx={{ mb: 0.25, fontSize: '0.7rem' }}>Fee Structure</Typography>
              <Typography variant="body2" sx={{ mb: 0.25, fontSize: '0.7rem' }}>Scholarship</Typography>
              <Typography variant="body2" sx={{ mb: 0.25, fontSize: '0.7rem' }}>IQAC</Typography>
            </Grid>

            {/* Information */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="subtitle1" sx={{ color: '#800000', fontWeight: 'bold', mb: 1, fontSize: '0.85rem' }}>
                Information
              </Typography>
              <Typography variant="body2" sx={{ mb: 0.25, fontSize: '0.7rem' }}>Public Notice: University Act</Typography>
              <Typography variant="body2" sx={{ mb: 0.25, fontSize: '0.7rem' }}>Forms</Typography>
              <Typography variant="body2" sx={{ mb: 0.25, fontSize: '0.7rem' }}>Directory</Typography>
              <Typography variant="body2" sx={{ mb: 0.25, fontSize: '0.7rem' }}>Feedback</Typography>
              <Typography variant="body2" sx={{ mb: 0.25, fontSize: '0.7rem' }}>Academic Bank of Credit (ABC)</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 