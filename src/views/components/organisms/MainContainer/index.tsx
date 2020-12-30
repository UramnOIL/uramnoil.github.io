import styled from "styled-components";
import React from "react";
import { Main } from "src/views/components/organisms/Main";

export interface MainContainerProps {
  children: React.ReactChild
}

export const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return (
    <Wrapper>
      <Main>
        { children }
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
