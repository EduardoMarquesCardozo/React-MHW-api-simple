import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 500px;
  max-width: 860px;
  flex: 2;
  position: relative;
  border-radius: 8px;
  background-color: var(--bg-color);
  box-shadow: var(--shadow-bg);
  @media screen and (max-width: 504px) {
    min-width: 350px;
  }
`;

export const Box = styled.div`
  padding: 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: var(--primary-color);
    border-radius: 4px;
    width: 30%;
    height: 32px;
    padding: 4px 4px;
    box-shadow: -2px 1px 3px rgba(28, 28, 28, 0.4),
      2px 2px 3px rgba(28, 28, 28, 0.4), 2px -1px 3px rgba(28, 28, 28, 0.4),
      -2px -1px 3px rgba(28, 28, 28, 0.4);
    text-shadow: -1px 1px 3px rgba(0, 0, 0, 0.5), 1px 2px 3px rgba(0, 0, 0, 0.5),
      1px -1px 3px rgba(0, 0, 0, 0.5), -1px -1px 3px rgba(0, 0, 0, 0.5);
    &.low-rank {
      background: rgb(47, 77, 128);
      background: linear-gradient(
        180deg,
        rgba(36, 63, 107, 1) 0%,
        rgba(43, 89, 120, 1) 64%,
        rgba(62, 115, 136, 1) 100%
      );
      border: 1px solid rgba(43, 89, 120, 0.7);
    }
    &.high-rank {
      background: rgb(78, 34, 33);
      background: linear-gradient(
        180deg,
        rgba(78, 34, 33, 1) 0%,
        rgba(119, 43, 43, 1) 64%,
        rgba(115, 60, 53, 0.8) 100%
      );
      border: 1px solid rgba(138, 61, 61, 0.7);
    }
    &.master-rank {
      background: rgb(136, 127, 75);
      background: linear-gradient(
        180deg,
        rgba(87, 78, 37, 1) 0%,
        rgba(107, 94, 46, 1) 64%,
        rgba(136, 127, 75, 0.6) 100%
      );
      border: 1px solid rgba(107, 94, 46, 0.7);
    }
    &.selected {
      box-shadow: none;
    }
    &:hover {
      filter: brightness(1.1);
      -webkit-filter: brightness(1.1);
    }
  }
  button {
  }
`;

export const Title = styled.div`
  display: flex;
  text-align: center;
  width: 100%;

  p {
    flex: 2;
    margin: 0;
    /* max-width: 264px; */
    background: linear-gradient(
      270deg,
      rgba(136, 127, 75, 0) 0%,
      rgba(172, 172, 172, 0.4) 50%,
      rgba(0, 0, 0, 0) 100%
    );
    &:first-child {
      flex: 1;
    }
  }
`;
export const Row = styled.div`
  display: flex;
  margin-bottom: 16px;
  article {
    display: flex;
    margin: auto;
  }
`;

export const Icon = styled.div`
  border: 1px solid gray;
  justify-content: center;
  height: 30px;
  max-width: 96px;
  align-items: center;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.4);
  cursor: pointer;
  img {
    width: 24px;
    height: 24px;
  }
`;

export const Table = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  min-height: 464px;
`;

export const TRow = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  p {
    flex: 1;
    font-size: 14px;
    /* text-align: center; */
    margin: 0;
  }
  div {
    display: flex;
    justify-content: center;
    gap: 16px;
    flex: 2;
  }
`;
