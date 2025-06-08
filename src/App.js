import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Research from './pages/Research';
import CampusLife from './pages/CampusLife';
import ResearchAndInnovation from './pages/ResearchAndInnovation';
import Undergraduate from './pages/academics/Undergraduate';
import Postgraduate from './pages/academics/Postgraduate';
import PhD from './pages/academics/PhD';
import Calendar from './pages/academics/Calendar';
import Process from './pages/admissions/Process';
import Programs from './pages/admissions/Programs';
import Fees from './pages/admissions/Fees';
import International from './pages/admissions/International';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#800000', // VIT-AP maroon
    },
    secondary: {
      main: '#000000',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/academics/undergraduate" element={<Undergraduate />} />
              <Route path="/academics/postgraduate" element={<Postgraduate />} />
              <Route path="/academics/phd" element={<PhD />} />
              <Route path="/academics/calendar" element={<Calendar />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/admissions/process" element={<Process />} />
              <Route path="/admissions/programs" element={<Programs />} />
              <Route path="/admissions/fees" element={<Fees />} />
              <Route path="/admissions/international" element={<International />} />
              <Route path="/research" element={<Research />} />
              <Route path="/research-and-innovation" element={<ResearchAndInnovation />} />
              <Route path="/campus-life" element={<CampusLife />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
