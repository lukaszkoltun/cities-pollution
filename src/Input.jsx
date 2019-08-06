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
            /* border: 0px; */
            outline: 0px;
            option{
                background-color: #171717;
                color: lightgray;
                :first-child{
                    color: gray;
                }
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
    changeCountry = (e) =>{ this.setState({country: e.target.value}); this.props.handleCountry(e.target.value)}
    render(){
        return <StyledWrapper>
            <select onChange={this.changeCountry}>
                <option value="" disabled selected>Select your option</option>
                <option value="PL">Poland</option>
                <option value="ES">Spain</option>
                <option value="DE">Germany</option>
                <option value="FR">France</option>
            </select>
        </StyledWrapper>
    }
}

export default Input;