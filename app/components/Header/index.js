import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';

const HeaderWrapper = styled(Layout.Header)`
    background-color: #1b325f;
    border-color: #254685;
    color: #ffffff;
    text-shadow: 0 1px 0 #444444;
    font-weight: bold;
    height: 105px;
`;


// <Link to="/features">
class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <HeaderWrapper>
        Heyyy!
      </HeaderWrapper>
    );
  }
}

export default Header;
