import React from 'react';
import styled from 'styled-components';
import Input from './Input.jsx';

const StyledWrapper = styled.div`
    border: 2px solid white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`;

class Content extends React.Component{
    render(){
        return <StyledWrapper>
            <Input/>
        </StyledWrapper>
    }
}

export default Content;