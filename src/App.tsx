import React from 'react'
import { Top } from "src/views/pages/Top";
import styled, { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: #FF9C6A;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper className="App">
        <Top />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
`

export default App;
