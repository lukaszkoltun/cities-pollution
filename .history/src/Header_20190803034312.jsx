import React from 'react';
import styled from 'styled-components';

const Head = styled.h1`
    font-size: 21px;
    font-weight: 400;
    padding: 20px 50px;
    position: absolute;
    top:0;
    left: 0;
`;

class Header extends React.Component{
    render(){
        return <Head>cities pollution</Head>
    }
}

export default Header;