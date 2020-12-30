import React, { ReactText } from "react";
import styled from "styled-components";

export interface BrandProps {
  children: ReactText
}

export const Brand = ({ children }: BrandProps) => {
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
