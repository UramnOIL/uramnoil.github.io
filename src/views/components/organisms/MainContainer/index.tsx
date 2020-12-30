import styled from "styled-components";
import React from "react";
import { Main } from "src/views/components/organisms/Main";

export interface MainContainerProps {
  children: React.ReactChildren
}

export const MainContainer = () => {
  return (
    <Wrapper>
      <Main>
        <h1>Sample</h1>
        hoge
        <section>
          <h2>HogeHoge</h2>
        </section>
      </Main>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  min-height: 90%;
  border-radius: 5px;
  padding: 10px;
  
  flex: auto;
  
  background-color: aliceblue;
`
