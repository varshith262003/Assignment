import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const Fees = () => {
  const feeStructure = [
    {
      program: "B.Tech Programs",
      tuitionFee: "2,50,000",
      hostelFee: "1,20,000",
      messFee: "80,000",
      otherFees: "30,000",
      total: "4,80,000"
    },
    {
      program: "M.Tech Programs",
      tuitionFee: "1,80,000",
      hostelFee: "1,20,000",
      messFee: "80,000",
      otherFees: "30,000",
      total: "4,10,000"
    },
    {
      program: "MBA Program",
      tuitionFee: "2,00,000",
      hostelFee: "1,20,000",
      messFee: "80,000",
      otherFees: "30,000",
      total: "4,30,000"
    }
  ];

  const scholarships = [
    {
      name: "Merit Scholarship",
      description: "Based on academic performance and entrance exam rank",
      eligibility: "Top 100 rank holders in VIT-AP entrance exam",
      amount: "50% tuition fee waiver",
      duration: "Entire program duration"
    },
    {
      name: "Sports Scholarship",
      description: "For outstanding sports achievements",
      eligibility: "National/State level sports achievements",
      amount: "25% tuition fee waiver",
      duration: "Yearly renewal based on performance"
    },
    {
      name: "Need-based Scholarship",
      description: "For economically disadvantaged students",
      eligibility: "Family income below 5 LPA",
      amount: "Up to 100% tuition fee waiver",
      duration: "Yearly renewal based on need"
    },
    {
      name: "Research Scholarship",
      description: "For Ph.D. students with research potential",
      eligibility: "Based on research proposal and interview",
      amount: "Full tuition fee + monthly stipend",
      duration: "Entire Ph.D. duration"
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ color: '#800000', fontWeight: 'bold' }}>
        Fees & Scholarships
      </Typography>

      <Card sx={{ mb: 4, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom sx={{ color: '#800000' }}>
            Fee Structure (Per Year)
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold', color: '#800000' }}>Program</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: '#800000' }}>Tuition Fee</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: '#800000' }}>Hostel Fee</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: '#800000' }}>Mess Fee</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: '#800000' }}>Other Fees</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: '#800000' }}>Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {feeStructure.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.program}</TableCell>
                    <TableCell>₹{row.tuitionFee}</TableCell>
                    <TableCell>₹{row.hostelFee}</TableCell>
                    <TableCell>₹{row.messFee}</TableCell>
                    <TableCell>₹{row.otherFees}</TableCell>
                    <TableCell>₹{row.total}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

      <Typography variant="h4" gutterBottom sx={{ color: '#800000' }}>
        Available Scholarships
      </Typography>

      <Grid container spacing={3}>
        {scholarships.map((scholarship, index) => (
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
                <Typography variant="h6" gutterBottom sx={{ color: '#800000' }}>
                  {scholarship.name}
                </Typography>
                <Typography variant="body2" paragraph>
                  {scholarship.description}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="subtitle2" sx={{ color: '#800000' }}>
                    Eligibility:
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {scholarship.eligibility}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ color: '#800000' }}>
                    Benefits:
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {scholarship.amount}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ color: '#800000' }}>
                    Duration:
                  </Typography>
                  <Typography variant="body2">
                    {scholarship.duration}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 4, p: 3, bgcolor: '#f5f5f5', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom sx={{ color: '#800000' }}>
          Important Notes
        </Typography>
        <Typography variant="body2" paragraph>
          • All fees are subject to revision as per university norms
        </Typography>
        <Typography variant="body2" paragraph>
          • Hostel and mess fees are optional for day scholars
        </Typography>
        <Typography variant="body2" paragraph>
          • Scholarship applications must be submitted within 30 days of admission
        </Typography>
        <Typography variant="body2">
          • For more information, contact the Admissions Office
        </Typography>
      </Box>
    </Container>
  );
};

export default Fees; 