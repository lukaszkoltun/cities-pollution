import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.p`
    font-size: 10px;
`;

class Footer extends React.Component{
    render(){
        return <p>the most polluted cities &copy; 2019 All rights reserved</p>
    }
}

export default Footer;