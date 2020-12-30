import React from "react";
import styled from "styled-components";
import { Header } from "src/views/components/organisms/Header";
import { MainContainer, MainContainerProps } from "src/views/components/organisms/MainContainer";
import { Footer } from "src/views/components/organisms/Footer";

const Default = ({ children }: MainContainerProps) => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Header />
        <MainContainer>
          { children }
        </MainContainer>
      </InnerWrapper>
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  min-height: 100vh;
  
  display: flex;
  flex-direction: column;
`

const InnerWrapper = styled.div`
  padding: 10px;
  border-radius: 10px;
  
  display: flex;
  flex-direction: column;
  
  background-color: #6EB6FA;
  flex: 1;
`

export default Default
