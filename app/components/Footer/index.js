import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';

const FooterWrapper = styled(Layout.Footer)`
    height: 45px;
    background-color: #1b325f;
    border-color: #254685;
    color: #ffffff;
    text-shadow: 0 1px 0 #444444;
    font-weight: bold;
    position: fixed;
    bottom: 0;
    width: 100%;
`;

// <Link to="/features">
class Footer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <FooterWrapper>
        Footer
      </FooterWrapper>
    );
  }
}

export default Footer;
