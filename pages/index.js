// pages/index.js
import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import Leads from './view/leads';
import '../styles/index.css';

const Home = () => {
    const router = useRouter();

    let content;
    // Check if the current path is the root path
    if (router.pathname === '/') {
        content = <Leads />; // Default to Leads component
    } else if (router.pathname === '/view/leads') {
        content = <Leads />;
    } else if (router.pathname === '/view/other') {
        content = <OtherPage />;
    } else {
        content = <Leads />; // Fallback to Leads if no match
    }

    return (
        <Layout>
            {content}
        </Layout>
    );
};

export default Home;