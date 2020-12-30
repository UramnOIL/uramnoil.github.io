import React from 'react'
import { Top } from "src/views/pages/Top";
import { Route, BrowserRouter } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: #FF9C6A;
  }
  
  * {
    color: #505050;
  }
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Wrapper className='App'>
          <Route path='/' component={ Top }/>
        </Wrapper>
      </BrowserRouter>
    </>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
`

export default App;
