import React, { ReactText } from "react";
import styled from "styled-components";
import { H1Props } from "src/views/components/atoms/heading/H1";

export interface BrandProps {
  children: ReactText
}

export const Brand: React.FC<H1Props> = ({ children }) => {
  return (
    <Wrapper>
      <a>{ children }</a>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  font-weight: bold;
  font-size: 20px;
  color: white;
`
