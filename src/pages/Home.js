import React from 'react';
import Layout from '../components/Layout/Layout';
import { Button } from '@mui/material';
import {Link} from "react-router-dom";
import banner from '../images/banner.jpeg';
import "../styles/HomeStyle.css";

const Home = () => {
  return (
    <Layout>
        <div className="home" style={{backgroundImage:`url(${banner})`}}>
          <div className='headerContainer'>
            <h1>Food Website</h1>
            <p>Best Food In India</p>
            <Link to="/menu"> <button>ORDER NOW</button></Link>
           
          </div>
        </div>
    </Layout>
  );
};

export default Home;