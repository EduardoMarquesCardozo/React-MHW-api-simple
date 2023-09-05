import { styled } from "styled-components";

export const Wrapper = styled.div`
  min-width: 320px;

  flex: 1;
  position: relative;
  border-radius: 8px;
  background-color: var(--bg-color);
  box-shadow: var(--shadow-bg);
  /* border-top: 1px double rgba(147, 147, 147, 1); */
`;
export const Box = styled.div`
  /* height: 100%; */
  padding: 8px;
`;
export const Row = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 128px;
    height: 128px;
    padding: 16px;
  }
`;

export const ArmorName = styled.div`
  display: flex;
  /* width: 80%; */
  font-size: 2rem;
  text-align: center;
  justify-content: center;
  border-top: 4px double rgba(147, 147, 147, 0.6);
  border-bottom: 4px double rgba(147, 147, 147, 0.6);
`;

export const MaterialsTable = styled.div`
  width: 90%;
  h1 {
    display: flex;
    justify-content: center;
  }
`;

export const Scroll = styled.div`
  padding: 0 4px;
  max-height: 371px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const Title = styled.div`
  text-align: center;
  border: 4px double rgba(147, 147, 147, 0.6);
  border-bottom: none;
  padding: 16px 0px;
  margin-bottom: 16px;
  border-radius: 4px;
  h4 {
    margin: 0;
  }
`;
export const TRow = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 4px 16px;
  hr {
    border-style: dashed;
    border-color: rgb(255, 255, 255, 0.2);
  }
  p {
    margin: 0;
  }
`;
