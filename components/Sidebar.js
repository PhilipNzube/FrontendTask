// components/Sidebar.js
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Collapse,
    Typography,
    IconButton,
} from '@mui/material';
import {
    Home as HomeIcon,
    AccessTime as RecentIcon,
    PushPin as PinnedIcon,
    ExpandLess,
    ExpandMore,
    Assessment as SalesIcon,
    People as CustomersIcon,
    MonetizationOn as CollateralIcon,
    Campaign as MarketingIcon,
    TrendingUp as PerformanceIcon,
    ArrowUpward,
    ArrowDownward,
    Menu as MenuIcon,
    // Suggested Icons
    RocketLaunch as SalesAcceleratorIcon, // Sales Accelerator
    Dashboard as DashboardIcon, // Dashboard
    Event as ActivitiesIcon, // Activities
    AccountBalance as AccountsIcon, // Accounts
    Contacts as ContactsIcon, // Contacts
    Search as LeadsIcon, // Leads
    BusinessCenter as OpportunitiesIcon, // Opportunities
    EmojiEvents as CompetitorsIcon, // Competitors
    Chat as QuotesIcon, // Quotes
    LocalShipping as OrdersIcon, // Orders
    Description as InvoicesIcon, // Invoices
    ShoppingCart as ProductsIcon, // Products
    Book as SalesLiteratureIcon, // Sales Literature
    List as MarketingListsIcon, // Marketing Lists
    FlashOn as QuickCampaignsIcon, // Quick Campaigns
} from '@mui/icons-material';

const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
    const [openRecent, setOpenRecent] = useState(false);
    const [openPinned, setOpenPinned] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);

    

    const handleListItemClick = (index) => {
        setSelectedIndex(index);
    };

    const toggleRecent = () => {
        setOpenRecent(!openRecent);
    };

    const togglePinned = () => {
        setOpenPinned(!openPinned);
    };



    return (
        <Box
            sx={{
                width: sidebarOpen ? 250 : 60, // Width changes based on sidebar state
                height: '100vh',
                bgcolor: '#f0f0f0',
                borderRight: '2px solid rgba(128, 128, 128, 0.5)',
                position: 'fixed',
                top: 0,
                left: 0,
                overflowY: 'auto',
                transition: 'width 0.3s', // Smooth transition for width change
            }}
        >
            <IconButton onClick={toggleSidebar} sx={{ margin: 1 }}>
                <MenuIcon />
            </IconButton>
            <List>
                <ListItem
                    button
                    onClick={() => handleListItemClick(0)}
                    selected={selectedIndex === 0}
                    sx={{
                        position: 'relative',
                        '&.Mui-selected': {
                            bgcolor: 'white', // Background color for selected item
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                bottom: 0,
                                width: '4px', // Width of the blue line
                                bgcolor: 'blue', // Color of the blue line
                            },
                        },
                    }}
                >
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" sx={{ fontSize: '0.875rem' }} /> {/* Reduced font size */}
                </ListItem>
                <ListItem
                    button
                    onClick={toggleRecent}
                    sx={{
                        position: 'relative',
                        '&.Mui-selected': {
                            bgcolor: 'white',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                bottom: 0,
                                width: '4px',
                                bgcolor: 'blue',
                            },
                        },
                    }}
                >
                    <ListItemIcon>
                        <RecentIcon />
                    </ListItemIcon>
                    <ListItemText primary="Recent" sx={{ fontSize: '0.875rem' }} />
                    {openRecent ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openRecent} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem
                            button
                            onClick={() => handleListItemClick(1)}
                            selected={selectedIndex === 1}
                            sx={{
                                position: 'relative',
                                '&.Mui-selected': {
                                    bgcolor: 'white',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        left: 0,
                                        top: 0,
                                        bottom: 0,
                                        width: '4px',
                                        bgcolor: 'blue',
                                    },
                                },
                            }}
                        >
                            <ListItemText primary="Recent Item 1" sx={{ fontSize: '0.875rem' }} />
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => handleListItemClick(2)}
                            selected={selectedIndex === 2}
                            sx={{
                                position: 'relative',
                                '&.Mui-selected': {
                                    bgcolor: 'white',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        left: 0,
                                        top: 0,
                                        bottom: 0,
                                        width: '4px',
                                        bgcolor: 'blue',
                                    },
                                },
                            }}
                        >
                            <ListItemText primary="Recent Item 2" sx={{ fontSize: '0.875rem' }} />
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem
                    button
                    onClick={togglePinned}
                    sx={{
                        position: 'relative',
                        '&.Mui-selected': {
                            bgcolor: 'white',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                bottom: 0,
                                width: '4px',
                                bgcolor: 'blue',
                            },
                        },
                    }}
                >
                    <ListItemIcon>
                        <PinnedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Pinned" sx={{ fontSize: '0.875rem' }} />
                    {openPinned ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openPinned} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem
                            button
                            onClick={() => handleListItemClick(3)}
                            selected={selectedIndex === 3}
                            sx={{
                                position: 'relative',
                                '&.Mui-selected': {
                                    bgcolor: 'white',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        left: 0,
                                        top: 0,
                                        bottom: 0,
                                        width: '4px',
                                        bgcolor: 'blue',
                                    },
                                },
                            }}
                        >
                            <ListItemText primary="Pinned Item 1" sx={{ fontSize: '0.875rem' }} />
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => handleListItemClick(4)}
                            selected={selectedIndex === 4}
                            sx={{
                                position: 'relative',
                                '&.Mui-selected': {
                                    bgcolor: 'white',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        left: 0,
                                        top: 0,
                                        bottom: 0,
                                        width: '4px',
                                        bgcolor: 'blue',
                                    },
                                },
                            }}
                        >
                            <ListItemText primary="Pinned Item 2" sx={{ fontSize: '0.875rem' }} />
                        </ListItem>
                    </List>
                </Collapse>

                <Typography variant="h6" sx={{ padding: 1, fontSize: sidebarOpen ? 15 : 0, marginTop: 3 }}>My Work</Typography>
                <ListItem
                    button
                    onClick={() => handleListItemClick(5)}
                    selected={selectedIndex === 5}
                    sx={{
                        position: 'relative',
                        '&.Mui-selected': {
                            bgcolor: 'white',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                bottom: 0,
                                width: '4px',
                                bgcolor: 'blue',
                            },
                        },
                    }}
                >
                    <ListItemIcon>
                        <SalesAcceleratorIcon />
                    </ListItemIcon>
                    <ListItemText primary="Sales Accelerator" sx={{ fontSize: '0.875rem' }} />
                </ListItem>
                <ListItem
                    button
                    onClick={() => handleListItemClick(6)}
                    selected={selectedIndex === 6}
                    sx={{
                        position: 'relative',
                        '&.Mui-selected': {
                            bgcolor: 'white',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                bottom: 0,
                                width: '4px',
                                bgcolor: 'blue',
                            },
                        },
                    }}
                >
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" sx={{ fontSize: '0.875rem' }} />
                </ListItem>
                <ListItem
                    button
                    onClick={() => handleListItemClick(7)}
                    selected={selectedIndex === 7}
                    sx={{
                        position: 'relative',
                        '&.Mui-selected': {
                            bgcolor: 'white',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                bottom: 0,
                                width: '4px',
                                bgcolor: 'blue',
                            },
                        },
                    }}
                >
                    <ListItemIcon>
                        <ActivitiesIcon />
                    </ListItemIcon>
                    <ListItemText primary="Activities" sx={{ fontSize: '0.875rem' }} />
                </ListItem>

                <Typography variant="h6" sx={{ padding: 1, fontSize: sidebarOpen ? 15 : 0, marginTop: 3 }}>Customers</Typography>
                <ListItem
                    button
                    onClick={() => handleListItemClick(8)}
                    selected={selectedIndex === 8}
                    sx={{
                        position: 'relative',
                        '&.Mui-selected': {
                            bgcolor: 'white',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                bottom: 0,
                                width: '4px',
                                bgcolor: 'blue',
                            },
                        },
                    }}
                >
                    <ListItemIcon>
                        <AccountsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Accounts" sx={{ fontSize: '0.875rem' }} />
                </ListItem>
                <ListItem
                    button
                    onClick={() => handleListItemClick(9)}
                    selected={selectedIndex === 9}
                    sx={{
                        position: 'relative',
                        '&.Mui-selected': {
                            bgcolor: 'white',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                bottom: 0,
                                width: '4px',
                                bgcolor: 'blue',
                            },
                        },
                    }}
                >
                    <ListItemIcon>
                        <ContactsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Contacts" sx={{ fontSize: '0.875rem' }} />
                </ListItem>

                <Typography variant="h6" sx={{ padding: 1, fontSize: sidebarOpen ? 15 : 0, marginTop: 3 }}>Sales</Typography>
                <ListItem
                    button
                    //component={Link} href="/view/leads"
                    onClick={() => handleListItemClick(10)}
                    selected={selectedIndex === 10}
                    sx={{
                        position: 'relative',
                        '&.Mui-selected': {
                            bgcolor: 'white',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                bottom: 0,
                                width: '4px',
                                bgcolor: 'blue',
                            },
                        },
                    }}
                >
                    <ListItemIcon>
                        <LeadsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Leads" sx={{ fontSize: '0.875rem', color: 'black', }} />
                </ListItem>
                <ListItem
                    button
                    onClick={() => handleListItemClick(11)}
                    selected={selectedIndex === 11}
                    sx={{
                        position: 'relative',
                        '&.Mui-selected': {
                            bgcolor: 'white',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                bottom: 0,
                                width: '4px',
                                bgcolor: 'blue',
                            },
                        },
                    }}
                >
                    <ListItemIcon>
                        <OpportunitiesIcon />
                    </ListItemIcon>
                    <ListItemText primary="Opportunities" sx={{ fontSize: '0.875rem' }} />
                </ListItem>
                <ListItem
                    button
                    onClick={() => handleListItemClick(12)}
                    selected={selectedIndex === 12}
                    sx={{
                        position: 'relative',
                        '&.Mui-selected': {
                            bgcolor: 'white',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                bottom: 0,
                                width: '4px',
                                bgcolor: 'blue',
                            },
                        },
                    }}
                >
                    <ListItemIcon>
                        <CompetitorsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Competitors" sx={{ fontSize: '0.875rem' }} />
                </ListItem>

                <Typography variant="h6" sx={{ padding: 1, fontSize: sidebarOpen ? 15 : 0, marginTop: 3 }}>Collateral</Typography>
                <ListItem
                    button
                    onClick={() => handleListItemClick(13)}
                    selected={selectedIndex === 13}
                    sx={{
                        position: 'relative',
                        '&.Mui-selected': {
                            bgcolor: 'white',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                bottom: 0,
                                width: '4px',
                                bgcolor: ' blue',
                            },
                        },
                    }}
                >
                    <ListItemIcon>
                        <QuotesIcon />
                    </ListItemIcon>
                    <ListItemText primary="Quotes" sx={{ fontSize: '0.875rem' }} />
                </ListItem>
                <ListItem
                    button
                    onClick={() => handleListItemClick(14)}
                    selected={selectedIndex === 14}
                    sx={{
                        position: 'relative',
                        '&.Mui-selected': {
                            bgcolor: 'white',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                bottom: 0,
                                width: '4px',
                                bgcolor: 'blue',
                            },
                        },
                    }}
                >
                    <ListItemIcon>
                        <OrdersIcon />
                    </ListItemIcon>
                    <ListItemText primary="Orders" sx={{ fontSize: '0.875rem' }} />
                </ListItem>
                <ListItem
                    button
                    onClick={() => handleListItemClick(15)}
                    selected={selectedIndex === 15}
                    sx={{
                        position: 'relative',
                        '&.Mui-selected': {
                            bgcolor: 'white',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                bottom: 0,
                                width: '4px',
                                bgcolor: 'blue',
                            },
                        },
                    }}
                >
                    <ListItemIcon>
                        <InvoicesIcon />
                    </ListItemIcon>
                    <ListItemText primary="Invoices" sx={{ fontSize: '0.875rem' }} />
                </ListItem>
                <ListItem
                    button
                    onClick={() => handleListItemClick(16)}
                    selected={selectedIndex === 16}
                    sx={{
                        position: 'relative',
                        '&.Mui-selected': {
                            bgcolor: 'white',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                bottom: 0,
                                width: '4px',
                                bgcolor: 'blue',
                            },
                        },
                    }}
                >
                    <ListItemIcon>
                        <ProductsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Products" sx={{ fontSize: '0.875rem' }} />
                </ListItem>
                <ListItem
                    button
                    onClick={() => handleListItemClick(17)}
                    selected={selectedIndex === 17}
                    sx={{
                        position: 'relative',
                        '&.Mui-selected': {
                            bgcolor: 'white',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                bottom: 0,
                                width: '4px',
                                bgcolor: 'blue',
                            },
                        },
                    }}
                >
                    <ListItemIcon>
                        <SalesLiteratureIcon />
                    </ListItemIcon>
                    <ListItemText primary="Sales Literature" sx={{ fontSize: '0.875rem' }} />
                </ListItem>

                <Typography variant="h6" sx={{ padding: 1, fontSize: sidebarOpen ? 15 : 0, marginTop: 3 }}>Marketing</Typography>
                <ListItem
                    button
                    onClick={() => handleListItemClick(18)}
                    selected={selectedIndex === 18}
                    sx={{
                        position: 'relative',
                        '&.Mui-selected': {
                            bgcolor: 'white',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                bottom: 0,
                                width: '4px',
                                bgcolor: 'blue',
                            },
                        },
                    }}
                >
                    <ListItemIcon>
                        <MarketingListsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Marketing Lists" sx={{ fontSize: '0.875rem' }} />
                </ListItem>
                <ListItem
                    button
                    onClick={() => handleListItemClick(19)}
                    selected={selectedIndex === 19}
                    sx={{
                        position: 'relative',
                        '&.Mui-selected': {
                            bgcolor: 'white',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                bottom: 0,
                                width: '4px',
                                bgcolor: 'blue',
                            },
                        },
                    }}
                >
                    <ListItemIcon>
                        <QuickCampaignsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Quick Campaigns" sx={{ fontSize: '0.875rem' }} />
                </ListItem>

                <Typography variant=" h6" sx={{ padding: 1, fontSize: sidebarOpen ? 15 : 0, marginTop: 3 }}>Performance</Typography>
                <ListItem
                    button
                    onClick={() => handleListItemClick(20)}
                    selected={selectedIndex === 20}
                    sx={{
                        position: 'relative',
                        '&.Mui-selected': {
                            bgcolor: 'white',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                bottom: 0,
                                width: '4px',
                                bgcolor: 'blue',
                            },
                        },
                    }}
                >
                    <ListItemIcon>
                        <PerformanceIcon />
                    </ListItemIcon>
                    <ListItemText primary="Sales" sx={{ fontSize: '0.875rem' }} />
                    <ListItemIcon>
                        <ArrowUpward />
                        <ArrowDownward />
                    </ListItemIcon>
                </ListItem>
            </List>
        </Box>
    );
};

export default Sidebar;