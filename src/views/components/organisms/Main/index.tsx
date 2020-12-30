import styled from "styled-components";
import React, { ReactChildren } from "react";

export const Main: React.FC = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.main`
  margin: 3px;
`
