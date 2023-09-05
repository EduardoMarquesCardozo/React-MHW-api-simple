import { createGlobalStyle, styled } from "styled-components";
// https://interfaceingame.com/games/monster-hunter-world/
// https://monsterhunter.fandom.com/wiki/User:YukiHerz/SVG_Icons
// https://svgeditoronline.com/editor/
export const GlobalStyle = createGlobalStyle`

    :root {
      font-family: 'Montserrat', sans-serif;
        line-height: 1.5;
        color: var(--primary-color);
        --primary-color: #C3C3C3;
        --dark-color: #010206;
        --primary-highlight: #5EBBD1;
        --secondary-highlight: #B59A27;
        --bg-color: rgba(28, 28, 28, 0.8);
        --shadow-bg: -2px 1px 3px rgba(28, 28, 28, 0.7),
    2px 2px 3px rgba(28, 28, 28, 0.7), 2px -1px 3px rgba(28, 28, 28, 0.7),
    -2px -1px 3px rgba(28, 28, 28, 0.7);
    }

    ::-webkit-scrollbar {
    width: 4px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--bg-color);
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--primary-color);
  }



    .title{
        color: var(--primary-highlight);
        text-shadow: -1px 1px 3px #000, 1px 2px 3px #000, 1px -1px 3px #000,
      -1px -1px 3px #000;
    }

    .sub-title{
        color: var(--secondary-highlight);
    }

    h1 {
        margin: 0;
        font-size: 3.2em;
        line-height: 1.1;
    }
    h2 {
        margin: 0;
        font-size: 2.6em;
        line-height: 1.1;
    }
    h3 {
        margin: 0;
        font-size: 2em;
        line-height: 1.1;
    }

    body{
        display: flex;
        width: 100%;
        margin: 0 auto;
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
        box-shadow: 2px 3px 20px black, 0 0 125px #8f5922 inset;
        background: #f5f4dd;
        min-height: 100%;

        #root{
            width: 100%;
        }
    }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
