import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 8px 16px;
  gap: 16px;
  max-height: 677px;
  @media screen and (max-width: 1198px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Box = styled.div``;
