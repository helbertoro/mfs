import React from 'react';
import { Layout } from '../components/Layout.jsx';
import { BannerHome } from '../components/BannerHome/BannerHome.jsx';
import { Home as HomeComponent } from '../components/Home/Home.jsx';

export const Home = (props) => {
  return (
    <Layout
      banner={
        <BannerHome/>
      }
    >
      <HomeComponent/>
    </Layout>
  );
};
