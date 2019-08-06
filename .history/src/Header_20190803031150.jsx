import React from 'react';
import styled from 'styled-components';

const Head = styled.h1`
    font-size: 21px;
`;

class Header extends React.Component{
    render(){
        return <Head>cities pollution</Head>
    }
}

export default Header;