// pages/index.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import { Box } from '@mui/material';

const Home = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* Your main content goes here */}
      </ Box>
      </Box>
  );
};

export default Home;