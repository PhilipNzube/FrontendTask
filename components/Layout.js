// components/Layout.js
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { Box } from '@mui/material';

const Layout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(true); // State to control sidebar visibility

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen); // Toggle sidebar visibility
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 600) {
                setSidebarOpen(false); // Shrink sidebar on small screens
            } else {
                setSidebarOpen(true); // Expand sidebar on larger screens
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call on mount to set initial state

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Box sx={{ display: 'flex', position: 'relative' }}>
            <Box
                sx={{
                    position: sidebarOpen && window.innerWidth < 600 ? 'absolute' : 'relative', // Use absolute positioning only on small screens
                    width: sidebarOpen ? '240px' : '60px',
                    height: '100vh',
                    bgcolor: '#f0f0f0',
                    borderRight: '2px solid rgba(128, 128, 128, 0.5)',
                    zIndex: 1000, // Ensure sidebar is above main content
                    transition: 'width 0.3s', // Smooth transition for width change
                }}
            >
                <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    transition: 'margin-left 0.3s',
                    marginLeft: sidebarOpen ? '50px' : '6px', // Adjust margin for larger screens
                    width: '100%', // Full width regardless of sidebar state
                }}
            >
                {children}
            </Box>
        </Box>
    );
};

export default Layout;