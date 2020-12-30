import styled from "styled-components";

export const Footer: React.FC = () => {
  return (
    <Wrapper>
      <a>© 2007 UramnOIL</a>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  
  height: 30px;
`
