import React from "react";
import styled from "styled-components";
import { Brand } from "src/views/components/atoms/Brand";
import { HeaderNav } from "src/views/components/molecules/HeaderNav";

export const Header = () => {
  return (
    <Wrapper>
        <Brand>UramnOIL</Brand>
        <HeaderNav />
    </Wrapper>
  )
}

const Wrapper = styled.header`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: stretch;
`
