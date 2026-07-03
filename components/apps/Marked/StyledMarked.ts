import styled from "styled-components";
import Message from "styles/common/Message";
import ScrollBars from "styles/common/ScrollBars";
import { DEFAULT_SCROLLBAR_WIDTH } from "utils/constants";

const portfolioArticleStyles = `
    &.portfolio {
      background: #f7f7f5;
      color: #1c1c1c;
      font-family: "Segoe UI", system-ui, -apple-system, sans-serif;
      font-size: 16px;
      line-height: 1.65;
      padding: 0;

      .portfolio-page {
        margin: 0 auto;
        max-width: 700px;
        padding: 28px 36px 48px;
      }

      .portfolio-byline {
        border-bottom: 1px solid #ddd;
        color: #666;
        font-size: 0.8rem;
        letter-spacing: 0.02em;
        margin: 0 0 28px;
        padding-bottom: 12px;
      }

      h1 {
        border-bottom: none;
        color: #111;
        font-size: 1.75rem;
        font-weight: 600;
        letter-spacing: -0.01em;
        line-height: 1.2;
        margin: 0 0 0.75em;
        padding: 0;
      }

      h1 + p {
        color: #444;
        font-size: 1rem;
        margin-top: 0;
      }

      h2 {
        border-bottom: 1px solid #ddd;
        color: #111;
        font-size: 1.15rem;
        font-weight: 600;
        margin-top: 2em;
        padding-bottom: 0.3em;
      }

      h3 {
        color: #222;
        font-size: 1rem;
        font-weight: 600;
        margin-top: 1.25em;
      }

      p {
        margin: 0.65em 0;
      }

      strong {
        color: #111;
        font-weight: 600;
      }

      a {
        color: #1a1a1a;
        font-weight: 500;
        text-decoration: underline;
        text-decoration-color: #999;
        text-underline-offset: 2px;

        &:hover {
          text-decoration-color: #1a1a1a;
        }
      }

      blockquote {
        background: #f0f0ee;
        border-left: 3px solid #888;
        border-radius: 0;
        color: #333;
        margin: 1.25em 0;
        padding: 12px 16px;

        p {
          margin: 0;
        }
      }

      hr {
        background: #ddd;
        border: none;
        height: 1px;
        margin: 2em 0;
      }

      table {
        background: #fff;
        border: 1px solid #ccc;
        border-collapse: collapse;
        border-radius: 0;
        border-spacing: 0;
        box-shadow: none;
        font-size: 0.95rem;
        margin: 1em 0 1.5em;
        width: 100%;

        th {
          background: #eee;
          border: 1px solid #ccc;
          color: #111;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.01em;
          padding: 8px 12px;
          text-align: left;
          text-transform: none;
        }

        td {
          border: 1px solid #ddd;
          color: #333;
          padding: 8px 12px;
        }

        tr:nth-child(even) td {
          background: #fafafa;
        }
      }

      ol,
      ul {
        padding-left: 1.4em;
      }

      li {
        margin: 0.35em 0;
      }

      li::marker {
        color: #666;
      }

      code:not([class]) {
        background: #eee;
        border-radius: 2px;
        color: #333;
        font-size: 0.9em;
        padding: 0.1em 0.35em;
      }

      em {
        color: #555;
      }
    }
`;

const StyledMarked = styled.div`
  height: 100%;
  width: 100%;

  article {
    ${ScrollBars(DEFAULT_SCROLLBAR_WIDTH, 0, 0, "light")};
    background-color: #f9f9f9;
    box-sizing: border-box;
    font-size: 16px;
    height: 100%;
    line-height: 1.5;
    overflow-wrap: break-word;
    overflow-y: auto;
    padding: 16px 32px;
    width: 100%;

    * {
      all: revert;
      user-select: text;
    }

    a {
      color: #0366d6;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    header {
      display: flex;
    }

    h1,
    h2 {
      border-bottom: 1px solid #ccc;
      margin: 10px 0;
    }

    h1 {
      font-size: 2em;
      padding: 9px 0;

      header & {
        margin: 0;
      }

      &:first-of-type {
        margin-top: 0;
      }
    }

    h2 {
      font-size: 1.5em;
      padding: 7px 0;
    }

    h3 {
      font-size: 1em;
      padding: 5px 0;
    }

    ul {
      line-height: 1.6;
      padding-inline-start: 30px;
    }

    nav {
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 3px;
      margin-right: 10px;

      > ul {
        font-size: 14px;
        list-style-type: none;
        margin: 10px 0;
        padding: 0;
        position: sticky;
        top: 5px;

        > li {
          min-width: 125px;
          padding: 0 15px;

          > ul {
            padding-left: 25px;

            > li {
              font-size: 0.8em;
            }
          }
        }
      }

      .selected {
        color: #111;
        font-weight: 700;

        &:hover {
          text-decoration: none;
        }
      }
    }

    table {
      border: 1px solid #ddd;
      border-collapse: collapse;
      border-spacing: 0;

      td,
      th {
        border: 1px solid #ddd;
        padding: 5px;
      }
    }

    pre {
      background-color: #f6f8fa;
      border-radius: 3px;
      font-family:
        SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace;
      font-size: 85%;
      line-height: 1.45;
      overflow: auto;
      padding: 16px;
    }

    code:not([class]) {
      background-color: rgb(27 31 35 / 5%);
      border-radius: 3px;
      font-size: 85%;
      margin: 0;
      padding: 0.2em 0.4em;
    }

    &.drop {
      ${Message("Drop markdown file here", "#000")};
    }

    ${portfolioArticleStyles}
  }
`;

export default StyledMarked;
