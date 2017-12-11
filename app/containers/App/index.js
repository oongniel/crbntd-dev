/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

// import HomePage from 'containers/HomePage/Loadable';
// import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Games from 'containers/Games';
import { Layout } from 'antd';
const ContentWrapper = Layout.Content;


const AppWrapper = styled.div`
    display: block;
    overflow: visible;
    overflow-x: hidden;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Carbonated Games"
        defaultTitle="Carbonated Games"
      >
        <meta name="description" content="Carbonated Games" />
      </Helmet>
      <Header />
      <ContentWrapper>
        <Switch>
          <Route exact path="/" component={Games} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </ContentWrapper>
      <Footer />
    </AppWrapper>
  );
}
// <Route path="/features" component={FeaturePage} />