import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.form`
        font-family: 'Fira Code', sans-serif;
        font-size: 16px;
        background-color: transparent;
        color: white;
        border: none;
        border-bottom: 1px solid hsla(0, 0%, 100%, .5);
        width: 80%;
        margin: 15px 0;
`;

class Input extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            country: ''
        }
    }
    render(){
        return <StyledWrapper>
            <select>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
        </StyledWrapper>
    }
}

export default Input;