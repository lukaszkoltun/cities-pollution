import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.span`
    font-size: 12px;
    position: absolute;
    bottom: 20px;
    right: 10px;
`;

class Footer extends React.Component{
    render(){
        return <StyledWrapper>the most polluted cities &copy; 2019 All rights reserved</StyledWrapper>
    }
}

export default Footer;