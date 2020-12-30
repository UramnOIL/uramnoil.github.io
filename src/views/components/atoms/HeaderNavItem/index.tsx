import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export interface HeaderNavItemProps {
  link: string,
  children: React.ReactText
}

export const HeaderNavItem = (props: HeaderNavItemProps) => {
  return (
    <Wrapper>
      <Link to={props.link}>{props.children}</Link>
    </Wrapper>
  )
}

const Wrapper = styled.li`
  font-size: 1rem;
  text-align: center;
  
  flex-grow: 1;
  
  &+ li {
    border-left: 1px solid #333;
  }
`
