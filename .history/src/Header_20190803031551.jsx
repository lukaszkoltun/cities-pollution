import React from 'react';
import styled from 'styled-components';

const Head = styled.h1`
    font-size: 21px;
    font-weight: 400;
    padding: 30 50px;
`;

class Header extends React.Component{
    render(){
        return <Head>cities pollution</Head>
    }
}

export default Header;