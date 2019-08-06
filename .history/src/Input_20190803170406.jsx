import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.form`

        select{
            font-family: 'Fira Code', sans-serif;
            font-size: 16px;
            background-color: transparent;
            color: white;
            border: none;
            border-bottom: 1px solid hsla(0, 0%, 100%, .5);
            width: 80%;
            margin: 15px 0;
            option{
                background-color: #171717;
            }
        }
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
                <option value=""></option>
                <option value="poland">Poland</option>
                <option value="spain">Spain</option>
                <option value="germany">Germany</option>
                <option value="france">France</option>
            </select>
        </StyledWrapper>
    }
}

export default Input;