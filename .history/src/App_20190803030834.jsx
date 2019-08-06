import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import Header from './Header.jsx'

const GlobalStyle = createGlobalStyle`
    body{
        padding: 0;
        margin: 0;
        background-color: #171717;
        font-family: 'Fira Code', monospace;
        color: white;
        min-height: 100vh;
    }
    *, *::before, *::after{
        box-sizing: border-box;
    }
`;

class App extends React.Component{
    render(){
        return <div>
            <GlobalStyle/>
            <Header/>
            <h1>dupa</h1>
        </div>
    }
}

export default App;