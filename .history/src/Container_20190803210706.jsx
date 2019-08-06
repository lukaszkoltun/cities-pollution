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
    handleCountry = (aa) => {
        this.setState({country: aa});
    }
    render(){
        return <StyledWrapper>
            <Input handleCountry={this.handleCountry}/>
            <Content country={this.state.country}/>
        </StyledWrapper>
    }
}

export default Container;