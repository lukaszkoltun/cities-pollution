import React from 'react';
import styled from 'styled-components';
import Input from './Input.jsx';
import Content from './Content.jsx'

const StyledWrapper = styled.div`
    width: 300px;
    height: 250px;
    border: 2px solid white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`;

class Container extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            country: ''
        }
    }
    updateCountry = () =>{
        this.setState({country: str})
    }
    render(){
        return <StyledWrapper>
            <Input change={this.updateCountry()}/>
            <Content country={this.state.country}/>
        </StyledWrapper>
    }
}

export default Container;