import React from "react"
import styled from "styled-components";
import { HeaderNavItem } from "src/views/components/atoms/HeaderNavItem";

export const HeaderNav: React.FC = () => {
  return (
    <Wrapper>
      <HeaderNavItem link="/">Top</HeaderNavItem>
      <HeaderNavItem link="/">Top</HeaderNavItem>
      <HeaderNavItem link="/">Top</HeaderNavItem>
      <HeaderNavItem link="/">Top</HeaderNavItem>
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  padding: 10px;
  
  display: flex;
  justify-content: space-around;
  
  font-size: 0;
  list-style: none;

  & > li+ li {
    border-left: 1px solid #333;
  }
`
