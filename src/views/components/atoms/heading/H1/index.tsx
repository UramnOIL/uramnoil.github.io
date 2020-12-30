import React from "react";
import styled from "styled-components";

export interface H1Props {
  children: React.ReactText
}

export const H1: React.FC<H1Props> = ({ children } ) => {
  return (
    <Wrapper>
      { children }
    </Wrapper>
  )
}

const Wrapper = styled.h1`
  padding: 0.5rem;
  border-radius: 25px;
  
  display: table;
  vertical-align: middle;
  
  background-color: #dbebf8;
`
