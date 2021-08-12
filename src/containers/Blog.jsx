import React from 'react';
import { Layout } from '../components/Layout.jsx';
import { Banner } from '../components/Banner/Banner.jsx';

export const Blog = (props) => {
  return (
    <Layout
      banner={
        <Banner
          color="#FFFFFF"
          title="Experiencia y profesionalismo <span>a tu alcance</span>"
          image="demo.png"
        />
      }
    >
      <div className="Content Blog">
        <div className="Content-row">
          Blog
        </div>
      </div>
    </Layout>
  );
};
