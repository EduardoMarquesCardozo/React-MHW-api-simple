import { styled } from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  justify-content: space-between;
  padding: 16px 64px;
  background-color: var(--bg-color);
  z-index: 1;
  box-shadow: var(--shadow-bg);
  a {
    text-decoration: none;
  }
  h2 {
    flex: 3;
  }
  @media screen and (max-width: 700px) {
    padding: 8px 16px;
  }
  @media screen and (max-width: 540px) {
    h2 {
      font-size: 1.6em;
    }
  }
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: end;
  flex: 1;
  a {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: var(--secondary-highlight);
  }
  @media screen and (max-width: 700px) {
    text-align: center;
  }
`;
