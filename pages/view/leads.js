// pages/view/leads.js
import React from 'react';
import { Box, Typography, Button, Divider, Tooltip } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddIcon from '@mui/icons-material/Add';
import RefreshIcon from '@mui/icons-material/Refresh';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SaveIcon from '@mui/icons-material/Save';
import FilterListIcon from '@mui/icons-material/FilterList';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import ExpandMore from '@mui/icons-material';

const Leads = () => {
    return (
        <Box sx={{ padding: 2 }}>
            {/* Header Section */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    border: '1px solid rgba(0, 0, 0, 0.12)',
                    boxShadow: 2,
                    borderRadius: 1,
                    padding: 1,
                    marginBottom: 2,
                    flexWrap: 'wrap', // Allow wrapping for responsiveness
                }}
            >
                <Typography variant="h6" sx={{ flexGrow: 1, fontSize: { xs: '1rem', sm: '1.25rem' }, color: 'black' }}>
                    My Open Leads
                </Typography>
                <ExpandMore />

                {/* Action Buttons Section */}
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginLeft: 2 }}>
                    {['Show Chart', 'Focused View', 'New', 'Refresh', 'Collaborate', 'Delete'].map((action, index) => (
                        <Tooltip title={action} arrow key={index}>
                            <Button
                                startIcon={getIcon(action)}
                                variant="text"
                                sx={{
                                    minWidth: 0,
                                    fontSize: { xs: '0.75rem', sm: '0.875rem' },
                                    marginLeft: 1, // Equal spacing
                                }}
                            >
                                <Typography variant="body2" sx={{ display: { xs: 'none', sm: 'block' }, color: 'black' }}>
                                    {action}
                                </Typography>
                            </Button>
                        </Tooltip>
                    ))}
                </Box>
            </Box>

            {/* Divider */}
            <Divider sx={{ marginY: 2 }} />

            {/* Additional Options Section */}
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                <ArrowDropDownIcon sx={{ color: 'black' }} />
                <MoreVertIcon sx={{ marginLeft: 1, color: 'black' }} />
                {['Smart Data', 'Edit Filters', 'Edit Columns'].map((option, index) => (
                    <Tooltip title={option} arrow key={index}>
                        <Button
                            startIcon={<FilterListIcon sx={{ color: 'black' }} />}
                            variant="outlined"
                            sx={{
                                borderRadius: 1,
                                marginLeft: 1,
                                fontSize: { xs: '0.75rem', sm: '0.875rem' },
                                height: '40px', // Set height to match
                            }}
                        >
                            <Typography variant="body2" sx={{ display: { xs: 'none', sm: 'block' }, color: 'black' }}>
                                {option}
                            </Typography>
                        </Button>
                    </Tooltip>
                ))}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'blue',
                        color: 'white',
                        padding: 1,
                        borderRadius: 1,
                        marginLeft: 1, // Add margin for spacing
                        height: '20px',
                    }}
                >
                    <Button
                        startIcon={<SaveIcon sx={{ color: 'white' }} />}
                        variant="text"
                        sx={{
                            minWidth: 0,
                            fontSize: { xs: '0.75rem', sm: '0.875rem' },
                        height: '40px', // Set height to match
                    }}>
                    </Button>
                    <Divider sx={{ color: 'white', height: '25px' }} orientation="vertical" />
                    <ArrowDropDownIcon sx={{ color: 'white' }} />
                </Box>
            </Box>

            {/* Save Section */}
            
        </Box>
    );
};

// Function to get icons based on action name
const getIcon = (action) => {
    switch (action) {
        case 'Show Chart':
            return <ShowChartIcon sx={{ color: 'black' }} />;
        case 'Focused View':
            return <VisibilityIcon sx={{ color: 'black' }} />;
        case 'New':
            return <AddIcon sx={{ color: 'black' }} />;
        case 'Refresh':
            return <RefreshIcon sx={{ color: 'black' }} />;
        case 'Collaborate':
            return <GroupAddIcon sx={{ color: 'black' }} />;
        case 'Delete':
            return <DeleteIcon sx={{ color: 'black' }} />;
        default:
            return null;
    }
};

export default Leads;