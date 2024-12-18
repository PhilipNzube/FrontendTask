// components/Sidebar.js
import React, { useState } from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Typography,
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
} from '@mui/icons-material';

const Sidebar = () => {
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
    <Box sx={{ width: 250, bgcolor: 'background.paper' }}>
      <List>
        <ListItem button onClick={() => handleListItemClick(0)} selected={selectedIndex === 0}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={toggleRecent}>
          <ListItemIcon>
            <RecentIcon />
          </ListItemIcon>
          <ListItemText primary="Recent" />
          {openRecent ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openRecent} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button onClick={() => handleListItemClick(1)} selected={selectedIndex === 1}>
              <ListItemText primary="Recent Item 1" />
            </ListItem>
            <ListItem button onClick={() => handleListItemClick(2)} selected={selectedIndex === 2}>
              <ListItemText primary="Recent Item 2" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={togglePinned}>
          <ListItemIcon>
            <PinnedIcon />
          </ListItemIcon>
          <ListItemText primary="Pinned" />
          {openPinned ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openPinned} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button onClick={() => handleListItemClick(3)} selected={selectedIndex === 3}>
              <ListItemText primary="Pinned Item 1" />
            </ListItem>
            <ListItem button onClick={() => handleListItemClick(4)} selected={selectedIndex === 4}>
              <ListItemText primary="Pinned Item 2" />
            </ListItem>
          </List>
        </Collapse>

        <Typography variant="h6" sx={{ padding: 1 }}>My Work</Typography>
        <ListItem button onClick={() => handleListItemClick(5)} selected={selectedIndex === 5}>
          <ListItemIcon>
            <SalesIcon />
          </ListItemIcon>
          <ListItemText primary="Sales Accelerator" />
        </ListItem>
        <ListItem button onClick={() => handleListItemClick(6)} selected={selectedIndex === 6}>
          <ListItemIcon>
            <SalesIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={() => handleListItemClick(7)} selected={selectedIndex === 7}>
          <ListItemIcon>
            <SalesIcon />
          </ListItemIcon>
          <ListItemText primary="Activities" />
        </ListItem>

        <Typography variant="h6" sx={{ padding: 1 }}>Customers</Typography>
        <ListItem button onClick={() => handleListItemClick(8)} selected={selectedIndex === 8}>
          <ListItemIcon>
            <CustomersIcon />
          </ListItemIcon>
          <ListItemText primary="Accounts" />
        </ListItem>
        <ListItem button onClick={() => handleListItemClick(9)} selected={selectedIndex === 9}>
          <ListItemIcon>
            <CustomersIcon />
          </ListItemIcon>
          <ListItemText primary="Contacts" />
        </ListItem>

        <Typography variant="h6" sx={{ padding: 1 }}>Sales</Typography>
        <ListItem button onClick={() => handleListItemClick(10)} selected={selectedIndex === 10}>
          <ListItemIcon>
            <SalesIcon />
          </ListItemIcon>
          <ListItemText primary="Leads" />
        </ListItem>
        <ListItem button onClick={() => handleListItemClick(11)} selected={selectedIndex === 11}>
          <ListItemIcon>
            <SalesIcon />
          </ListItemIcon>
          <ListItemText primary="Opportunities" />
        </ListItem>
        <ListItem button onClick={() => handleListItemClick(12)} selected={selectedIndex === 12}>
          <ListItemIcon>
            <SalesIcon />
          </ListItemIcon>
          <ListItemText primary="Competitors" />
        </ListItem>

        <Typography variant="h6" sx={{ padding: 1 }}>Collateral</Typography>
        <ListItem button onClick={() => handleListItemClick(13)} selected={selectedIndex === 13}>
          <ListItemIcon>
            <CollateralIcon />
          </ListItemIcon>
          <ListItemText primary="Quotes" />
        </ListItem>
        <ListItem button onClick={() => handleListItemClick(14)} selected={selectedIndex === 14}>
          <ListItemIcon>
            <CollateralIcon />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItem>
        <ListItem button onClick={() => handleListItemClick(15)} selected={selectedIndex === 15}>
          <ListItemIcon>
            <CollateralIcon />
          </ListItemIcon>
          <ListItemText primary="Invoices" />
        </ListItem>
        <ListItem button onClick={() => handleListItemClick(16)} selected={selectedIndex === 16}>
          <ListItemIcon>
            <CollateralIcon />
          </ListItemIcon>
          <ListItemText primary="Products" />
        </ListItem>
        <ListItem button onClick={() => handleListItemClick(17)} selected={selectedIndex === 17}>
          <ListItemIcon>
            <CollateralIcon />
          </ListItemIcon>
          <ListItemText primary="Sales Literature" />
        </ListItem>

        <Typography variant="h6" sx={{ padding: 1 }}>Marketing</Typography>
        <ListItem button onClick={() => handleListItemClick(18)} selected={selectedIndex === 18}>
          <ListItemIcon>
            <MarketingIcon />
          </ListItemIcon>
          <ListItemText primary="Marketing Lists" />
        </ListItem>
        <ListItem button onClick={() => handleListItemClick(19)} selected={selectedIndex === 19}>
          <ListItemIcon>
            <MarketingIcon />
          </ListItemIcon>
          <ListItemText primary="Quick Campaigns" />
        </ListItem>

        <Typography variant="h6" sx={{ padding: 1 }}>Performance</Typography>
        <ListItem button onClick={() => handleListItemClick(20)} selected={selectedIndex === 20}>
          <ListItemIcon>
            <PerformanceIcon />
          </ListItemIcon>
          <ListItemText primary="Sales" />
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