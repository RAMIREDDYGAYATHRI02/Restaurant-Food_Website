import React from 'react';
import Layout from '../components/Layout/Layout';
import { Box, TableContainer, Table, Typography, TableHead, TableRow ,TableCell, TableBody, Paper} from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import  Mail from '@mui/icons-material';
import CallIcon from '@mui/icons-material/Call';

const contact = () => {
  return (
    <Layout>
       <Box sx={{my:5,ml:10,"& h4":{fontWeight:"bold",mb:2,}}}>
        <Typography variant='h4'>
              Contact My Resturant
         </Typography>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
       </Box>
       <Box sx={{m:3,width:"600px",ml:10, "@media (max-width:600px)":{width:"300px",},}}>
           <TableContainer component={Paper}>
             <Table arial-label="contact table">
                 <TableHead>
                     <TableRow>
                        <TableCell sx={{bgcolor:"black",color:"white",}} align="center">Contact Details</TableCell>
                     </TableRow>
                     <TableBody>
                         <TableRow>
                              <TableCell><SupportAgentIcon sx={{color:'red',pt:1}}/>1800-00-0000(tollfree)</TableCell>
                          </TableRow>
                         <TableRow>
                              <TableCell><MailIcon sx={{color:'skyblue',pt:1}}/>help@myrest.com</TableCell>
                         </TableRow>
                         <TableRow>
                              <TableCell><CallIcon sx={{color:'green',pt:1}}/>1234567891</TableCell>
                         </TableRow>
                     </TableBody>
                 </TableHead>
             </Table>
           </TableContainer>
        </Box>
    </Layout>
  );
};

export default contact;