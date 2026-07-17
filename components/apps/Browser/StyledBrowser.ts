import styled from "styled-components";

type StyledBrowserProps = {
  $hasSrcDoc: boolean;
};

const StyledBrowser = styled.div<StyledBrowserProps>`
  iframe {
    background-color: ${({ $hasSrcDoc, theme }) =>
      $hasSrcDoc
        ? theme.name === "Dark"
          ? "#181818"
          : "#fff"
        : "initial"};
    border: 0;
    height: calc(100% - 42px - 37px);
    width: 100%;
  }

  nav {
    background-color: ${({ theme }) =>
      theme.name === "Dark" ? "rgb(50 50 50)" : "rgb(238 238 238)"};
    display: flex;
    padding: 4px 0;
    place-content: center;
    place-items: center;

    div {
      display: flex;
      justify-content: space-around;
      margin-right: 2px;
      min-width: 102px;
      padding-left: 4px;
      width: 142px;
    }

    button {
      border-radius: 50%;
      display: flex;
      height: 28px;
      place-content: center;
      place-items: center;
      transition: background 0.2s ease-in-out;
      width: 28px;

      svg {
        fill: ${({ theme }) =>
          theme.name === "Dark" ? "rgb(240 240 240)" : "rgb(45 45 45)"};
        height: 20px;
        width: 20px;
      }

      &.proxy {
        margin: 0 10px 0 4px;
        width: 40px;

        svg {
          height: 15px;
          width: 15px;
        }
      }

      &:hover {
        background-color: ${({ theme }) =>
          theme.name === "Dark" ? "rgb(70 70 70)" : "rgb(218 218 218)"};
      }

      &:active {
        background-color: ${({ theme }) =>
          theme.name === "Dark" ? "rgb(82 82 82)" : "rgb(205 205 205)"};
      }

      &:disabled {
        background-color: inherit;

        svg {
          fill: rgb(152 152 152);
        }
      }
    }

    &:not(:first-child) {
      border-bottom: 1px solid
        ${({ theme }) =>
          theme.name === "Dark" ? "rgb(85 85 85)" : "rgb(205 205 205)"};
      height: 37px;
      justify-content: left;
      padding: 0 8px;

      button {
        margin-bottom: 4px;
        margin-right: 4px;
      }
    }

    input {
      background-color: ${({ theme }) =>
        theme.name === "Dark" ? "rgb(31 31 31)" : "rgb(255 255 255)"};
      border-radius: 18px;
      color: ${({ theme }) =>
        theme.name === "Dark" ? "rgb(255 255 255)" : "rgb(25 25 25)"};
      font-family: ${({ theme }) => theme.formats.systemFont};
      font-size: 13px;
      height: 34px;
      letter-spacing: 0.2px;
      margin: 0 6px;
      padding: 0 13px;
      padding-bottom: 2px;
      width: 100%;

      &:focus {
        outline: 2px solid rgb(168 199 250);
      }

      &::selection {
        background-color: rgb(0 74 119);
      }
    }
  }
`;

export default StyledBrowser;
