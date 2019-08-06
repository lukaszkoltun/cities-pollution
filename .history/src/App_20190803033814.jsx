import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import Header from './Header.jsx'
import Footer from './Footer.jsx'

const GlobalStyle = createGlobalStyle`
    body{
        padding: 0;
        margin: 0;
        height: 100vh;
        background-color: #171717;
        font-family: 'Fira Code', monospace;
        color: white;
        /* min-height: 100vh; */
        position: relative;
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
            <Footer/>
        </div>
    }
}

export default App;