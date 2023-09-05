import { styled } from "styled-components";

export const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 16px;
  p {
    cursor: pointer;
    margin: 0px;
  }
`;

export const Icon = styled.button`
  display: flex;
  width: 24px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #d3d3d3;

  background: none;
  border: none;

  &.disabled {
    color: #6f6f6f;
  }
`;

export const Pages = styled.div`
  display: flex;
  gap: 24px;
  font-family: Arial, Helvetica, sans-serif;
  min-width: 130px;
  .square {
    border: 1px solid gray;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    flex: 1;
    width: 25px;
    justify-content: center;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.2);
  }
  .current {
    background-color: rgba(0, 0, 0, 0.5);
    color: var(--primary-color);
  }
`;
