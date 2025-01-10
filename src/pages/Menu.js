import React from 'react';
import {Menulist} from '../data/data';
import Layout from '../components/Layout/Layout';
import {Box, Card, CardActionArea, CardContent, CardMedia, Typography} from '@mui/material';
const menu = () => {
  return (
    <Layout>
       <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
           {
            Menulist.map(menu =>(
            <Card sx={{maxWidth:'390px', m:2}}>
              <CardActionArea>
                <CardMedia sx={{minHeight:'400px'}} component={'img'} src={menu.image} alt={menu.name}/>
              </CardActionArea>
              <CardContent>
                  <Typography variant="h5" gutterBottom component={'div'}>
                     {menu.name}
                  </Typography>
                  <Typography variant="body2" >
                     {menu.Description}
                  </Typography>
                </CardContent>
            </Card>
            ))
           }
       </Box>
    </Layout>
  );
};

export default menu;