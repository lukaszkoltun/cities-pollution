import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body{
        padding: 0;
        margin: 0;
        background-color: #171717;
        font-family: 'Fira Code', monospace;
        color: white;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    *, *::before, *::after{
        box-sizing: border-box;
    }
`;

class App extends React.Component{
    render(){
        return <div>dupaaaa</div>
    }
}

export default App;