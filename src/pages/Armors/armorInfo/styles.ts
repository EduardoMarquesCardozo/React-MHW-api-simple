import { styled } from "styled-components";

export const Wrapper = styled.div`
  min-width: 320px;

  flex: 1;
  position: relative;
  border-radius: 8px;
  background-color: var(--bg-color);
  box-shadow: var(--shadow-bg);
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  /* height: 100%; */
  padding: 8px;
  h3 {
    text-align: center;
    color: var(--secondary-highlight);
    border-bottom: 7px double rgba(18, 66, 12, 0.5);
    padding: 8px 4px;
  }
  h4 {
    background-color: rgba(130, 130, 130, 0.1);
  }
  p {
    margin: 0;
  }
`;
export const ArmorData = styled.div`
  h4 {
    margin: 16px 0;
    padding: 4px;
    border-radius: 4px;
  }
`;
export const Table = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const TRow = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dashed rgba(10, 40, 10, 0.6);
  padding: 0 32px;
`;
export const SkillsData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: auto;
  max-height: 345px;
  h4 {
    width: 80%;
    margin: auto;
    margin-top: 8px;
    padding: 4px;
    color: var(--primary-highlight);
    text-align: center;
  }
  h5 {
    font-size: 1em;
    background-color: rgba(130, 130, 130, 0.1);
    padding: 4px;
    margin: 4px 0 0 0;
    color: var(--primary-color);
  }
`;

export const SkillTitle = styled.div`
  border-top: 1px dashed rgba(10, 40, 10, 0.6);
  padding: 0 16px;
  div {
    display: flex;
    justify-content: space-between;
    margin: 4px 0;
    div {
      display: flex;
      gap: 4px;
      align-items: center;

      img {
        width: 24px;
      }
    }
    p {
      display: flex;
      align-items: center;
    }
  }
`;
export const SkillInfo = styled.div`
  padding: 0 16px;
`;
export const Skills = styled.div`
  border-bottom: 1px dashed rgba(10, 40, 10, 0.6);
`;
