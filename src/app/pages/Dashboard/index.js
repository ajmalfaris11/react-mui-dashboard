import * as React from "react";
import DashboardWrapper from "../../components/DashboardWrapper";
import { Box, Typography, Grid, Paper } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FeedbackIcon from '@mui/icons-material/Feedback';
import LocalShippingIcon from "@mui/icons-material/LocalShipping";


export default function DashboardPage() {
  return (
    <DashboardWrapper title="Dashboard">
      <Box component="main" sx={{ flexGrow: 1, px: { xs: 2, md: 3 }, py: 3 }}>      
        
        {/* Summary Cards */}
        <Grid container spacing={3}>
          {/* Users Card */}
          <Grid item xs={12} sm={6} md={3}>
            <Paper 
              elevation={6} 
              sx={{ 
                padding: 3, 
                textAlign: 'center', 
                bgcolor: '#1c1c1c', 
                color: 'white', 
                borderRadius: 2, 
                '&:hover': { 
                  transform: 'scale(1.05)', 
                  transition: '0.3s', 
                  boxShadow: '0 8px 16px rgba(0,0,0,0.3)' 
                }
              }}
            >
              <PeopleIcon sx={{ fontSize: 40, mb: 1, color: '#4caf50' }} />
              <Typography variant="h6">Users</Typography>
              <Typography variant="h4">1,234</Typography>
            </Paper>
          </Grid>

          {/* Sales Card */}
          <Grid item xs={12} sm={6} md={3}>
            <Paper 
              elevation={6} 
              sx={{ 
                padding: 3, 
                textAlign: 'center', 
                bgcolor: '#1c1c1c', 
                color: 'white', 
                borderRadius: 2, 
                '&:hover': { 
                  transform: 'scale(1.05)', 
                  transition: '0.3s', 
                  boxShadow: '0 8px 16px rgba(0,0,0,0.3)' 
                }
              }}
            >
              <AttachMoneyIcon sx={{ fontSize: 40, mb: 1, color: '#ff9800' }} />
              <Typography variant="h6">Sales</Typography>
              <Typography variant="h4">$5,678</Typography>
            </Paper>
          </Grid>

          {/* Active Projects Card */}
          <Grid item xs={12} sm={6} md={3}>
            <Paper 
              elevation={6} 
              sx={{ 
                padding: 3, 
                textAlign: 'center', 
                bgcolor: '#1c1c1c', 
                color: 'white', 
                borderRadius: 2, 
                '&:hover': { 
                  transform: 'scale(1.05)', 
                  transition: '0.3s', 
                  boxShadow: '0 8px 16px rgba(0,0,0,0.3)' 
                }
              }}
            >
              <LocalShippingIcon sx={{ fontSize: 40, mb: 1, color: '#2196f3' }} />
              <Typography variant="h6">Orders</Typography>
              <Typography variant="h4">23</Typography>
            </Paper>
          </Grid>

          {/* Feedback Card */}
          <Grid item xs={12} sm={6} md={3}>
            <Paper 
              elevation={6} 
              sx={{ 
                padding: 3, 
                textAlign: 'center', 
                bgcolor: '#1c1c1c', 
                color: 'white', 
                borderRadius: 2, 
                '&:hover': { 
                  transform: 'scale(1.05)', 
                  transition: '0.3s', 
                  boxShadow: '0 8px 16px rgba(0,0,0,0.3)' 
                }
              }}
            >
              <FeedbackIcon sx={{ fontSize: 40, mb: 1, color: '#e91e63' }} />
              <Typography variant="h6">Feedback</Typography>
              <Typography variant="h4">87%</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </DashboardWrapper>
  );
}
