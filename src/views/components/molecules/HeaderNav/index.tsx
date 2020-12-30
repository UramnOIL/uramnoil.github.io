import React from "react"
import styled from "styled-components";
import { HeaderNavItem } from "src/views/components/atoms/HeaderNavItem";

export const HeaderNav = () => {
  return (
    <Wrapper>
      <HeaderNavItem link="/hoge">Hoge</HeaderNavItem>
      <HeaderNavItem link="/hoge">Hoge</HeaderNavItem>
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  padding: 10px;
  
  display: flex;
  justify-content: space-around;
  
  font-size: 0;
  list-style: none;
`
